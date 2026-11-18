"""Whitelist already-public snapshots for the anonymous share page; no network IO.

Classification signatures mirror work/site/src/sectors.mjs. Topic matching is
not fact verification: only records carrying an existing completed quality
review enter `selected`. Raw feeds, private context and collector routes never
leave this projection.
"""
from datetime import datetime, timezone
from hashlib import sha256
from html import unescape
from ipaddress import ip_address
import re
import unicodedata
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit


TRACKS = [("model", "大模型"), ("video", "视频生成"), ("ai4s", "AI4S"),
          ("embodied", "具身"), ("edge", "端侧"), ("security", "AI 安全")]
TRACK_IDS = {item[0] for item in TRACKS}
SOURCE_NAMES = {"aihot": "AI HOT", "36kr": "36氪", "techcrunch": "TechCrunch",
                "pedaily": "投资界", "tmtpost": "钛媒体", "itjuzi": "IT桔子",
                "ithome": "IT之家", "netease": "网易科技", "wsj": "WSJ",
                "theinformation": "The Information", "axios": "Axios",
                "bloomberg": "Bloomberg", "menlo": "Menlo Ventures", "a16z": "a16z",
                "citrini": "Citrini Research", "semianalysis": "SemiAnalysis",
                "openai": "OpenAI", "googleai": "Google AI", "anthropic": "Anthropic"}
PRIVATE = re.compile(r"(?:(?<![A-Za-z])[A-Za-z]:[\\/]|file://|(?:^|\s)/(?:Users|home)/|"
                     r"(?:drive|docs)\.google\.com/|sharepoint\.com/|obsidian://)", re.I)

# Generated from the existing production classifier, not newly inferred topics.
RULE_PATTERNS = {
  "model": [
    [
      "大语言模型|基础模型|大模型|语言模型|多模态模型|推理模型|\\b(?:LLMs?|foundation models?|language models?|multimodal models?|reasoning models?)\\b"
    ],
    [
      "\\b(?:GPT[- ]?\\d+(?:\\.\\d+)?|Gemini\\s+\\d+(?:\\.\\d+)?|(?:Claude\\s+)?(?:Opus|Sonnet|Haiku|Fable)\\s+\\d+(?:\\.\\d+)?|Llama[- ]?\\d+(?:\\.\\d+)?|Qwen[- ]?\\d+(?:\\.\\d+)?|DeepSeek[- ](?:R\\d+|V\\d+))\\b"
    ],
    [
      "模型(?:权重|预训练|后训练|蒸馏)|预训练语料|强化学习环境|训练(?:数据|语料)|推理(?:框架|引擎|服务|集群)|训练集群|\\b(?:training (?:data(?:sets?)?|corpora|clusters?)|(?:model|knowledge) distillation|model weights?|inference (?:engines?|serving|infrastructure)|post[- ]training|pre[- ]training)\\b"
    ],
    [
      "人工智能|大模型|智能体|机器学习|神经网络|深度学习|生成式|语言模型|\\b(?:ai|llms?|agentic|machine learning|deep learning|neural networks?|foundation models?|generative models?|transformers?)\\b",
      "\\b(?:GPU(?:s)?|TPU(?:s)?|CUDA|vLLM|SGLang|data cent(?:er|re)s?|compute clusters?|inference chips?)\\b|算力|数据中心|推理芯片|训练芯片"
    ],
    [
      "OpenAI|Anthropic|DeepSeek|智谱|月之暗面|硅基流动|CoreWeave|Together AI|Fireworks AI|Mistral AI|Cohere",
      "\\b(?:GPU(?:s)?|TPU(?:s)?|CUDA|vLLM|SGLang|data cent(?:er|re)s?|compute clusters?|inference chips?)\\b|算力|数据中心|推理芯片|训练芯片"
    ],
    [
      "\\b(?:GPU(?:s)?|TPU(?:s)?|CUDA|vLLM|SGLang|data cent(?:er|re)s?|compute clusters?|inference chips?)\\b|算力|数据中心|推理芯片|训练芯片",
      "训练|推理|\\b(?:training|inference)\\b"
    ],
    [
      "OpenAI|Anthropic|DeepSeek|智谱|月之暗面|硅基流动|CoreWeave|Together AI|Fireworks AI|Mistral AI|Cohere",
      "估值|融资|招股|上市|营收|资本支出|采购|订单|\\b(?:valuation|valued at|funding|raises?|raised|IPO|roadshow|revenues?|capex|contracts?)\\b"
    ],
    [
      "AI\\s*模型|模型|\\bAI models?\\b",
      "推理(?:执行|优化|性能)|预训练|开源权重|微调|\\b(?:fine[- ]tuning|inference|weights)\\b"
    ]
  ],
  "video": [
    [
      "视频生成|生成视频|文生视频|图生视频|可控视频|视频合成|视频大模型|AI\\s*视频|\\b(?:text[- ]to[- ]video|image[- ]to[- ]video|video[- ]to[- ]video|generat(?:ive|ed) video|AI[- ](?:generated )?video|video (?:generation|generators?|synthesis|diffusion))\\b"
    ],
    [
      "可灵(?:AI)?|爱诗科技|\\b(?:PixVerse|Seedance|Kling AI|Veo[- ]?\\d+(?:\\.\\d+)?|Sora[- ]?\\d+)\\b"
    ],
    [
      "人工智能|大模型|智能体|机器学习|神经网络|深度学习|生成式|语言模型|\\b(?:ai|llms?|agentic|machine learning|deep learning|neural networks?|foundation models?|generative models?|transformers?)\\b",
      "视频(?:剪辑|编辑|制作)|\\bvideo (?:editing|production|post[- ]production)\\b"
    ]
  ],
  "ai4s": [
    [
      "\\b(?:AI4S|AI for science|scientific machine learning|AlphaFold|AlphaProteo|AlphaGenome|AlphaGeometry)\\b|科学智能|科研智能体|AI\\s*制药"
    ],
    [
      "人工智能|大模型|智能体|机器学习|神经网络|深度学习|生成式|语言模型|\\b(?:ai|llms?|agentic|machine learning|deep learning|neural networks?|foundation models?|generative models?|transformers?)\\b",
      "药物发现|药物设计|蛋白质|材料发现|晶体结构|分子模拟|科学实验|理论物理|天体物理|量子化学|基因组|实验室自动化|\\b(?:drug discovery|drug design|proteins?|material(?:s)? discovery|molecular (?:dynamics|design)|genomics?|astrophysics|physics|chemistry|scientific (?:experiments?|discovery)|self-driving lab(?:oratorie)?s?)\\b"
    ],
    [
      "\\b(?:GPT[- ]?\\d+(?:\\.\\d+)?|Gemini\\s+\\d+(?:\\.\\d+)?|(?:Claude\\s+)?(?:Opus|Sonnet|Haiku|Fable)\\s+\\d+(?:\\.\\d+)?|Llama[- ]?\\d+(?:\\.\\d+)?|Qwen[- ]?\\d+(?:\\.\\d+)?|DeepSeek[- ](?:R\\d+|V\\d+))\\b",
      "药物发现|药物设计|蛋白质|材料发现|晶体结构|分子模拟|科学实验|理论物理|天体物理|量子化学|基因组|实验室自动化|\\b(?:drug discovery|drug design|proteins?|material(?:s)? discovery|molecular (?:dynamics|design)|genomics?|astrophysics|physics|chemistry|scientific (?:experiments?|discovery)|self-driving lab(?:oratorie)?s?)\\b"
    ]
  ],
  "embodied": [
    [
      "人形机器人|具身智能|具身数据|机器狗|机械臂|灵巧手|机器人(?:大脑|小脑|本体|训练|数据|控制|部署|操作|仿真)|\\b(?:embodied AI|humanoid(?:s| robots?)?|robotics|robot arms?|quadruped robots?|robot (?:data|control|foundation models?|manipulation)|vision[- ]language[- ]action|sim[- ]to[- ]real)\\b"
    ],
    [
      "宇树科技|智元机器人|波士顿动力|\\b(?:Unitree|Boston Dynamics|Figure AI|Agibot|Physical Intelligence)\\b"
    ],
    [
      "机器人|\\brobots?\\b",
      "遥操作|本体|驱动关节|运动控制|触觉|末端执行器|\\b(?:tactile|locomotion|teleoperation|actuators?|manipulators?|dexterous)\\b"
    ]
  ],
  "edge": [
    [
      "端侧(?:\\s*AI|智能|推理|模型|芯片|部署|计算)?|设备端|端上(?:模型|推理)|\\b(?:on[- ]device|edge AI|edge inference|tinyml|AI (?:PCs?|pins?|pendants?|glasses)|smart glasses)\\b|智能眼镜|AI\\s*(?:眼镜|耳机|录音卡)|本地大模型"
    ],
    [
      "手机|随身设备|终端芯片|笔记本电脑|可穿戴|耳戴|\\b(?:phones?|smartphones?|handsets?|wearables?|laptops?|headsets?|mobile devices?)\\b",
      "离线|本地[运推部执]|端上|设备上[运推部执]|\\b(?:offline|locally|local inference|runs? (?:directly |entirely )?on)\\b",
      "人工智能|大模型|智能体|机器学习|神经网络|深度学习|生成式|语言模型|\\b(?:ai|llms?|agentic|machine learning|deep learning|neural networks?|foundation models?|generative models?|transformers?)\\b"
    ],
    [
      "手机|随身设备|终端芯片|笔记本电脑|可穿戴|耳戴|\\b(?:phones?|smartphones?|handsets?|wearables?|laptops?|headsets?|mobile devices?)\\b",
      "离线|本地[运推部执]|端上|设备上[运推部执]|\\b(?:offline|locally|local inference|runs? (?:directly |entirely )?on)\\b",
      "\\b(?:GPT[- ]?\\d+(?:\\.\\d+)?|Gemini\\s+\\d+(?:\\.\\d+)?|(?:Claude\\s+)?(?:Opus|Sonnet|Haiku|Fable)\\s+\\d+(?:\\.\\d+)?|Llama[- ]?\\d+(?:\\.\\d+)?|Qwen[- ]?\\d+(?:\\.\\d+)?|DeepSeek[- ](?:R\\d+|V\\d+))\\b"
    ],
    [
      "手机浏览器(?:中|上)?(?:直接|实时|本地)?运行|\\bruns? (?:entirely |locally )?in (?:a |the )?(?:phone|mobile) browser\\b",
      "模型|\\b(?:AI|model)\\b"
    ]
  ],
  "security": [
    [
      "AI\\s*安全|大模型安全|模型(?:安全|越狱|窃取)|提示词?注入|智能体安全|\\b(?:AI (?:safety|security)|prompt injection|model jailbreak(?:s|ing)?|model (?:security|theft)|adversarial examples?|agent security|LLM security)\\b"
    ],
    [
      "智能体|[大小]模型|模型权重|生成式|机器学习|人工智能|\\b(?:AI|llms?|agentic|chatbots?|model weights?)\\b",
      "权限[管治控]|身份安全|越权|凭据|网络安全|网络攻击|数据泄露|数据泄漏|安全防护|安全治理|安全审计|内容安全|黑客[攻入]|滥用|\\b(?:cybersecurity|security|privilege escalation|credentials?|data breach|abuse|malicious|threat detection|breached)\\b"
    ]
  ]
}


def obj(value):
    return value if isinstance(value, dict) else {}


def rows(value):
    return value if isinstance(value, list) else []


def text(value, limit=2500):
    if not isinstance(value, str) or PRIVATE.search(value):
        return ""
    value = unescape(re.sub(r"<[^>]*>", "", value))
    value = " ".join(value.split())
    return value if len(value) <= limit else value[:limit - 1].rstrip() + "…"


def public_url(value):
    if not isinstance(value, str) or PRIVATE.search(value):
        return ""
    try:
        u = urlsplit(value.strip())
        host = (u.hostname or "").lower().rstrip(".")
        if (u.scheme not in ("https", "http") or not host or u.username or u.password
                or host == "localhost" or host.endswith((".localhost", ".local", ".internal"))
                or any(ord(c) < 32 for c in value)):
            return ""
        try:
            if not ip_address(host).is_global:
                return ""
        except ValueError:
            pass
        if any(k.lower() in {"access_token", "api_key", "apikey", "authorization", "token", "signature", "sig"}
               for k, _ in parse_qsl(u.query)):
            return ""
        return urlunsplit((u.scheme, u.netloc, u.path, u.query, u.fragment))
    except ValueError:
        return ""


def stamp(value):
    if not isinstance(value, str):
        return ""
    try:
        d = datetime.fromisoformat(value.replace("Z", "+00:00"))
        if d.tzinfo is None:
            d = d.replace(tzinfo=timezone.utc)
        return d.astimezone(timezone.utc).isoformat().replace("+00:00", "Z")
    except (ValueError, TypeError):
        return ""


def ids(value):
    result = []
    for item in rows(value):
        candidate = item if isinstance(item, str) else obj(item).get("id")
        if candidate in TRACK_IDS and candidate not in result:
            result.append(candidate)
    return result


def reviewed(row):
    q = obj(row.get("quality"))
    return (q.get("status") == "eligible" and q.get("applicable") is True
            and q.get("policyVersion") == "x-quality-v1" and bool(stamp(q.get("reviewedAt"))))


def classify(row):
    q = obj(row.get("quality"))
    if reviewed(row):
        return ids(q.get("sectors"))
    tagged = ids(row.get("sectors")) + ids(row.get("xSectorIds"))
    content = unicodedata.normalize("NFKC", " ".join(
        [text(row.get(key), 650) for key in ("title", "originalTitle", "summary")]
        + [text(row.get("originalText"), 30000)]))
    found = set(tagged)
    for sector, signatures in RULE_PATTERNS.items():
        if any(all(re.search(pattern, content, re.I | re.ASCII) for pattern in signature)
               for signature in signatures):
            found.add(sector)
    return [sector for sector, _ in TRACKS if sector in found]


def url_key(url):
    u = urlsplit(url)
    host = u.netloc.lower().removeprefix("www.")
    if host in {"twitter.com", "mobile.twitter.com", "mobile.x.com"}:
        host = "x.com"
    query = [(k, v) for k, v in parse_qsl(u.query, keep_blank_values=True)
             if not k.lower().startswith("utm_") and k.lower() not in {"ref", "ref_src", "s", "t", "fbclid"}]
    return urlunsplit(("https", host, u.path.rstrip("/"), urlencode(sorted(query)), ""))


def project_article(row, origin, default_time):
    row = obj(row)
    q = obj(row.get("quality"))
    if row.get("visibility") == "private" or q.get("status") in {"rejected", "reject", "excluded"}:
        return None
    url = next((candidate for key in ("canonicalUrl", "originalUrl", "url")
                if (candidate := public_url(row.get(key)))), "")
    title = text(row.get("displayTitle") or row.get("title"), 280)
    sectors = classify(row)
    if not url or not title or not sectors:
        return None
    strict = reviewed(row)
    label = text(q.get("evidenceLabel") if strict else obj(row.get("evidence")).get("label"), 130)
    is_x = row.get("origin") == "x" or row.get("source") == "x" or urlsplit(url).hostname in {"x.com", "twitter.com"}
    is_wechat = row.get("origin") == "wechat" or "mp.weixin.qq.com" == urlsplit(url).hostname
    source_key = row.get("source") or origin
    source = text(row.get("publisher") or row.get("author") or SOURCE_NAMES.get(source_key, source_key), 100)
    kind = ("x" if is_x else "wechat" if is_wechat else
            "research" if source_key in {"menlo", "a16z", "citrini", "semianalysis"} else
            "official" if source_key in {"openai", "googleai", "anthropic"} else "news")
    if not strict and is_x:
        label = "主题线索 · 待核实"
    elif not label:
        label = "媒体报道" if kind in {"news", "wechat"} else "机构观点" if kind == "research" else "官方自述"
    summary = text((q.get("summaryZh") if strict else None) or row.get("displaySummary")
                   or row.get("summary") or row.get("originalText"), 320)
    if summary == title:
        summary = ""
    return {"id": "article-" + sha256(url_key(url).encode()).hexdigest()[:16],
            "title": title, "summary": summary, "url": url, "source": source,
            "publishedAt": stamp(row.get("publishedAt")),
            "observedAt": stamp(row.get("observedAt") or row.get("discoveredAt") or default_time),
            "sectors": sectors, "kind": kind, "level": "selected" if strict else "signal",
            "evidenceLabel": label}


def project_opinions(raw):
    output = []
    for item in rows(raw):
        a = obj(item)
        sector_ids = ids(a.get("sectorIds"))
        if a.get("visibility") != "public" or not sector_ids or not text(a.get("claim")):
            continue
        opinion = {k: text(a.get(k)) for k in ("id", "title", "claim", "supportsWhen", "weakensWhen")}
        opinion.update(sectorIds=sector_ids, visibility="public", asOf=text(a.get("asOf"), 40),
                       sourceRefs=[], savedReviews=[])
        for ref in rows(a.get("sourceRefs")):
            ref = obj(ref)
            entry = {k: text(ref.get(k), 500) for k in ("title", "kind", "date", "locator")}
            if not entry["title"]:
                continue
            if public_url(ref.get("url")):
                entry["url"] = public_url(ref["url"])
            opinion["sourceRefs"].append(entry)
        for review in rows(a.get("savedReviews")):
            r = obj(review)
            if r.get("relation") not in {"supports", "weakens", "related"} or not public_url(r.get("url")):
                continue
            entry = {k: text(r.get(k), 2500) for k in ("title", "source", "reason", "excerpt")}
            entry.update(url=public_url(r["url"]), relation=r["relation"],
                         at=stamp(r.get("at")), reviewedAt=stamp(r.get("reviewedAt")),
                         corroboratingUrls=[url for v in rows(r.get("corroboratingUrls")) if (url := public_url(v))])
            opinion["savedReviews"].append(entry)
        output.append(opinion)
    return output


def build_payload(data):
    """Return meta/tracks/articles/opinions from already-public parsed JSON only."""
    data = obj(data)
    feed, radar, sector_data = (obj(data.get(k)) for k in ("feed", "radar", "sectors"))
    track_context = {r.get("sector"): r for r in rows(sector_data.get("items")) if isinstance(r, dict)}
    tracks = []
    for key, name in TRACKS:
        context = track_context.get(key, {})
        paragraph = context.get("paragraph")
        tracks.append({"id": key, "name": name, "claim": text(context.get("claim")),
                       "verify": text(context.get("verify")), "sourceTitle": text(context.get("source"), 500),
                       "sourceLocator": f"正文第{paragraph}段" if isinstance(paragraph, int) else ""})
    times = []
    for key in ("feed", "radar", "daily", "watch", "discoveries"):
        dataset = obj(data.get(key))
        at = stamp(dataset.get("fetchedAt") or dataset.get("lastSuccessAt") or dataset.get("updatedAt")
                   or dataset.get("lastObservationAt") or dataset.get("checkedAt"))
        times.append({"source": key, "at": at, "status": text(dataset.get("status") or ("stale" if dataset.get("stale") else "snapshot"), 60)})
    for key, source in obj(obj(data.get("public-rss")).get("sources")).items():
        times.append({"source": "rss:" + key, "at": stamp(obj(source).get("fetchedAt")), "status": text(obj(source).get("status"), 60)})
    observations = []
    for origin in ("feed", "radar", "watch", "discoveries", "public-rss"):
        dataset = obj(data.get(origin))
        default = (dataset.get("fetchedAt") or dataset.get("lastObservationAt")
                   or dataset.get("lastSuccessAt") or dataset.get("checkedAt"))
        for group in ("items", "signals"):
            for r in rows(dataset.get(group)):
                if origin == "public-rss":
                    default = obj(obj(dataset.get("sources")).get(obj(r).get("source"))).get("fetchedAt")
                item = project_article(r, origin, default)
                if item:
                    observations.append(item)
    unique = {}
    for item in observations:
        key = url_key(item["url"])
        existing = unique.get(key)
        if not existing:
            unique[key] = item
        else:
            winner = item if (item["level"] == "selected", item["observedAt"]) > (existing["level"] == "selected", existing["observedAt"]) else existing
            winner = dict(winner)
            # Do not broaden the reviewed categorization using an unreviewed tag.
            if winner["level"] != "selected":
                winner["sectors"] = [k for k, _ in TRACKS if k in set(item["sectors"] + existing["sectors"])]
            unique[key] = winner
    articles = sorted(unique.values(), key=lambda r: (r["publishedAt"] or r["observedAt"], r["id"]), reverse=True)
    opinions = project_opinions(sector_data.get("atoms"))
    observed = [r["observedAt"] for r in articles if r["observedAt"]]
    return {"meta": {"generatedAt": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
                     "snapshotAt": max(observed, default=""), "sourceTimes": times,
                     "notice": "公开只读快照。精选仅包含已有审核记录；主题快讯按相关性收录，媒体报道与待核线索不等于事实已确认。各信源更新日期不同，页面生成时间不代表重新核验。"},
            "tracks": tracks, "articles": articles, "opinions": opinions}
