import json
from pathlib import Path
from tempfile import TemporaryDirectory
import unittest
from unittest.mock import patch

from build import publish_files
from build_backup import main as build_backup


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

    def test_backup_uses_project_secondary_page_and_identical_public_share(self):
        from build_share import render_original
        from test_share_panel import ORIGINAL, fixture
        data = fixture()
        data["radar"]["items"] = []
        data["daily"]["items"] = []
        data["watch"]["items"] = []
        share = render_original(ORIGINAL, data).encode("utf-8")
        project = '<script type="application/json" id="project-data">' + json.dumps(
            {"visibility":"public", "cases":[]}) + '</script>'
        with TemporaryDirectory() as tmp:
            root=Path(tmp); source=root/"dist"; out=root/"backup"
            (source/"data").mkdir(parents=True); (source/"share").mkdir()
            for name,value in data.items():
                (source/"data"/(name+".json")).write_text(json.dumps(value),encoding="utf-8")
            (source/"index.html").write_text('<script>location.replace("./share/")</script>',encoding="utf-8")
            (source/"projects.html").write_text(project,encoding="utf-8")
            (source/"share/index.html").write_bytes(share)
            with patch("build_backup.classify", side_effect=lambda rows:[[] for _ in rows]):
                build_backup(source,out)
            self.assertEqual((out/"panel.html").read_bytes(),share)
            self.assertIn("AI应用人机台",(out/"README.md").read_text(encoding="utf-8"))
            self.assertTrue((out/"sections/projects.md").is_file())
            # A stale or missing share must not silently recreate the old UI.
            (source/"share/index.html").unlink()
            with self.assertRaisesRegex(ValueError,"Missing self-contained"):
                build_backup(source,out)


if __name__ == "__main__":
    unittest.main()
