"""Create the anonymous GitHub Markdown reader and its self-contained HTML download."""
import argparse
import html
import json
import re
import subprocess
from datetime import datetime, timedelta, timezone
from pathlib import Path
from urllib.parse import quote, urlsplit

from build import ROUTES, check_access, public_radar, validate_news


DOWNLOAD = "https://github.com/hunterZ998/ai-panel/releases/download/public-reader/panel.html"
SECTORS = {"model": "大模型", "video": "视频生成", "ai4s": "AI4S", "embodied": "具身智能",
           "edge": "端侧 AI", "security": "AI 安全"}
SHANGHAI = timezone(timedelta(hours=8))


def plain(value):
    return re.sub(r"\s+", " ", str(value or "")).strip()


def md(value):
    value = html.escape(plain(value), quote=False)
    return re.sub(r"([\\`*_{\[\]()|#~!])", r"\\\1", value)


def link(label, url):
    try:
        parsed = urlsplit(url or "")
        if parsed.scheme in {"https", "http"} and parsed.hostname and not parsed.username and not parsed.password:
            return "[" + md(label) + "](<" + quote(url, safe="/?:@=;&%+,$~._-#") + ">)"
    except (ValueError, TypeError):
        pass
    return md(label)


def stamp(value):
    if not value:
        return "暂无时间记录"
    try:
        return datetime.fromisoformat(value.replace("Z", "+00:00")).astimezone(SHANGHAI).strftime("%Y-%m-%d %H:%M")
    except ValueError:
        return md(value)


def classify(rows):
    if not rows:
        return []
    proc = subprocess.run(["node", str(Path(__file__).with_name("backup_sectors.mjs"))],
                          input=json.dumps(rows, ensure_ascii=False), capture_output=True, encoding="utf-8", check=True)
    return json.loads(proc.stdout)


def as_news(row):
    title = row.get("displayTitle") or row.get("title") or row.get("originalTitle") or row.get("originalText") or "原文"
    desc = plain(row.get("displaySummary") or row.get("summary") or row.get("originalText") or "")
    url = row.get("originalUrl") or row.get("url") or row.get("canonicalUrl")
    lines = ["- " + link(title, url)]
    if desc and desc != plain(title):
        lines.append("  " + md(desc[:260] + ("…" if len(desc) > 260 else "")))
    meta = [md(row.get("publisher") or row.get("author") or row.get("source")), stamp(row.get("publishedAt") or row.get("observedAt"))]
    lines.append("  " + " · ".join(v for v in meta if v))
    return "  \n".join(lines)


def as_research(row):
    parts = ["### " + md(row.get("title")), md(row.get("fact")), "**判断**　" + md(row.get("judgment"))]
    if row.get("verification"):
        parts.append("**验证**　" + md(row["verification"]))
    refs = [link(s.get("title") or "原文", s.get("url")) for s in row.get("sources", [])]
    if refs:
        parts.append(" · ".join(refs))
    return "\n\n".join(parts)


def distinct(rows):
    found = {}
    for row in rows:
        key = row.get("originalUrl") or row.get("url") or row.get("canonicalUrl") or row.get("id")
        if key:
            found.setdefault(key, row)
    return sorted(found.values(), key=lambda r: r.get("publishedAt") or r.get("observedAt") or "", reverse=True)


def write_sections(dest, key, title, blocks, intro, per_page=45):
    pages = [blocks[k:k + per_page] for k in range(0, len(blocks), per_page)] or [[]]
    def filename(index):
        return key + ("" if index == 0 else "-" + str(index + 1)) + ".md"
    for index, records in enumerate(pages):
        nav = ["[返回面板](../README.md)"]
        if index:
            nav.append(f"[上一页]({filename(index - 1)})")
        if index + 1 < len(pages):
            nav.append(f"[下一页]({filename(index + 1)})")
        nav.append(f"第 {index + 1} / {len(pages)} 页")
        nav = " · ".join(nav)
        body = [f"# {title}", nav, intro if index == 0 else "", *records, nav]
        (dest / filename(index)).write_text("\n\n".join(s for s in body if s) + "\n", encoding="utf-8")
    return f"[{title}](sections/{filename(0)})"


def main(source, out):
    out.mkdir(parents=True, exist_ok=True)
    sections = out / "sections"
    sections.mkdir(exist_ok=True)
    names = list(ROUTES) + ["access", "workspace", "library"]
    if (source / "data/public-rss.json").is_file():
        names.append("public-rss")
    data = {name: json.loads((source / "data" / (name + ".json")).read_bytes()) for name in names}
    check_access(data["access"])
    validate_news(data)
    data["radar"] = public_radar(data["radar"])
    if data["workspace"].get("status") != "unavailable" or data["library"].get("status") != "unconfigured":
        raise ValueError("Unexpected library/workspace contents on the public reader")
    # The primary entry now redirects into the seven-module share. Project
    # metadata stays in its explicit secondary page, not the root redirect.
    project_page = source / "projects.html"
    if not project_page.exists():
        project_page = source / "index.html"
    home = project_page.read_text(encoding="utf-8")
    match = re.search(r'<script type="application/json" id="project-data">(.*?)</script>', home, re.S)
    project = json.loads(match.group(1)) if match else {}
    if project.get("visibility") != "public":
        raise ValueError("Expected the public workbench")
    share_file = source / "share" / "index.html"
    if not share_file.is_file():
        raise ValueError("Missing self-contained public share")
    share = share_file.read_bytes()
    if b'id="original-share-transport"' not in share or b'id="seven-module-app"' not in share:
        raise ValueError("Expected the read-only seven-module share")

    feed, daily, radar, watch = (data[k] for k in ("feed", "daily", "radar", "watch"))
    rss = data.get("public-rss", {}).get("items", [])
    articles = distinct(feed["items"] + rss)
    fast = distinct(feed.get("signals", []) + radar.get("signals", []) + data["discoveries"].get("signals", []))
    feed_at = stamp(feed.get("fetchedAt"))
    daily_at = stamp(daily.get("checkedAt"))
    article_sectors = classify(articles)
    research_sectors = classify([{"title": r["title"], "summary": r["fact"], "originalText": r["judgment"]}
                                 for r in daily["items"]])
    site = ["# AI应用人机台", f"全信源快照 **{feed_at}**，关联研究 **{daily_at}**（北京时间）。",
            f"[下载完整交互面板，离线打开]({DOWNLOAD})", "## 六赛道观察"]
    for key, name in SECTORS.items():
        relevant = [r for hit, r in zip(article_sectors, articles) if key in hit]
        perspective = [r for r in data["sectors"]["items"] if r.get("sector") == key]
        overview = ["**" + md(r["title"]) + "**　" + md(r["claim"]) + "\n\n验证　" + md(r.get("verify"))
                    + "\n\n出处　" + md(r.get("source")) + "，第 " + md(r.get("paragraph")) + " 段" for r in perspective]
        for atom in data["sectors"]["atoms"]:
            if key not in atom.get("sectorIds", []):
                continue
            atom_lines = ["**" + md(atom["title"]) + "**　" + md(atom["claim"])]
            for item in atom.get("sourceRefs", []):
                atom_lines.append("出处　" + md(item.get("title")) + " · " + md(item.get("locator")))
            for review in atom.get("savedReviews", []):
                rel = {"supports": "支持", "weakens": "削弱", "related": "相关", "pending": "待核"}.get(review.get("relation"), "待核")
                atom_lines.append(f"- {rel} · " + link(review.get("title") or "公开原文", review.get("url"))
                                  + " · " + md(review.get("reason")))
            overview.append("\n\n".join(atom_lines))
        studies = [as_research(r) for hit, r in zip(research_sectors, daily["items"]) if key in hit]
        intro = "\n\n".join(["## 赛道研究", *overview, *studies, f"## 相关资讯 · {len(relevant)} 条"])
        anchor = write_sections(sections, key, name, list(map(as_news, relevant)), intro)
        site.append(f"- {anchor} · {len(relevant)} 条相关资讯")
    site.append("## 资讯与研究入口")
    channels = [
        ("all", "全信源资讯", articles, f"完整公开资讯，共 {len(articles)} 条。"),
        ("fast", "主题快讯", fast, "含初筛线索。来源自述、观点与传闻保留原出处，尚待核验。"),
        ("radar", "X 雷达精选", radar["items"], "雷达观测时间（北京时间）　" + stamp(radar.get("checkedAt"))),
        ("wechat", "微信公众号", watch["items"], "原文索引最近观测（北京时间）　" + stamp(watch.get("lastObservationAt") or watch.get("checkedAt"))),
        ("institutions", "机构研究", [r for r in articles if r.get("source") in {"menlo", "a16z", "semianalysis", "citrini"}], ""),
        ("podcasts", "中英文播客", [r for r in articles if str(r.get("source", "")).startswith("pod_") or r.get("source") in {"latent_space", "shengfm"}], ""),
        ("product", "产品发现", [r for r in articles if str(r.get("source", "")).startswith("producthunt")], ""),
    ]
    for key, title, rows, intro in channels:
        site.append("- " + write_sections(sections, key, title, list(map(as_news, rows)), intro) + f" · {len(rows)} 条")
    site.append("- " + write_sections(sections, "research", "全部关联研究", list(map(as_research, daily["items"])),
                                     "含尚未归入六赛道的公开研究。") + f" · {len(daily['items'])} 项")
    cases = []
    for case in project["cases"]:
        parts = ["### " + md(case["name"]), md(case.get("question")), md(case.get("judgment")), md(case.get("nextAction"))]
        for stage in case.get("stages", []):
            parts.extend(["**" + md(stage["label"]) + "**　" + md(stage.get("summary"))])
            parts.extend("- " + md(item.get("title")) + " · " + md(item.get("text")) for item in stage.get("items", []))
        parts.extend(link(s.get("label") or "原文", s.get("url")) for s in case.get("sources", []))
        cases.append("\n\n".join(filter(None, parts)))
    site.append("- " + write_sections(sections, "projects", "项目研究", cases, "公开研究工作台，七个模块。"))
    (out / "README.md").write_text("\n\n".join(site) + "\n", encoding="utf-8")
    # Reuse the exact published page: its embedded snapshots, CSP and denied
    # writes work both over HTTPS and when this file is opened locally.
    (out / "panel.html").write_bytes(share)
    print(f"Built GitHub reader: {len(articles)} articles, {len(fast)} fast signals, {len(daily['items'])} research items")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", type=Path, default=Path("dist"))
    parser.add_argument("--out", type=Path, required=True)
    args = parser.parse_args()
    main(args.source, args.out)
