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
  name: "Mark",
  eyebrow: "MARK · OVERSEAS CREATOR MARKETING",
  heroRole: "OVERSEAS CREATOR MARKETING",
  title: "海外红人营销操盘者 × 系统构建者",
  heroProof:
    "5 年专注海外红人营销。曾服务多家国内头部游戏出海客户；2024 年起进入 AI 产品出海领域，多次与海外头部 AI 创作者合作。目前带领 6 人运营团队，累计负责千万美元级项目资金。",
  tagline:
    "一线执行、组建团队、搭建运营体系，再到独立开发内部产品，我不断把个人经验变成团队可复用的能力，也让公司整体效率持续提升。",
  intro:
    "我从 2021 年开始做海外红人营销，现在负责运营团队，主要服务出海 AI 产品。项目里的选人、建联、谈价和交付由我带着团队完成；反复出现的工作，我会继续往前做成产品。",
  location: "Shanghai · Open to new opportunities",
  links: {
    github: "https://github.com/ahuocicicicici-pixel",
    operations: "https://ops.mccoco.xyz/",
    coco: "https://mccoco.xyz/",
    tarot: "https://mowentarot.xyz/",
  },
};

export const metrics: Metric[] = [
  { value: "50+", label: "合作客户", note: "出海科技与 AI 产品" },
  { value: "100+", label: "执行项目", note: "从 Brief 到内容上线" },
  { value: "2000+", label: "达人内容上线", note: "多平台、多市场协作" },
  { value: "6 人", label: "直接管理", note: "运营团队" },
  { value: "千万美元级", label: "项目资金", note: "公开区间口径" },
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
    body: "读取 Brief 和历史数据，按市场、平台、内容方向、量级与成本筛出候选达人。",
    image: "/projects/outreach/flow/recommendation-redacted.png",
    alt: "去敏后的达人推荐页面",
  },
  {
    number: "02",
    title: "调查",
    body: "读取公开主页、Bio 与最近 10 条内容，判断受众、内容方向和品牌匹配度。",
    image: "/projects/outreach/flow/research-redacted.png",
    alt: "去敏后的达人调查页面",
  },
  {
    number: "03",
    title: "建联",
    body: "结合具体内容生成询价草稿，支持批量调查、起草、发送与 Follow-up。",
    image: "/projects/outreach/flow/draft-redacted.png",
    alt: "去敏后的定制询价邮件页面",
  },
  {
    number: "04",
    title: "回写",
    body: "解析回复里的报价、交付形式和合作阶段，回写表格并提醒对应运营查看。",
    image: "/projects/outreach/flow/reply-parse-redacted.png",
    alt: "去敏后的达人回复解析页面",
  },
  {
    number: "05",
    title: "头部建联",
    body: "整理商业模式、合作风险与切入点，单独维护经纪人、MCN 和每次触达记录。",
    image: "/projects/outreach/flow/headliner-redacted.png",
    alt: "去敏后的头部达人建联页面",
  },
];

export const projects: PortfolioProject[] = [
  {
    id: "operations",
    index: "01",
    type: "MAIN CASE · INTERNAL PRODUCT",
    name: "达人 OS 系统",
    shortName: "Operations",
    summary: "达人推荐、个性化邮件定时发送、报价自动识别和项目进度跟踪，都在同一条工作流里完成。产品设计与开发由我从 0 到 1 独立完成，团队整体效率提升约 30%。",
    problem: "项目资料散在表格、邮箱和个人经验里，规模一上来，很容易漏跟、漏抄，也很难交接。",
    role: "业务规则、流程设计、产品定义与持续迭代。",
    features: ["Brief 自动拆解与达人推荐", "最近 10 条内容调查", "定制邮件与批量 Follow-up", "回复报价解析与表格提醒", "头部达人单独建联"],
    stack: ["Creator Marketing", "Workflow Design", "AI-assisted Research", "Feishu + Gmail"],
    result: "已经接进日常项目；系统处理资料和草稿，运营保留发送、报价与风险判断。",
    image: "/projects/outreach/flow/recommendation-redacted.png",
    imageAlt: "达人 OS 系统去敏后的达人推荐界面",
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
    image: "/projects/coco/hero-coco.png",
    imageAlt: "COCO 从 Mac 屏幕走到书桌的产品主视觉",
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
    image: "/projects/kol-intel/creator-intel-profile.png",
    imageAlt: "达人情报谷歌插件在 Instagram 达人主页旁显示去敏后的合作记录和公开指标",
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
    image: "/projects/tarot/mowen-homepage.png",
    imageAlt: "墨问塔罗完整官网首页",
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
    title: "海外红人营销运营负责人",
    body: "负责出海 AI 客户的项目交付，直接管理 6 名运营，并与资源中台协作。团队扩大后，我把一线规则继续做进工具。",
  },
  {
    period: "2021.05—2024.10",
    title: "海外红人营销",
    body: "服务 70+ 客户，完成 500+ 独立达人合作，客户复购率 62%。这组数字来自上一段经历，与当前公开口径分开。",
  },
];
