"""Build the read-only research workbench and its existing six-sector news reader."""
import argparse
import json
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import HTTPRedirectHandler, Request, build_opener

ROOT = Path(__file__).resolve().parent
ORIGIN = "https://ai-news.huntergraceman123.chatgpt.site"
PAGES = "https://hunterz998.github.io/ai-panel"
ROUTES = {
    "feed": "/api/feed",
    "sectors": "/api/research/sectors",
    "daily": "/api/research/daily",
    "radar": "/api/x/radar",
    "watch": "/api/wechat/watch",
    "discoveries": "/api/wechat/discoveries",
}
ANONYMOUS = {"authenticated": False, "canMaintain": False}
STAGES = ["purpose", "standards", "evidence", "judgment", "strategy", "execution", "review"]


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, *args):
        return None


def get(url, mime):
    request = Request(url, headers={
        "Accept": mime,
        "User-Agent": "AI-Panel-Publisher/1.0 (+https://github.com/hunterZ998/ai-panel)",
    })
    with build_opener(NoRedirect()).open(request, timeout=50) as response:
        if response.status != 200 or response.headers.get_content_type() != mime:
            raise ValueError(f"Unexpected response for {url}")
        return response.read().decode("utf-8")


def check_access(access):
    if any(access.get(k) is not False for k in ANONYMOUS):
        raise ValueError("Expected anonymous reader")


def validate_news(data):
    sectors = data["sectors"]
    if (len(sectors["items"]) != 6 or any("meeting" in row for row in sectors["items"])
            or any(atom.get("visibility") != "public" for atom in sectors["atoms"])):
        raise ValueError("Unexpected six-sector public projection")
    if not isinstance(data["feed"]["items"], list):
        raise ValueError("Invalid public feed")


def live_reader():
    check_access(json.loads(get(ORIGIN + "/api/access", "application/json")))
    with ThreadPoolExecutor(max_workers=4) as pool:
        responses = pool.map(lambda path: json.loads(get(ORIGIN + path, "application/json")), ROUTES.values())
        data = dict(zip(ROUTES, responses))
    html = get(ORIGIN + "/", "text/html")
    for name, route in ROUTES.items():
        call = "fetch('" + route + "',"
        if call not in html:
            raise ValueError(f"Missing dashboard route {route}")
        html = html.replace(call, "fetch('./data/" + name + ".json',")
    html = html.replace("fetch('/api/access',", "fetch('./data/access.json',")
    html = html.replace("fetch('/api/workspace',", "fetch('./data/workspace.json',")
    html = html.replace("fetch('/api/ima?'+new URLSearchParams(params),", "fetch('./data/library.json',")
    return html, data


def last_published_reader():
    check_access(json.loads(get(PAGES + "/data/access.json", "application/json")))
    try:
        html = get(PAGES + "/news.html", "text/html")
    except HTTPError as error:
        if error.code != 404:
            raise
        # A deployment made before the workbench served the news reader at the root.
        html = get(PAGES + "/", "text/html")
    with ThreadPoolExecutor(max_workers=4) as pool:
        responses = pool.map(lambda name: json.loads(get(PAGES + "/data/" + name + ".json", "application/json")), ROUTES)
        return html, dict(zip(ROUTES, responses))


def saved_reader(directory):
    def read(name):
        return json.loads((directory / "data" / (name + ".json")).read_text(encoding="utf-8"))
    check_access(read("access"))
    page = directory / "news.html"
    if not page.exists():
        page = directory / "index.html"
    return page.read_text(encoding="utf-8"), {name: read(name) for name in ROUTES}


def workbench(project_data):
    for case in project_data["cases"]:
        if [stage["key"] for stage in case["stages"]] != STAGES:
            raise ValueError("Missing project research stage")
    def asset(name):
        return (ROOT / name).read_text(encoding="utf-8")
    html = asset("workbench.html")
    for marker in ("<!--WORKBENCH_STYLE-->", "<!--PROJECT_DATA-->", "<!--WORKBENCH_SCRIPT-->"):
        if html.count(marker) != 1:
            raise ValueError(f"Page must contain one {marker}")
    payload = json.dumps(project_data, ensure_ascii=False).replace("&", "\\u0026").replace("<", "\\u003c").replace(">", "\\u003e")
    scripts = asset("import-workbook.js") + "\n" + asset("workbench.js")
    return (html.replace("<!--WORKBENCH_STYLE-->", "<style>\n" + asset("workbench.css") + "\n</style>")
            .replace("<!--WORKBENCH_SCRIPT-->", "<script>\n" + scripts + "\n</script>")
            .replace("<!--PROJECT_DATA-->", payload))


def publish_files(html, data, dest, cached):
    validate_news(data)
    if ('<main id="main"' not in html or "fetch('./data/feed.json'," not in html
            or "fetch('./data/access.json'," not in html):
        raise ValueError("Anonymous news reader not recognized")
    # Only use one of the existing six public classifications in a topic link.
    sector_start = "let sectorChoice='', sourceGroup='';"
    if sector_start in html:
        html = html.replace(sector_start, """const requestedSector = new URLSearchParams(location.search).get('sector');
  let sectorChoice = location.hash === '#sectors' && SECTORS.some(s => s.id === requestedSector) ? requestedSector : '', sourceGroup='';""", 1)
    if 'id="project-home-link"' not in html:
        head = '<header class="topbar">'
        if head not in html:
            raise ValueError("Cannot install return link")
        html = html.replace(head, head + '<a id="project-home-link" href="./">‹ 投研工作台</a>', 1)
        html = html.replace("</head>", """<style>#maintainer-login{display:none!important}
        #project-home-link{display:inline-block;margin:.3rem 1rem;padding:.45rem .25rem;
        font:600 14px/1.3 system-ui,sans-serif;color:#174a73;text-decoration:none}
        #project-home-link:hover{text-decoration:underline}</style></head>""", 1)
    project_data = json.loads((ROOT / "project-cases.json").read_text(encoding="utf-8"))
    if project_data["visibility"] != "public" or not project_data["cases"]:
        raise ValueError("Expected published cases")
    project_data["newsSnapshot"] = {"fetchedAt": data["feed"].get("fetchedAt"), "cached": cached}
    dest.mkdir(parents=True, exist_ok=True)
    (dest / "data").mkdir(exist_ok=True)
    outputs = dict(data, access=ANONYMOUS, workspace={"status": "unavailable"},
                   library={"status": "unconfigured", "message": "公开观点与出处见六赛道。完整 IMA 资料请在原工作台查看。"})
    for key, value in outputs.items():
        (dest / "data" / (key + ".json")).write_text(json.dumps(value, ensure_ascii=False), encoding="utf-8")
    (dest / "news.html").write_text(html, encoding="utf-8")
    (dest / "index.html").write_text(workbench(project_data), encoding="utf-8")
    (dest / ".nojekyll").touch()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--snapshot-dir", type=Path)
    parser.add_argument("--dest", type=Path, default=Path("dist"))
    args = parser.parse_args()
    if args.snapshot_dir:
        html, data = saved_reader(args.snapshot_dir)
        cached = True
    else:
        try:
            html, data = live_reader()
            validate_news(data)
            cached = False
        except (URLError, TimeoutError, ValueError, KeyError) as error:
            print(f"Live sync unavailable ({type(error).__name__}); retaining previous public observations.")
            html, data = last_published_reader()
            cached = True
    publish_files(html, data, args.dest, cached)


if __name__ == "__main__":
    main()
