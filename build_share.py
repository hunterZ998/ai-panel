"""Publish the original information dashboard as a self-contained read-only share.

The production news reader supplies its entire layout, routes and interactions.
Only the transport boundary changes: GETs read embedded public projections and
all writes are rejected. No separate dashboard template is used.
"""
import argparse
import base64
from copy import deepcopy
from datetime import datetime, timezone
import gzip
import json
from pathlib import Path
import re
from urllib.parse import urlsplit, urlunsplit

from build import check_access, public_radar, validate_news

ROOT = Path(__file__).resolve().parent
DATASETS = ("feed", "sectors", "radar", "daily", "watch", "discoveries", "public-rss",
            "access", "workspace", "library")

PUBLIC_POLICY = ("default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; "
                 "img-src data: blob:; font-src data:; connect-src 'none'; object-src 'none'; "
                 "base-uri 'none'; form-action 'none'")


def install_workbench(news):
    """Add seven-module navigation while retaining the original research engine."""
    news = news.replace("const productName='AI应用面板';", "const productName='AI应用人机台';")
    news = news.replace('<title>AI应用面板</title>', '<title>AI应用人机台</title>')
    news = news.replace('aria-label="AI应用面板首页"', 'aria-label="AI应用人机台首页"')
    news = news.replace('<b>AI应用面板</b>', '<b>AI应用人机台</b>')
    news = news.replace('<h1 id="page-title">AI应用面板</h1>', '<h1 id="page-title">AI应用人机台</h1>')
    # New module routes are handled by the new shell. Do not let the legacy
    # router translate an unknown route back to #sectors.
    listener = "window.addEventListener('hashchange',()=>{const next=routeFromHash();"
    render_end = r'    renderKnowledgeRail\(\);\s*\n  \}'
    if news.count(listener) != 1 or news.count('  render();openViewData();refresh();') != 1 or len(re.findall(render_end, news)) != 1:
        raise ValueError('Original research engine changed; refusing incomplete seven-module integration')
    news = news.replace(listener, "window.addEventListener('hashchange',()=>{if(location.hash.startsWith('#work-'))return;const next=routeFromHash();", 1)
    # Reuse exactly the original classifier and evidence review function.
    ready = '  render();openViewData();refresh();'
    api = """  window.__humanWorkbenchBridge = {
      evidence: atom => routeSectorEvidence(atom,[...feed.items,...fastRows],atom.savedReviews||[]),
      sector: () => sectorChoice,
      setSector: id => { sectorChoice=(id==='other'||SECTORS.some(s=>s.id===id))?id:''; if(view==='sectors')render(); }
    };
"""
    news = news.replace(ready, api + ready, 1)
    news = re.sub(render_end,
                  "    renderKnowledgeRail();\n    window.dispatchEvent(new Event('human-workbench-source-rendered'));\n  }", news, count=1)
    css = (ROOT / 'seven-module.css').read_text(encoding='utf-8')
    js = (ROOT / 'seven-module.js').read_text(encoding='utf-8')
    news = news.replace('</head>', '<style id="seven-module-style">\n'+css+'\n</style></head>', 1)
    return news.replace('</body>', '<script id="seven-module-app">\n'+js+'\n</script></body>', 1)


def _record_key(row):
    value = row.get("canonicalUrl") or row.get("originalUrl") or row.get("url") or row.get("id")
    if not isinstance(value, str):
        return ""
    try:
        url = urlsplit(value)
        if url.scheme in {"http", "https"}:
            return urlunsplit(("https", url.netloc.lower(), url.path.rstrip("/"), url.query, ""))
    except ValueError:
        pass
    return value


def public_snapshots(data):
    """Validate the public boundary without dropping any public channel or record."""
    snapshots = deepcopy(data)
    check_access(snapshots["access"])
    validate_news(snapshots)
    if not snapshots["feed"]["items"]:
        raise ValueError("Refusing to replace the published panel with an empty snapshot")
    if snapshots["workspace"].get("status") != "unavailable":
        raise ValueError("Refusing private workspace data in the public share")
    if snapshots["library"].get("status") != "unconfigured":
        raise ValueError("Refusing private library data in the public share")
    snapshots["access"] = {"authenticated": False, "canMaintain": False}
    snapshots["workspace"] = {"status": "unavailable"}
    snapshots["library"] = {"status": "unconfigured", "message": "公开观点与出处见六赛道。完整 IMA 资料仅在授权工作区开放。"}
    snapshots["radar"] = public_radar(snapshots["radar"])
    # The original reader consumes feed.json. Include the cloud RSS supplements
    # there, retaining old observations and the source states of every other feed.
    feed = snapshots["feed"]
    rss = snapshots.get("public-rss", {})
    known = {_record_key(row) for row in feed["items"] if isinstance(row, dict)}
    for row in rss.get("items", []):
        if isinstance(row, dict) and (key := _record_key(row)) and key not in known:
            feed["items"].append(row)
            known.add(key)
    if not isinstance(feed.get("sources"), dict):
        raise ValueError("Expected feed source status map")
    for key, source in rss.get("sources", {}).items():
        if isinstance(source, dict):
            feed["sources"][key] = {**feed["sources"].get(key, {}), **source}
    return snapshots


def render_original(news, data):
    """Keep the original application and replace only its data transport."""
    snapshots = public_snapshots(data)
    # A live origin may append its own Cloudflare challenge iframe. It belongs
    # to that host, not the dashboard, and must not follow a public snapshot.
    news = re.sub(r'<script\b[^>]*>.*?</script>',
                  lambda match: "" if "__CF$cv$params" in match.group(0)
                  and "/cdn-cgi/challenge-platform/" in match.group(0) else match.group(0),
                  news, flags=re.S | re.I)
    file_mode = "const fileMode=location.protocol==='file:';"
    if news.count(file_mode) != 1 or '<main id="main"' not in news:
        raise ValueError("Unrecognized original dashboard; refusing a partial replacement")
    if "window.__originalShareReady" in news:
        raise ValueError("Expected a fresh original reader, not an already packed share")
    news = news.replace(file_mode, "const fileMode=location.protocol==='file:'&&!window.__originalShareReady;", 1)
    refresh = "$('refresh').addEventListener('click',()=>refresh(true));"
    if news.count(refresh) != 1:
        raise ValueError("Original refresh control was not recognized")
    news = news.replace(refresh, "$('refresh').addEventListener('click',()=>location.reload());", 1)
    news = re.sub(r'(<a\b[^>]*\bid="project-home-link"[^>]*\bhref=")\./(")',
                  r'\g<1>../\2', news, count=1)
    index_search = "result=searchWechatIndex(feed.items,args);"
    if news.count(index_search) != 1:
        raise ValueError("Original public WeChat index search was not recognized")
    news = news.replace(index_search, """const publicIndex=await window.__originalShareReady;
        result=searchWechatIndex([...(feed.items||[]),...(publicIndex['watch.json']?.items||[]),
          ...(publicIndex['discoveries.json']?.items||[]),...(publicIndex['discoveries.json']?.signals||[])],args);
        result.indexed=true;
        result.message='仅搜索此页已收录的公众号原文；未发起 Alpha 派实时检索。';""", 1)
    # Rendering computes index results again; it must use the same full public
    # article index as the submit handler, including the six-account watch.
    index_render = "searchWechatIndex(feed.items,wx)"
    if news.count(index_render) != 1:
        raise ValueError("Original WeChat index rendering was not recognized")
    news = news.replace(index_render, "searchWechatIndex(window.__originalShareWechatRows(feed.items),wx)", 1)
    bundle = {key + ".json": snapshots[key] for key in DATASETS}
    raw = json.dumps(bundle, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
    encoded = base64.b64encode(gzip.compress(raw, compresslevel=6, mtime=0)).decode("ascii")
    meta = {"mode": "original-public-reader", "generatedAt": datetime.now(timezone.utc).isoformat(),
            "tracks": len(snapshots["sectors"]["items"]), "opinions": len(snapshots["sectors"]["atoms"]),
            "feedItems": len(snapshots["feed"]["items"]), "signals": len(snapshots["feed"].get("signals", []))}
    marker = '<script type="application/json" id="original-share-meta">' + json.dumps(meta) + '</script>'
    policy = '<meta http-equiv="Content-Security-Policy" content="' + PUBLIC_POLICY + '">'
    shim = """<script id="original-share-transport">
    (() => {
      'use strict';
      const packed = 'PAYLOAD';
      const ready = (async () => {
        const bytes = Uint8Array.from(atob(packed), c => c.charCodeAt(0));
        const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
        const archive = await new Response(stream).json();
        window.__originalShareArchive = archive;
        return archive;
      })();
      window.__originalShareReady = ready;
      window.__originalShareWechatRows = rows => [...(rows||[]),
        ...(window.__originalShareArchive?.['watch.json']?.items||[]),
        ...(window.__originalShareArchive?.['discoveries.json']?.items||[]),
        ...(window.__originalShareArchive?.['discoveries.json']?.signals||[])];
      // No saved native fetch and no network fallback: shared viewers can never
      // reach maintenance services through this application transport.
      const apiFiles = {'/api/feed':'feed.json','/api/research/sectors':'sectors.json',
        '/api/research/daily':'daily.json','/api/x/radar':'radar.json',
        '/api/wechat/watch':'watch.json','/api/wechat/discoveries':'discoveries.json',
        '/api/access':'access.json','/api/workspace':'workspace.json','/api/ima':'library.json'};
      window.fetch = async function(input, options = {}) {
        const request = typeof Request !== 'undefined' && input instanceof Request ? input : null;
        const method = String(options.method || request?.method || 'GET').toUpperCase();
        if (!['GET','HEAD'].includes(method)) return Response.json({status:'read_only',message:'此链接只供查看，不能修改共享内容。'}, {status:405});
        let url;
        try { url = new URL(typeof input === 'string' ? input : input.url || String(input), location.href); }
        catch { return Response.json({status:'unavailable',message:'无法识别请求地址。'}, {status:400}); }
        const internal = (url.origin === location.origin && ['http:','https:'].includes(url.protocol)) ||
          (location.protocol === 'file:' && url.protocol === 'file:');
        const match = /\\/data\\/([^/]+\\.json)$/.exec(url.pathname);
        const file = internal && (match ? match[1] : apiFiles[url.pathname]);
        const archive = await ready;
        if (file && Object.hasOwn(archive, file)) {
          if (method === 'HEAD') return new Response(null,{status:200,headers:{'Content-Type':'application/json'}});
          return Response.json(archive[file]);
        }
        return Response.json({status:'unavailable',message:'分享页只展示已公开资料；此操作需要授权工作区。'}, {status:503});
      };
      ready.catch(() => {
        const notify = () => {
        const note = document.createElement('p');
        note.setAttribute('role','alert');
        note.textContent='公开资料未能载入，请使用更新版本的浏览器重新打开分享链接。';
        document.body.prepend(note);
        };
        if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',notify,{once:true});
        else notify();
      });
    })();
    </script>""".replace("PAYLOAD", encoded)
    if "<head>" not in news:
        raise ValueError("Original dashboard head missing")
    return install_workbench(news.replace("<head>", "<head>" + policy + marker + shim, 1))


def build(source, dest):
    data = {}
    for name in DATASETS:
        file = source / "data" / (name + ".json")
        if not file.exists() and name != "public-rss":
            raise ValueError(f"Missing public snapshot: {name}")
        data[name] = json.loads(file.read_text(encoding="utf-8")) if file.exists() else {}
    original = source / "news.html"
    if not original.exists():
        raise ValueError("Missing original dashboard HTML")
    html = render_original(original.read_text(encoding="utf-8"), data)
    payload = public_snapshots(data)
    dest.mkdir(parents=True, exist_ok=True)
    (dest / "index.html").write_text(html, encoding="utf-8")
    # Root now opens the same workbench. Keep the older project workbook view
    # as an explicit secondary destination, including existing #project links.
    root_page = source / 'index.html'
    if root_page.exists():
        old = root_page.read_text(encoding='utf-8')
        if 'id="project-data"' in old:
            (source / 'projects.html').write_text(old.replace('AI应用面板','AI应用人机台'), encoding='utf-8')
    root_page.write_text('''<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>AI应用人机台</title>
<meta name="description" content="AI应用人机台：目的、标准、知识库、判断、策略、执行、复盘及优化。">
</head><body><p><a href="./share/">打开 AI应用人机台</a></p><script>
const target=location.hash.startsWith('#project/')?'./projects.html':'./share/';
location.replace(target+location.search+location.hash);
</script></body></html>''', encoding='utf-8')
    print(json.dumps({"output": str(dest / "index.html"), "tracks": len(payload["sectors"]["items"]),
                      "articles": len(payload["feed"]["items"]), "opinions": len(payload["sectors"]["atoms"]),
                      "bytes": len(html.encode("utf-8"))}, ensure_ascii=False))
    return payload


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", type=Path, default=Path("dist"))
    parser.add_argument("--dest", type=Path, default=Path("dist/share"))
    options = parser.parse_args()
    build(options.source, options.dest)
