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
  eyebrow: "OVERSEAS CREATOR MARKETING · SINCE 2021",
  title: "海外红人营销操盘者 × 系统构建者",
  tagline: "做项目，带团队，也把一线经验做成大家都能用的工具。",
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
  { value: "千万级", label: "项目资金", note: "公开区间口径" },
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
    proof: "Creator Operations · Chrome 扩展 · 独立产品",
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
    name: "Creator Operations",
    shortName: "Operations",
    summary: "把达人推荐、调查、邮件、跟进和回复解析接成一条真实工作流。",
    problem: "项目资料散在表格、邮箱和个人经验里，规模一上来，很容易漏跟、漏抄，也很难交接。",
    role: "业务规则、流程设计、产品定义与持续迭代。",
    features: ["Brief 自动拆解与达人推荐", "最近 10 条内容调查", "定制邮件与批量 Follow-up", "回复报价解析与表格提醒", "头部达人单独建联"],
    stack: ["Creator Marketing", "Workflow Design", "AI-assisted Research", "Feishu + Gmail"],
    result: "已经接进日常项目；系统处理资料和草稿，运营保留发送、报价与风险判断。",
    image: "/projects/outreach/flow/recommendation-redacted.png",
    imageAlt: "Creator Operations 去敏后的达人推荐界面",
    link: "https://ops.mccoco.xyz/",
    linkLabel: "查看个人演示版",
    palette: { background: "#f48360", panel: "#ffd9c7", ink: "#17130f", accent: "#fff3e7" },
  },
  {
    id: "coco",
    index: "02",
    type: "INDEPENDENT PRODUCT",
    name: "COCO Desktop Pet",
    shortName: "COCO",
    summary: "一只会在 Mac 桌面活动、也会记得互动的小狗。",
    problem: "桌面宠物很容易只剩装饰，我想让角色的动作、记忆和故事能持续产生关系。",
    role: "产品设计、角色体验、测试和发布。",
    features: ["桌面动作与互动", "角色记忆", "故事与任务", "macOS 发布"],
    stack: ["macOS", "Product Design", "Character Experience"],
    result: "完成可安装版本与官网，持续根据真实使用反馈改交互。",
    image: "/projects/coco/hero-coco.png",
    imageAlt: "COCO 从 Mac 屏幕走到书桌的产品主视觉",
    link: "https://mccoco.xyz/",
    linkLabel: "打开 COCO 官网",
    palette: { background: "#8e9f78", panel: "#e9d9bd", ink: "#172014", accent: "#f9f4e8" },
  },
  {
    id: "kol-intel",
    index: "03",
    type: "BROWSER EXTENSION",
    name: "KOL Intelligence Badge",
    shortName: "KOL Badge",
    summary: "运营浏览达人主页时，在侧边栏直接完成一轮判断。",
    problem: "主页、历史报价和项目名单来回切换，单个动作不慢，重复几百次就很慢。",
    role: "场景定义、信息层级、数据同步与异常处理。",
    features: ["主页数据同屏查看", "历史报价与合作记录", "推荐理由", "本地保存与批量同步"],
    stack: ["Chrome Extension", "Creator Data", "Operations UX"],
    result: "把查表动作留在当前页面里，运营可以边看主页边做判断。",
    image: "/projects/kol-intel/safe-sync.png",
    imageAlt: "KOL Intelligence Badge 的侧边栏界面",
    crop: "right",
    palette: { background: "#e5b84b", panel: "#f5e9b8", ink: "#17150e", accent: "#fff8df" },
  },
  {
    id: "mowen",
    index: "04",
    type: "PRODUCT + CONTENT",
    name: "Mowen Tarot",
    shortName: "Mowen",
    summary: "把东方视觉做成一套可使用的塔罗产品，也把制作过程变成内容。",
    problem: "验证一个小产品是否有人在意，不能只看自己喜不喜欢，还要看真实内容反馈。",
    role: "产品、视觉、网站与内容发布。",
    features: ["东方牌面体系", "在线抽牌", "完整官网", "小红书内容验证"],
    stack: ["Web Product", "Visual Direction", "Content"],
    result: "相关小红书系列累计浏览 20w+。",
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
