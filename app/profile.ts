export type Metric = {
  value: string;
  label: string;
  note: string;
};

export type Capability = {
  number: string;
  title: string;
  statement: string;
  proof: string;
};

export type PortfolioProject = {
  id: "operations" | "coco" | "kol-intel" | "mowen";
  index: string;
  type: string;
  name: string;
  shortName: string;
  summary: string;
  problem: string;
  role: string;
  features: string[];
  stack: string[];
  result: string;
  image: string;
  imageAlt: string;
  gallery?: Array<{ image: string; alt: string }>;
  motionFallback?: string;
  crop?: "right" | "top" | "phone";
  secondaryImage?: string;
  secondaryAlt?: string;
  link?: string;
  linkLabel?: string;
  palette: {
    background: string;
    panel: string;
    ink: string;
    accent: string;
  };
};

export const profile = {
  name: "Mark Shi",
  eyebrow: "MARK SHI · CREATOR GROWTH × AI OPERATIONS PRODUCT",
  heroRole: "CREATOR GROWTH × AI OPERATIONS PRODUCT",
  title: "海外 Creator Growth 负责人 × AI 业务产品化实践者",
  heroProof:
    "5+ 年海外红人营销经验，0–1 搭建并管理 6 人运营团队；同时独立开发已在 GrowMax 内部持续运行的 Creator Operations OS。",
  tagline:
    "我做海外 Creator Growth，也把一线执行中的判断、数据和工作流程做成团队真正使用的产品。",
  intro:
    "我从 2021 年开始做海外红人营销，现在同时负责 Creator Growth 业务、运营团队和内部产品。",
  location: "Shanghai · Open to AI Creator Growth / AI Product opportunities",
  links: {
    email: "mailto:marrrrrk@163.com",
    github: "https://github.com/ahuocicicicici-pixel",
    operations: "https://ops.mccoco.xyz/",
    coco: "https://mccoco.xyz/",
    tarot: "https://mowentarot.xyz/",
    creatorResume: "/resumes/mark-shi-creator-growth-cn.pdf",
    productResume: "/resumes/mark-shi-ai-product-cn.pdf",
  },
};

export const metrics: Metric[] = [
  { value: "100+", label: "合作客户", note: "职业累计" },
  { value: "200+", label: "完整 Campaign", note: "Brief 至上线" },
  { value: "2000+", label: "KOL 内容上线", note: "不含 KOC" },
  { value: "6 人", label: "直接管理", note: "运营团队" },
];

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "业务操盘",
    statement: "能把一个模糊的推广需求拆成达人策略、预算安排和执行节点，并把合作推到内容上线。",
    proof: "Brief · 选人 · 谈价 · 交付 · 复盘",
  },
  {
    number: "02",
    title: "团队管理",
    statement: "直接管理 6 名运营，并与资源中台配合。项目分工、质量检查和异常升级都有明确负责人。",
    proof: "6 人运营团队 · 跨职能协作",
  },
  {
    number: "03",
    title: "产品化",
    statement: "我会把自己每天做的判断拆成规则，再交给系统处理资料、起草和提醒，把人的时间留给价格与风险。",
    proof: "达人 OS · Chrome 扩展 · 独立产品",
  },
];

export const operationsFlow = [
  {
    number: "01",
    title: "推荐",
    body: "读取 Brief，从已标签和向量化的达人库中召回候选人，再按市场、平台、内容与成本筛选。",
    image: "/projects/outreach/flow/recommendation-live.png",
    alt: "达人 OS 中真实运行并已去敏的达人推荐结果与候选名单页面",
    badge: "真实系统 · 已去敏",
  },
  {
    number: "02",
    title: "建联",
    body: "结合达人历史内容和视频文案生成个性化邮件，按账号时区分批发送，并统计不同模板的发送量与回复率。",
    image: "/projects/outreach/flow/draft-redacted.png",
    alt: "去敏后的个性化邮件草稿页面",
    badge: "真实系统 · 已去敏",
  },
  {
    number: "03",
    title: "报价回写",
    body: "自动读取达人回复，解析报价、币种和交付形式，再回写到对应的飞书项目表。",
    image: "/projects/outreach/flow/reply-parse-redacted.png",
    alt: "去敏后的达人报价解析与回写页面",
    badge: "真实系统 · 已去敏",
  },
  {
    number: "04",
    title: "Follow-up",
    body: "识别未回复的达人，根据原邮件与项目上下文生成个性化 Follow-up，避免人工逐个检查。",
    image: "/projects/outreach/flow/draft-redacted.png",
    alt: "去敏后的 Follow-up 邮件草稿页面",
    badge: "真实系统 · 已去敏",
  },
  {
    number: "05",
    title: "执行跟踪",
    body: "根据邮件记录更新项目状态，标记当前卡在客户、达人还是运营，并给出建议的下一步。",
    image: "/projects/outreach/campaigns-overview-redacted.jpg",
    alt: "去敏后的项目执行跟踪页面",
    badge: "真实系统 · 已去敏",
  },
];

export const projects: PortfolioProject[] = [
  {
    id: "operations",
    index: "01",
    type: "MAIN CASE · INTERNAL PRODUCT",
    name: "达人 OS 系统",
    shortName: "Operations",
    summary: "把达人推荐、个性化邮件定时发送、报价解析、Follow-up 和项目进度跟踪接成一条真实工作流。产品由我从 0 到 1 独立完成。",
    problem: "项目资料散在表格、邮箱和个人经验里，规模一上来，很容易漏跟、漏抄，也很难交接。",
    role: "业务规则、产品定义、交互、前后端、部署与 13 个大版本迭代均由我完成。",
    features: ["Brief 自动拆解与达人推荐", "最近 10 条内容调查", "定制邮件与批量 Follow-up", "回复报价解析与表格提醒", "头部达人单独建联"],
    stack: ["React + TypeScript", "FastAPI + PostgreSQL", "Redis + Docker", "BGE-M3 + DeepSeek"],
    result: "10 位真实用户持续使用 4 个月，累计处理 30+ 个项目；人均并行项目约从 3 个提升到 4 个，每位运营同时执行的达人数量约从 25+ 提升到 35。",
    image: "/projects/outreach/flow/recommendation-public.jpg",
    imageAlt: "达人 OS 系统严格去敏后的公开界面",
    link: "https://ops.mccoco.xyz/",
    linkLabel: "查看个人演示版",
    palette: { background: "#f48360", panel: "#ffd9c7", ink: "#17130f", accent: "#fff3e7" },
  },
  {
    id: "coco",
    index: "03",
    type: "INDEPENDENT PRODUCT",
    name: "COCOPet Desktop Pet",
    shortName: "COCO",
    summary: "拥有 100+ 种动作和长期记忆，能记住你的要求并按时提醒；玩法融合 QQ 宠物、旅行青蛙和模拟经营。",
    problem: "桌面宠物很容易只剩装饰，我想让角色的动作、记忆和故事能持续产生关系。",
    role: "产品设计、角色体验、测试和发布。",
    features: ["桌面动作与互动", "角色记忆", "故事与任务", "macOS 发布"],
    stack: ["macOS", "Product Design", "Character Experience"],
    result: "这是目前较成熟的个人产品，已经完成可安装版本与官网。",
    image: "/projects/coco/personality.gif",
    imageAlt: "COCOPet 背着旅行包走动的真实角色动图",
    motionFallback: "/projects/coco/hero-coco.png",
    link: "https://mccoco.xyz/",
    linkLabel: "打开 COCO 官网",
    palette: { background: "#8e9f78", panel: "#e9d9bd", ink: "#172014", accent: "#f9f4e8" },
  },
  {
    id: "kol-intel",
    index: "02",
    type: "BROWSER EXTENSION + READ-ONLY API",
    name: "达人情报谷歌插件",
    shortName: "达人情报插件",
    summary: "给 AM 和运营团队共同使用：在达人主页实时同步粉丝、互动率等基础指标，以及内部库里的历史报价、合作记录、项目表现和双方评价，像一套面向达人的“大众点评”。",
    problem: "不同项目之间的达人信息长期分散：运营不清楚具体成本和历史合作，AM 也看不到互动率、粉丝等基础数据，判断依赖个人记忆，容易重复踩坑。",
    role: "我从业务痛点出发，独立完成需求梳理、交互设计、插件开发和数据接入。",
    features: ["四个平台主页识别", "公开指标同屏查看", "历史合作精确匹配", "服务端账号权限校验"],
    stack: ["Chrome Extension", "Read-only API", "Creator Data", "Operations UX"],
    result: "AM 与运营可以在同一页面核对公开指标、历史报价、合作表现和内部评价，减少信息断层与重复踩坑。个人版现已独立运行。",
    image: "/projects/kol-intel/coco-store-mock-1280x800.jpg",
    imageAlt: "COCO Creator Intel 在模拟 Instagram 达人主页旁显示公开指标和粉丝画像",
    link: "https://chromewebstore.google.com/detail/coco-creator-intel/ogmmgjpedgjhhdpmmjiadgphenmineaa",
    linkLabel: "Chrome 商店查看",
    palette: { background: "#e5b84b", panel: "#f5e9b8", ink: "#17150e", accent: "#fff8df" },
  },
  {
    id: "mowen",
    index: "04",
    type: "PRODUCT + CONTENT",
    name: "Mowen Tarot",
    shortName: "Mowen",
    summary: "我的第一个个人项目：把东方道家哲学与塔罗结合，设计成一套可以实际占卜的道家塔罗。",
    problem: "验证一个小产品是否有人在意，不能只看自己喜不喜欢，还要看真实内容反馈。",
    role: "产品、视觉、网站与内容发布。",
    features: ["东方牌面体系", "在线抽牌", "完整官网", "小红书内容验证"],
    stack: ["Web Product", "Visual Direction", "Content"],
    result: "产品上线后获得了不错的市场反馈，相关小红书系列累计浏览 20w+。",
    image: "/projects/tarot/mowen-xhs-featured.jpg",
    imageAlt: "墨问塔罗小红书笔记与真实互动数据",
    gallery: [
      { image: "/projects/tarot/mowen-xhs-featured.jpg", alt: "墨问塔罗小红书笔记与真实互动数据" },
      { image: "/projects/tarot/mowen-product-home.jpg", alt: "墨问塔罗产品首页与道家牌面" },
      { image: "/projects/tarot/mowen-reading-result.jpg", alt: "墨问塔罗三牌占卜结果与解读" },
    ],
    secondaryImage: "/projects/tarot/mowen-xhs-20w.jpg",
    secondaryAlt: "墨问塔罗小红书内容截图",
    link: "https://mowentarot.xyz/",
    linkLabel: "打开墨问塔罗",
    palette: { background: "#6b392b", panel: "#e8d7b5", ink: "#fbf1da", accent: "#c99170" },
  },
];

export const experience = [
  {
    period: "2024.12—NOW",
    title: "GrowMax · 海外红人营销运营负责人 / Internal Product Owner",
    body: "0–1 搭建 6 人运营团队、SOP 与新人培训体系，负责 AI 产品的海外 Creator Growth、红人广告加热与独签达人；同时独立开发内部 Creator Operations OS。",
  },
  {
    period: "2021.05—2024.10",
    title: "海外红人营销",
    body: "从一线执行起步，累积游戏、科技与 AI 产品的海外红人策略、建联谈价和交付经验，并逐步建立可复用的数据口径与 SOP。",
  },
];

export const businessCase = {
  eyebrow: "BUSINESS CASE · 01",
  title: "Kling AI 海外 Creator Growth",
  summary: "面向欧美市场，覆盖 Instagram、TikTok 和 X，从拿到 Brief 开始，到达人提报、谈价、执行与内容上线全程负责。",
  metrics: [
    { value: "50+", label: "付费合作 KOL" },
    { value: "100+", label: "上线内容" },
    { value: "1.5→3.0", label: "持续复购版本" },
  ],
  responsibilities: ["读取 Brief 与市场拆解", "达人策略与名单提报", "建联、谈价与下单", "脚本审核与交付推进", "上线、加热与复盘"],
  note: "另外，我独立完成 3 位海外创作者的建联、合约与独签谈判，帮助其实际付费合作价格提升 80%–100%，并带来 5 个新客户。",
};

export const productCase = {
  eyebrow: "PRODUCT CASE · 01",
  metrics: [
    { value: "10", label: "内部真实用户", note: "6 位运营 + 4 位 AM" },
    { value: "4 个月", label: "持续运行", note: "非 Demo" },
    { value: "30+", label: "累计处理项目", note: "真实 Campaign" },
    { value: "3→4", label: "人均并行项目", note: "约 +30%" },
  ],
  outcomes: [
    "个性化邮件按达人时区自动分批发送，并统计模板回复率。",
    "自动解析回复邮件中的报价并回写飞书，未回复达人自动 Follow-up。",
    "根据邮件记录更新执行状态，判断项目卡在客户、达人还是运营并给出下一步。",
    "达人库完成标签化与向量化，通过 RAG 召回符合 Brief 的已有达人。",
  ],
};
