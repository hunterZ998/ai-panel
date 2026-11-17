"""Package the two public reader pages and their data into a local HTML file."""
import base64
import gzip
import json
import re


def packed(value):
    data = json.dumps(value, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
    return base64.b64encode(gzip.compress(data, compresslevel=6, mtime=0)).decode("ascii")


def write_offline_panel(home, news, snapshots, output_file):
    news_url = "?offline=news"
    home = home.replace("https://hunterz998.github.io/ai-panel/news.html", news_url)
    home = home.replace("./news.html", news_url)
    home = home.replace('newsBase + "?sector="', 'newsBase + "&sector="')
    news = re.sub(r'(<a\b[^>]*\bid="project-home-link"[^>]*\bhref=")\./(")',
                  r'\g<1>?offline=project\2', news)
    file_check = "const fileMode=location.protocol==='file:';"
    if file_check not in news:
        raise ValueError("Unrecognized news reader snapshot-loading mode")
    news = news.replace(file_check, "const fileMode=location.protocol==='file:'&&!window.__publicSnapshot;", 1)
    # The public interface only reads the prepublished GET projections. Requests to
    # optional server-only features get a useful offline status and never touch the network.
    shim = """<script>
    window.fetch = async function(input, options = {}) {
      const url = new URL(typeof input === "string" ? input : input.url, location.href);
      const file = url.pathname.split("/").pop();
      const archive = window.__publicSnapshot;
      if ((options.method || "GET").toUpperCase() === "GET" && /\\/data\\/[^/]+\\.json$/.test(url.pathname) &&
          Object.hasOwn(archive, file)) return Response.json(archive[file]);
      return Response.json({status:"unavailable",message:"离线版可浏览已收录记录。此操作需要在线服务。"}, {status:503});
    };
    </script>"""
    news = news.replace("<head>", "<head>" + shim, 1)
    policy = """<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data: blob:; font-src data:; connect-src 'none'; base-uri 'none'; form-action 'none'">"""
    home = home.replace("<head>", "<head>" + policy, 1)
    news = news.replace("<head>", "<head>" + policy, 1)
    payload = packed({"home": home, "news": news, "files": snapshots})
    launcher = """<!doctype html><html lang="zh-CN"><meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"><title>AI应用面板</title>
    <p id="loading">正在打开离线面板…</p><script>
    (async () => {
      const raw = Uint8Array.from(atob("PAYLOAD"), c => c.charCodeAt(0));
      const stream = new Blob([raw]).stream().pipeThrough(new DecompressionStream("gzip"));
      const bundle = await new Response(stream).json();
      const news = new URLSearchParams(location.search).get("offline") === "news";
      document.open();
      window.__publicSnapshot = bundle.files;
      document.write(news ? bundle.news : bundle.home);
      document.close();
    })().catch(() => {
      const message = document.getElementById("loading");
      if (message) message.textContent = "请用近期版本的 Edge、Chrome、Firefox 或 Safari 打开此文件。";
    });
    </script></html>"""
    output_file.write_text(launcher.replace("PAYLOAD", payload), encoding="utf-8")
