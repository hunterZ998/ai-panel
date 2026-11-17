"""Publish the existing dashboard UI with a snapshot of its anonymous public feeds."""
import json
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timedelta, timezone
from pathlib import Path
from urllib.request import HTTPRedirectHandler, Request, build_opener


ORIGIN = "https://ai-news.huntergraceman123.chatgpt.site"
ROUTES = {
    "feed": "/api/feed",
    "sectors": "/api/research/sectors",
    "daily": "/api/research/daily",
    "radar": "/api/x/radar",
    "watch": "/api/wechat/watch",
    "discoveries": "/api/wechat/discoveries",
}


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, *args):
        return None


def get(path, mime):
    req = Request(ORIGIN + path, headers={
        "Accept": mime,
        "User-Agent": "AI-Panel-Publisher/1.0 (+https://github.com/hunterZ998/ai-panel)",
    })
    with build_opener(NoRedirect()).open(req, timeout=75) as r:
        if r.status != 200 or r.headers.get_content_type() != mime:
            raise ValueError(f"Unexpected response for {path}")
        return r.read().decode()


def render(html, payloads, dest, snapshot_note=None):
    sector = payloads["sectors"]
    if (len(sector["items"]) != 6 or any("meeting" in s for s in sector["items"])
            or any(a.get("visibility") != "public" for a in sector["atoms"])):
        raise ValueError("Unexpected six-sector public projection")
    if not isinstance(payloads["feed"]["items"], list):
        raise ValueError("Invalid public feed")
    if "<title>AI应用面板</title>" not in html or '<main id="main"' not in html:
        raise ValueError("Dashboard template not recognized")
    dest.mkdir(parents=True, exist_ok=True)
    for key, path in ROUTES.items():
        needle = "fetch('" + path + "',"
        if needle not in html:
            raise ValueError(f"Missing dashboard route {path}")
        html = html.replace(needle, "fetch('./data/" + key + ".json',")
    stamp = datetime.now(timezone(timedelta(hours=8))).strftime("%Y-%m-%d %H:%M（北京时间）")
    # Private IMA catalogs and the editable team workspace stay at their original host.
    # Public source citations and the reviewed evidence are in the sectors projection.
    html = html.replace("fetch('/api/access',", "fetch('./data/access.json',")
    html = html.replace("fetch('/api/workspace',", "fetch('./data/workspace.json',")
    html = html.replace("fetch('/api/ima?'+new URLSearchParams(params),",
                        "fetch('./data/library.json',")
    html = html.replace("<main id=\"main\" tabindex=\"-1\">",
                        '<main id="main" tabindex="-1"><small>公开只读版 · '
                        + (snapshot_note or ('数据同步于 ' + stamp)) + '</small>')
    html = html.replace("</head>", "<style>#maintainer-login{display:none!important}</style></head>")
    data = dest / "data"
    data.mkdir(exist_ok=True)
    outputs = dict(payloads, access={"authenticated": False, "canMaintain": False},
                   workspace={"status": "unavailable"},
                   library={"status": "unconfigured", "message": "公开观点与出处见六赛道。完整 IMA 资料请在原工作台查看。"})
    for key, value in outputs.items():
        (data / (key + ".json")).write_text(json.dumps(value, ensure_ascii=False), encoding="utf-8")
    (dest / "index.html").write_text(html, encoding="utf-8")
    (dest / ".nojekyll").touch()


def main():
    access = json.loads(get("/api/access", "application/json"))
    if access.get("authenticated") is not False or access.get("canMaintain") is not False:
        raise ValueError("Expected anonymous visitor")
    with ThreadPoolExecutor(max_workers=4) as pool:
        responses = list(pool.map(lambda path: json.loads(get(path, "application/json")), ROUTES.values()))
    render(get("/", "text/html"), dict(zip(ROUTES, responses)), Path("dist"))


if __name__ == "__main__":
    main()
