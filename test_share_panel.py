import base64
from copy import deepcopy
import gzip
import json
from pathlib import Path
import re
from tempfile import TemporaryDirectory
import unittest

from build_share import DATASETS, build, public_snapshots, render_original


ORIGINAL = """<!doctype html><html><head><style>.original{color:green}</style></head><body>
<nav><button data-view="sectors">六赛道</button><button data-view="wechat">公众号</button>
<button data-view="xradar">X雷达</button><button data-view="institutions">机构研究</button></nav>
<a id="project-home-link" href="./">投研工作台</a><main id="main"></main><script>
const fileMode=location.protocol==='file:';
function draw(){return searchWechatIndex(feed.items,wx);}
async function run(){let result; result=searchWechatIndex(feed.items,args);}
$('refresh').addEventListener('click',()=>refresh(true));
function render(){
    renderKnowledgeRail();
  }
window.addEventListener('hashchange',()=>{const next=routeFromHash();if(next!==view)selectView(next);});
  render();openViewData();refresh();
</script></body></html>"""


def fixture():
    return {'access':{'authenticated':False,'canMaintain':False},
            'feed':{'items':[{'id':'a','title':'Existing public report','url':'https://example.com/a'}],
                    'signals':[{'id':'pending','title':'Unreviewed topic'}],
                    'sources':{'old':{'status':'stale'}}},
            'sectors':{'items':[{} for _ in range(6)],'atoms':[]},
            'radar':{'entities':[]}, 'daily':{}, 'watch':{}, 'discoveries':{},
            'public-rss':{'items':[],'sources':{}},
            'workspace':{'status':'unavailable'},'library':{'status':'unconfigured'}}


def unpack(html):
    payload = re.search(r"const packed = '([A-Za-z0-9+/=]+)';", html).group(1)
    return json.loads(gzip.decompress(base64.b64decode(payload)))


class PublicShareTest(unittest.TestCase):
    def test_seven_module_shell_retains_read_only_transport_and_routes(self):
        page=render_original(ORIGINAL,fixture())
        self.assertIn('id="seven-module-app"',page)
        self.assertIn('id="seven-module-style"',page)
        self.assertIn('AI应用人机台',page)
        self.assertIn("if(location.hash.startsWith('#work-'))return",page)
        self.assertIn('window.__humanWorkbenchBridge',page)
        self.assertIn('routeSectorEvidence(atom,[...feed.items,...fastRows]',page)
        self.assertIn("['review','复盘及优化'",page)
        self.assertIn("['xradar','X 雷达']",page)
        self.assertIn("['wechat','公众号']",page)
        self.assertEqual(unpack(page)['access.json'],{'authenticated':False,'canMaintain':False})

    def test_changed_original_engine_fails_before_publishing_partial_ui(self):
        with self.assertRaisesRegex(ValueError,'research engine changed'):
            render_original(ORIGINAL.replace('  render();openViewData();refresh();','  differentStartup();'),fixture())

    def test_source_formatting_does_not_break_render_bridge(self):
        page=render_original(ORIGINAL.replace('renderKnowledgeRail();\n  }','renderKnowledgeRail();\n\n  }'),fixture())
        self.assertEqual(page.count("window.dispatchEvent(new Event('human-workbench-source-rendered'))"),1)

    def test_root_opens_same_workbench_and_keeps_old_project_links(self):
        with TemporaryDirectory() as tmp:
            root=Path(tmp);(root/'data').mkdir()
            for name,value in fixture().items():
                (root/'data'/(name+'.json')).write_text(json.dumps(value),encoding='utf-8')
            (root/'news.html').write_text(ORIGINAL,encoding='utf-8')
            (root/'index.html').write_text('<div id="project-data">AI应用面板</div>',encoding='utf-8')
            build(root,root/'share')
            self.assertIn('AI应用人机台',(root/'projects.html').read_text(encoding='utf-8'))
            self.assertIn("location.hash.startsWith('#project/')",(root/'index.html').read_text(encoding='utf-8'))
            self.assertIn('./share/',(root/'index.html').read_text(encoding='utf-8'))

    def test_original_style_and_navigation_are_preserved(self):
        page=render_original(ORIGINAL,fixture())
        for pattern in [r'<style>.*?</style>',r'<nav>.*?</nav>']:
            self.assertEqual(re.findall(pattern,ORIGINAL,re.S),re.findall(pattern,page,re.S))
        self.assertIn('href="../"',page)
        self.assertIn('connect-src',page)
        self.assertIn("()=>location.reload()",page)
        self.assertNotIn('share-page.css',page)

    def test_data_cannot_terminate_the_script_element(self):
        data=fixture()
        malicious='</script><script>globalThis.injected=true</script>'
        data['feed']['items'][0]['title']=malicious
        page=render_original(ORIGINAL,data)
        self.assertNotIn(malicious,page)
        self.assertEqual(unpack(page)['feed.json']['items'][0]['title'],malicious)

    def test_origin_challenge_does_not_follow_the_shared_application(self):
        injected = '<script>window.__CF$cv$params={};load("/cdn-cgi/challenge-platform/scripts/jsd/main.js");</script>'
        page = render_original(ORIGINAL.replace('</body>',injected+'</body>'),fixture())
        self.assertNotIn('__CF$cv$params',page)
        self.assertNotIn('/cdn-cgi/challenge-platform/',page)
        self.assertIn('searchWechatIndex',page)

    def test_only_public_access_and_library_snapshots_allowed(self):
        for key,value in [('access',{'authenticated':True,'canMaintain':True}),
                          ('workspace',{'status':'ready','secret':'PRIVATE'}),
                          ('library',{'status':'ready','secret':'PRIVATE'})]:
            data=fixture();data[key]=value
            with self.subTest(key=key),self.assertRaises(ValueError): public_snapshots(data)
        data=fixture()
        data['radar']['entities']=[{'id':'public','name':'Public','sources':['PRIVATE_CANARY']}]
        data['library']['ignoredPrivateExtra']='PRIVATE_CANARY'
        projected=public_snapshots(data)
        self.assertNotIn('PRIVATE_CANARY',json.dumps(projected))
        self.assertEqual(projected['access'],{'authenticated':False,'canMaintain':False})

    def test_rss_merges_without_dropping_fast_signals_or_old_sources(self):
        data=fixture();before=deepcopy(data)
        data['public-rss']={'items':[{'url':'https://example.com/a'},{'url':'https://example.com/b','title':'Fresh'}],
                            'sources':{'new':{'status':'live'}}}
        projected=public_snapshots(data)
        self.assertEqual(len(projected['feed']['items']),2)
        self.assertEqual(projected['feed']['signals'],before['feed']['signals'])
        self.assertEqual(projected['feed']['sources']['old'],{'status':'stale'})
        self.assertEqual(projected['feed']['sources']['new'],{'status':'live'})
        self.assertEqual(data['feed'],before['feed'])

    def test_failed_refresh_preserves_previous_output(self):
        with TemporaryDirectory() as tmp:
            root=Path(tmp);(root/'data').mkdir();out=root/'share';out.mkdir()
            (out/'index.html').write_text('last successful snapshot',encoding='utf-8')
            data=fixture();data['feed']['items']=[]
            for name in DATASETS:(root/'data'/(name+'.json')).write_text(json.dumps(data[name]),encoding='utf-8')
            (root/'news.html').write_text(ORIGINAL,encoding='utf-8')
            with self.assertRaises(ValueError):build(root,out)
            self.assertEqual((out/'index.html').read_text(encoding='utf-8'),'last successful snapshot')


if __name__=='__main__':unittest.main()
