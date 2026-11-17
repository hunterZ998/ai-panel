import json
from pathlib import Path
from tempfile import TemporaryDirectory
import unittest

from build import publish_files


class PublicReaderTest(unittest.TestCase):
    def test_all_public_output_excludes_entity_provenance(self):
        canary = "internal-source-must-never-ship"
        entity = {
            "id": "public-company", "name": "Public Company",
            "aliases": ["PublicCo"], "sectors": ["model"],
            "sources": [canary], "unrecognizedField": {"note": canary},
        }
        html = """<html><head></head><body><header class="topbar"></header><main id="main"></main>
        <script>fetch('./data/feed.json',{});fetch('./data/access.json',{});</script></body></html>"""
        data = {
            "radar": {"entities": [entity], "reports": [{"id": "public-report"}]},
            "sectors": {"items": [{} for _ in range(6)], "atoms": []},
            "feed": {"items": []},
        }
        for cached in (False, True):
            with self.subTest(cached=cached), TemporaryDirectory() as tmp:
                destination = Path(tmp)
                publish_files(html, data, destination, cached)
                self.assertTrue(all(canary not in f.read_text(encoding="utf-8")
                                    for f in destination.rglob("*") if f.is_file()))
                radar = json.loads((destination / "data/radar.json").read_text(encoding="utf-8"))
                self.assertEqual(radar["reports"], data["radar"]["reports"])
                self.assertEqual(radar["entities"], [{k: entity[k] for k in ("id", "name", "aliases", "sectors")}])
        self.assertEqual(entity["sources"], [canary])


if __name__ == "__main__":
    unittest.main()
