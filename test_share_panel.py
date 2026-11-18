import json
from pathlib import Path
import re
from tempfile import TemporaryDirectory
import unittest
from unittest.mock import patch

from build_share import build, render, ROOT
from share_data import build_payload


class PublicShareTest(unittest.TestCase):
    def test_source_text_cannot_escape_json_script(self):
        hostile = '</script><script>globalThis.bad=true</script>&<img src=x onerror=alert(1)>'
        payload = {"meta": {}, "tracks": [], "articles": [{"title": hostile}], "opinions": []}
        html = render(payload)
        self.assertNotIn(hostile, html)
        match = re.search(r'<script[^>]*id=[\"\']share-data[\"\'][^>]*>(.*?)</script>', html, re.S)
        self.assertIsNotNone(match)
        self.assertEqual(json.loads(match.group(1)), payload)

    def test_anonymous_reader_does_not_call_any_backend(self):
        script = (ROOT / "share-page.js").read_text(encoding="utf-8")
        html = (ROOT / "share-page.html").read_text(encoding="utf-8")
        self.assertNotRegex(script, r'\b(?:fetch|XMLHttpRequest|WebSocket|EventSource)\s*\(')
        self.assertNotRegex(html, r'<script[^>]+src=|<iframe|contenteditable=[\"\']?true')
        self.assertNotIn("127.0.0.1", html + script)
        self.assertNotIn("localhost", html + script)

    def test_empty_refresh_does_not_destroy_existing_publication(self):
        empty = {"tracks": [{} for _ in range(6)], "articles": [], "opinions": []}
        with TemporaryDirectory() as tmp:
            path = Path(tmp)
            dest = path / "share"
            dest.mkdir()
            (dest / "index.html").write_text("last successful snapshot", encoding="utf-8")
            with patch("build_share.build_payload", return_value=empty):
                with self.assertRaises(ValueError):
                    build(path, dest)
            self.assertEqual((dest / "index.html").read_text(encoding="utf-8"), "last successful snapshot")

    def test_private_atoms_and_unknown_provenance_are_never_projected(self):
        canary = "PRIVATE_UNPUBLISHED_CANARY"
        payload = build_payload({
            "sectors": {"items": [], "atoms": [{"id": "secret", "visibility": "private",
                "sectorIds": ["model"], "claim": canary, "title": canary}]},
            "radar": {"entities": [{"name": "A", "sources": [canary]}], "items": [], "signals": []},
            "feed": {"items": [], "signals": [], "privateState": canary},
        })
        self.assertNotIn(canary, json.dumps(payload, ensure_ascii=False))


if __name__ == "__main__":
    unittest.main()
