import fs from 'node:fs';

// Matches the news reader's X-source and sector classification rules.
const QUALITY_POLICY_VERSION='x-quality-v1';
export function canonicalXPost(row){
  const value=typeof row==='string'?row:row?.originalUrl||row?.url;
  try{const u=new URL(value);if(u.protocol!=='https:'||u.port||u.username||u.password||!['x.com','twitter.com','www.x.com','www.twitter.com','mobile.x.com','mobile.twitter.com'].includes(u.hostname))return null;
    const m=u.pathname.match(/^\/(?:([a-z\d_]{1,15})\/status(?:es)?|i\/web\/status)\/(\d{10,22})(?:\/(?:photo|video)\/\d+)?\/?$/i);
    return m?{id:m[2],url:'https://x.com/'+(m[1]||'i')+'/status/'+m[2]}:null;
  }catch{return null;}
}
export function isXInformation(row){return !!canonicalXPost(row)||row?.origin==='x'||row?.source==='x';}

// The six mandates, in the order recorded on 2026-10-10 (effective 2026-10-09).
// Research questions and company watchlists are separate from this taxonomy.
export const SECTORS = [
  {id:'model', label:'大模型', description:'模型、训练数据，以及训练和推理基础设施'},
  {id:'video', label:'视频生成', description:'视频生成与编辑模型、产品及制作流程'},
  {id:'ai4s', label:'AI4S', description:'AI for Science，科学建模、实验和研究验证'},
  {id:'embodied', label:'具身', description:'大脑、小脑、机器人数据和本体'},
  {id:'edge', label:'端侧', description:'终端设备上的 AI 感知、计算与交互'},
  {id:'security', label:'AI 安全', description:'模型、数据和 Agent 的安全，以及 AI 安全产品'}
];

// Short, specific signals can stand alone. Broad words such as model, chip, camera,
// data or security need context. A publisher name or a URL never assigns a sector.
const ai = /人工智能|大模型|智能体|机器学习|神经网络|深度学习|生成式|语言模型|\b(?:ai|llms?|agentic|machine learning|deep learning|neural networks?|foundation models?|generative models?|transformers?)\b/i;
const modelCompanies = /OpenAI|Anthropic|DeepSeek|智谱|月之暗面|硅基流动|CoreWeave|Together AI|Fireworks AI|Mistral AI|Cohere/i;
const finance = /估值|融资|招股|上市|营收|资本支出|采购|订单|\b(?:valuation|valued at|funding|raises?|raised|IPO|roadshow|revenues?|capex|contracts?)\b/i;
const science = /药物发现|药物设计|蛋白质|材料发现|晶体结构|分子模拟|科学实验|理论物理|天体物理|量子化学|基因组|实验室自动化|\b(?:drug discovery|drug design|proteins?|material(?:s)? discovery|molecular (?:dynamics|design)|genomics?|astrophysics|physics|chemistry|scientific (?:experiments?|discovery)|self-driving lab(?:oratorie)?s?)\b/i;
const securityAI = /智能体|[大小]模型|模型权重|生成式|机器学习|人工智能|\b(?:AI|llms?|agentic|chatbots?|model weights?)\b/i;
const controls = /权限[管治控]|身份安全|越权|凭据|网络安全|网络攻击|数据泄露|数据泄漏|安全防护|安全治理|安全审计|内容安全|黑客[攻入]|滥用|\b(?:cybersecurity|security|privilege escalation|credentials?|data breach|abuse|malicious|threat detection|breached)\b/i;
const device = /手机|随身设备|终端芯片|笔记本电脑|可穿戴|耳戴|\b(?:phones?|smartphones?|handsets?|wearables?|laptops?|headsets?|mobile devices?)\b/i;
const local = /离线|本地[运推部执]|端上|设备上[运推部执]|\b(?:offline|locally|local inference|runs? (?:directly |entirely )?on)\b/i;
const languageModel = /大语言模型|基础模型|大模型|语言模型|多模态模型|推理模型|\b(?:LLMs?|foundation models?|language models?|multimodal models?|reasoning models?)\b/i;
const modelName = /\b(?:GPT[- ]?\d+(?:\.\d+)?|Gemini\s+\d+(?:\.\d+)?|(?:Claude\s+)?(?:Opus|Sonnet|Haiku|Fable)\s+\d+(?:\.\d+)?|Llama[- ]?\d+(?:\.\d+)?|Qwen[- ]?\d+(?:\.\d+)?|DeepSeek[- ](?:R\d+|V\d+))\b/i;
const infrastructure = /\b(?:GPU(?:s)?|TPU(?:s)?|CUDA|vLLM|SGLang|data cent(?:er|re)s?|compute clusters?|inference chips?)\b|算力|数据中心|推理芯片|训练芯片/i;
const hardware = /人形机器人|具身智能|具身数据|机器狗|机械臂|灵巧手|机器人(?:大脑|小脑|本体|训练|数据|控制|部署|操作|仿真)|\b(?:embodied AI|humanoid(?:s| robots?)?|robotics|robot arms?|quadruped robots?|robot (?:data|control|foundation models?|manipulation)|vision[- ]language[- ]action|sim[- ]to[- ]real)\b/i;

const rules = {
  model:[
    [languageModel], [modelName],
    [/模型(?:权重|预训练|后训练|蒸馏)|预训练语料|强化学习环境|训练(?:数据|语料)|推理(?:框架|引擎|服务|集群)|训练集群|\b(?:training (?:data(?:sets?)?|corpora|clusters?)|(?:model|knowledge) distillation|model weights?|inference (?:engines?|serving|infrastructure)|post[- ]training|pre[- ]training)\b/i],
    [ai,infrastructure], [modelCompanies,infrastructure], [infrastructure,/训练|推理|\b(?:training|inference)\b/i],
    [modelCompanies,finance], [/AI\s*模型|模型|\bAI models?\b/i,/推理(?:执行|优化|性能)|预训练|开源权重|微调|\b(?:fine[- ]tuning|inference|weights)\b/i]
  ],
  video:[
    [/视频生成|生成视频|文生视频|图生视频|可控视频|视频合成|视频大模型|AI\s*视频|\b(?:text[- ]to[- ]video|image[- ]to[- ]video|video[- ]to[- ]video|generat(?:ive|ed) video|AI[- ](?:generated )?video|video (?:generation|generators?|synthesis|diffusion))\b/i],
    [/可灵(?:AI)?|爱诗科技|\b(?:PixVerse|Seedance|Kling AI|Veo[- ]?\d+(?:\.\d+)?|Sora[- ]?\d+)\b/i],
    [ai,/视频(?:剪辑|编辑|制作)|\bvideo (?:editing|production|post[- ]production)\b/i]
  ],
  ai4s:[
    [/\b(?:AI4S|AI for science|scientific machine learning|AlphaFold|AlphaProteo|AlphaGenome|AlphaGeometry)\b|科学智能|科研智能体|AI\s*制药/i],
    [ai,science], [modelName,science]
  ],
  embodied:[
    [hardware], [/宇树科技|智元机器人|波士顿动力|\b(?:Unitree|Boston Dynamics|Figure AI|Agibot|Physical Intelligence)\b/i],
    [/机器人|\brobots?\b/i,/遥操作|本体|驱动关节|运动控制|触觉|末端执行器|\b(?:tactile|locomotion|teleoperation|actuators?|manipulators?|dexterous)\b/i]
  ],
  edge:[
    [/端侧(?:\s*AI|智能|推理|模型|芯片|部署|计算)?|设备端|端上(?:模型|推理)|\b(?:on[- ]device|edge AI|edge inference|tinyml|AI (?:PCs?|pins?|pendants?|glasses)|smart glasses)\b|智能眼镜|AI\s*(?:眼镜|耳机|录音卡)|本地大模型/i],
    [device,local,ai], [device,local,modelName],
    [/手机浏览器(?:中|上)?(?:直接|实时|本地)?运行|\bruns? (?:entirely |locally )?in (?:a |the )?(?:phone|mobile) browser\b/i,/模型|\b(?:AI|model)\b/i]
  ],
  security:[
    [/AI\s*安全|大模型安全|模型(?:安全|越狱|窃取)|提示词?注入|智能体安全|\b(?:AI (?:safety|security)|prompt injection|model jailbreak(?:s|ing)?|model (?:security|theft)|adversarial examples?|agent security|LLM security)\b/i],
    [securityAI,controls]
  ]
};

export function classifySectors(row) {
  if(isXInformation(row)&&row.quality?.status==='eligible'&&row.quality.policyVersion===QUALITY_POLICY_VERSION){
    return SECTORS.filter(s=>row.quality.sectors?.includes(s.id)).map(s=>({id:s.id,label:s.label,reason:row.quality.entryReason||'原文与证据审核关联',terms:[],reviewed:true}));
  }
  const fields = [row?.title,row?.originalTitle,row?.summary];
  const text = [...fields.filter(value=>typeof value==='string').map(value=>value.slice(0,650)),typeof row?.originalText==='string'?row.originalText.slice(0,30000):''].join(' ').normalize('NFKC');
  // Discovery already has public collector topic tags. Compact display excerpts must
  // not silently discard them or make the same post differ from the X radar view.
  const tagged=row?.fastSignal?[row.sectors,row.xSectorIds].flatMap(value=>Array.isArray(value)?value:value?[value]:[]):[];
  const taggedIds=new Set(tagged.flatMap(value=>typeof value==='string'?value.split(/[\s,]+/):value&&typeof value.id==='string'?[value.id]:[]));
  const matches=SECTORS.filter(sector=>taggedIds.has(sector.id)).map(sector=>({id:sector.id,label:sector.label,reason:'采集时的主题匹配，尚未完成事实核验',terms:[],reviewed:false}));
  if(!text.trim())return matches;
  for(const sector of SECTORS) {
    if(matches.some(match=>match.id===sector.id))continue;
    for(const signature of rules[sector.id]) {
      const terms=signature.map(rule=>text.match(rule)?.[0]);
      if(terms.every(Boolean)) {
        matches.push({id:sector.id,label:sector.label,reason:terms.join('、'),terms});
        break;
      }
    }
    if(row.quality?.status==='eligible'&&row.quality.policyVersion===QUALITY_POLICY_VERSION&&row.quality.sectors?.includes(sector.id)&&!matches.some(match=>match.id===sector.id))
      matches.push({id:sector.id,label:sector.label,reason:row.quality.entryReason||'原文与证据审核关联',terms:[]});
  }
  return matches;
}


const rows = JSON.parse(fs.readFileSync(0, 'utf8'));
console.log(JSON.stringify(rows.map(row => classifySectors(row).map(hit => hit.id))));
