"""Publish a self-contained, anonymous research snapshot with no maintenance API."""
import argparse
import json
from pathlib import Path

from share_data import build_payload

ROOT = Path(__file__).resolve().parent
DATASETS = ("feed", "sectors", "radar", "daily", "watch", "discoveries", "public-rss")


def render(payload):
    html = (ROOT / "share-page.html").read_text(encoding="utf-8")
    encoded = json.dumps(payload, ensure_ascii=False, separators=(",", ":"))
    # Public source text must never terminate the JSON script element.
    encoded = encoded.replace("&", "\\u0026").replace("<", "\\u003c").replace(">", "\\u003e")
    parts = {
        "<!--SHARE_STYLE-->": "<style>\n" + (ROOT / "share-page.css").read_text(encoding="utf-8") + "\n</style>",
        "<!--SHARE_SCRIPT-->": "<script>\n" + (ROOT / "share-page.js").read_text(encoding="utf-8") + "\n</script>",
        "<!--SHARE_DATA-->": encoded,
    }
    for marker, content in parts.items():
        if html.count(marker) != 1:
            raise ValueError(f"Expected one template marker: {marker}")
        html = html.replace(marker, content)
    return html


def build(source, dest):
    data = {}
    for name in DATASETS:
        file = source / "data" / (name + ".json")
        data[name] = json.loads(file.read_text(encoding="utf-8")) if file.exists() else {}
    payload = build_payload(data)
    if len(payload["tracks"]) != 6:
        raise ValueError("A public share must preserve all six research tracks")
    if not payload["articles"]:
        raise ValueError("Refusing to replace the published panel with an empty snapshot")
    html = render(payload)
    dest.mkdir(parents=True, exist_ok=True)
    (dest / "index.html").write_text(html, encoding="utf-8")
    print(json.dumps({"output": str(dest / "index.html"), "tracks": len(payload["tracks"]),
                      "articles": len(payload["articles"]), "opinions": len(payload["opinions"]),
                      "bytes": len(html.encode("utf-8"))}, ensure_ascii=False))
    return payload


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", type=Path, default=Path("dist"))
    parser.add_argument("--dest", type=Path, default=Path("dist/share"))
    options = parser.parse_args()
    build(options.source, options.dest)
