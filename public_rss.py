"""Poll two official public RSS feeds from the Pages runner for the panel's agent API."""
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from html import unescape
from html.parser import HTMLParser
import json
from pathlib import Path
import re
from urllib.parse import urlsplit
from urllib.request import Request, urlopen
from xml.etree import ElementTree


SOURCES = {
    "36kr": ("36氪", "36kr.com", [
        "https://www.36kr.com/feed-article", "https://www.36kr.com/feed",
    ]),
    "techcrunch": ("TechCrunch", "techcrunch.com", [
        "https://techcrunch.com/category/artificial-intelligence/feed/", "https://techcrunch.com/feed/",
    ]),
}
PUBLISHED = "https://hunterz998.github.io/ai-panel/data/public-rss.json"
AI = re.compile(r"人工智能|大模型|智能体|机器学习|生成式|算力|推理模型|多模态|智能驾驶|深度学习|具身|机器人|"
                r"豆包|智谱|月之暗面|通义千问|英伟达|(?<![a-z])(?:AI|LLMs?|GPT|OpenAI|ChatGPT|Anthropic|"
                r"Gemini|DeepSeek|Nvidia|Claude|agentic)(?![a-z])|artificial intelligence|machine learning", re.I)


class PlainText(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts = []

    def handle_data(self, data):
        self.parts.append(data)


def plain(raw):
    p = PlainText()
    p.feed(unescape(raw or "")[:16000])
    return " ".join(" ".join(p.parts).split())


def timestamp(raw):
    if not raw:
        return None
    try:
        value = datetime.fromisoformat(" ".join(raw.split()))
    except ValueError:
        try:
            value = parsedate_to_datetime(raw)
        except (TypeError, ValueError, OverflowError):
            return None
    return value.astimezone(timezone.utc) if value and value.tzinfo else None


def fetch(url, accept):
    req = Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; AI-Panel-Publisher/1.0; +https://github.com/hunterZ998/ai-panel)", "Accept": accept})
    with urlopen(req, timeout=15) as response:
        buf = response.read(2_000_001)
    if len(buf) > 2_000_000:
        raise ValueError("oversize source")
    return buf


def read_feed(key, now):
    publisher, domain, endpoints = SOURCES[key]
    for url in endpoints:
        try:
            root = ElementTree.fromstring(fetch(url, "application/rss+xml, application/xml"))
            entries = root.findall("./channel/item")
            valid = 0
            items = {}
            for entry in entries:
                title = plain(entry.findtext("title"))
                link = (entry.findtext("link") or "").strip()
                addr = urlsplit(link)
                date = timestamp(entry.findtext("pubDate"))
                if not (title and date and addr.scheme == "https" and addr.hostname in (domain, "www." + domain) and not addr.username):
                    continue
                valid += 1
                summary = plain(entry.findtext("description"))[:250]
                if not now - timedelta(days=7) <= date <= now or not AI.search(title + " " + summary):
                    continue
                items[link] = dict(source=key, id=key + ":" + link, publisher=publisher, title=title[:380],
                                   summary=summary[:120], url=link, originalUrl=link, publishedAt=date.isoformat(),
                                   category="媒体报道", attribution={"name": publisher, "url": link})
            if not valid:
                raise ValueError("no dated official entries")
            meta = dict(status="live", fetchedAt=datetime.now(timezone.utc).isoformat(),
                        count=len(items), scanned=valid, endpoint=url)
            return key, meta, list(items.values())
        except (OSError, ValueError, ElementTree.ParseError) as err:
            print(key, url, type(err).__name__)
    return key, {"status": "offline", "count": 0}, []


def main():
    now = datetime.now(timezone.utc)
    with ThreadPoolExecutor(max_workers=2) as pool:
        results = list(pool.map(lambda key: read_feed(key, now), SOURCES))
    old = {}
    if any(meta["status"] == "offline" for _, meta, _ in results):
        try:
            old = json.loads(fetch(PUBLISHED, "application/json"))
        except (OSError, ValueError):
            pass
    output = {"sources": {}, "items": []}
    for key, meta, rows in results:
        prior = old.get("sources", {}).get(key, {})
        if meta["status"] == "offline" and prior.get("fetchedAt"):
            meta = dict(prior, status="stale")
            rows = [r for r in old.get("items", []) if r.get("source") == key]
        output["sources"][key] = meta
        output["items"].extend(rows)
        print(key, meta["status"], "items", len(rows), "fetchedAt", meta.get("fetchedAt"))
    path = Path("dist/data/public-rss.json")
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(output, ensure_ascii=False), encoding="utf-8")


if __name__ == "__main__":
    main()
