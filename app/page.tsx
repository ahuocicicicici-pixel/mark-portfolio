const Arrow = () => <span aria-hidden="true">↗</span>;

const currentMetrics = [
  { value: "50+", label: "合作客户", note: "以出海 AI 产品为主" },
  { value: "100+", label: "项目", note: "跨地区、跨平台执行" },
  { value: "2000+", label: "达人内容上线", note: "覆盖四个主流海外平台" },
  { value: "6 人", label: "直接管理", note: "另与资源中台协作" },
  { value: "千万级", label: "项目资金", note: "仅展示规模区间" },
];

const outreachSteps = [
  {
    number: "01",
    title: "从 Brief 里拆条件，再从达人库推荐",
    body: "系统先识别市场、平台、内容方向、粉丝量和历史合作成本，再从已有达人库里筛选候选人。运营可以继续调整条件，也可以人工决定最终名单。",
    image: "/projects/outreach/flow/recommendation-redacted.png",
    alt: "去敏后的达人推荐页面，显示 Brief 条件识别和推荐结果",
    caption: "达人推荐 · 条件识别、库内筛选、人工确认",
  },
  {
    number: "02",
    title: "陌生达人先调查，不直接套群发模板",
    body: "系统读取公开主页、Bio、账号数据和最近 10 条内容，判断达人常讲什么、受众是谁、是否适合品牌。这些事实会进入后续邮件。",
    image: "/projects/outreach/flow/research-redacted.png",
    alt: "去敏后的达人调查页面，保留账号资料与最近 10 条内容模块",
    caption: "达人调查 · 主页、Bio、数据与最近 10 条内容",
    imageClass: "step-proof-portrait",
  },
  {
    number: "03",
    title: "批量生成定制草稿，再由运营审核发送",
    body: "调查完成后，系统把具体内容证据写进询价邮件，支持批量调查、起草、发送和 Follow-up。报价、承诺与敏感措辞仍由运营确认。",
    image: "/projects/outreach/flow/draft-redacted.png",
    alt: "去敏后的邮件页面，展示结合达人内容生成的定制询价邮件",
    caption: "邮件建联 · 内容证据进入草稿，支持批量处理",
  },
  {
    number: "04",
    title: "收到回复后解析报价，写回飞书提醒负责人",
    body: "系统从回复里提取报价、交付形式、修改费和合作阶段，写回对应飞书表格并标黄提醒。人负责确认价格与风险，系统负责避免漏读和漏抄。",
    image: "/projects/outreach/flow/reply-parse-redacted.png",
    alt: "去敏后的回复解析页面，展示报价、交付项与合作状态",
    caption: "回复处理 · 信息解析、飞书回写、运营提醒",
  },
  {
    number: "05",
    title: "头部达人单独研究，走另一条建联路径",
    body: "头部达人通常没有公开邮箱，也不适合普通群发。系统会整理全网调研、商业模式、合作风险和建议切入点，并记录经纪人、MCN 与每次触达。",
    image: "/projects/outreach/flow/headliner-redacted.png",
    alt: "去敏后的头部达人建联页面，展示调研简报、切入点与触达记录",
    caption: "头部建联 · 全网调研、Pitch Angle、联系人记录",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="回到首页">MARK<span aria-hidden="true">.</span></a>
        <nav aria-label="主导航">
          <a href="#creator-os">主要案例</a>
          <a href="#work">其他作品</a>
          <a href="#experience">经历</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="hero-kicker">海外红人营销 · 2021—Now</p>
          <h1>我做红人营销。<br />项目多了，<br />就把经验做成系统。</h1>
          <div className="hero-foot">
            <p>现在负责海外红人营销运营团队，主要服务出海 AI 产品。我做项目、带团队，也把一线判断写进大家每天在用的工具里。</p>
            <a href="#creator-os">从主要案例开始 <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <aside className="field-note" aria-label="当前职业信息">
          <div className="field-note-top"><span>当前角色</span><span>2024.12—Now</span></div>
          <p className="field-note-title">运营部门<br />负责人</p>
          <dl>
            <div><dt>直接管理</dt><dd>6 名运营</dd></div>
            <div><dt>协作</dt><dd>资源中台</dd></div>
            <div><dt>项目类型</dt><dd>出海 AI 产品</dd></div>
            <div><dt>资金规模</dt><dd>累计千万级</dd></div>
          </dl>
          <span className="red-stamp" aria-hidden="true">OPERATOR<br />&amp; BUILDER</span>
        </aside>
      </section>

      <section className="metric-ledger" aria-label="当前业务规模">
        {currentMetrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <small>{metric.note}</small>
          </article>
        ))}
        <p>公开口径采用区间值；客户财务数据不在本页展示。</p>
      </section>

      <article className="featured-project" id="creator-os">
        <div className="case-index" aria-hidden="true">01</div>
        <header className="project-heading">
          <div className="project-label">
            <span>主要案例</span>
            <p>内部生产系统<br />持续迭代中</p>
          </div>
          <div className="project-title">
            <p>Creator Operations OS / Email Outreach</p>
            <h2>不是做一个 AI 原型，<br />而是把业务经验<br />放进真实工作流。</h2>
            <p className="project-statement">我把选人、调查、邮件、Follow-up、报价解析和飞书回写接成一条线。它不是演示项目，而是运营团队正在使用的生产系统。</p>
          </div>
        </header>

        <figure className="hero-proof">
          <img src="/projects/outreach/flow/recommendation-redacted.png" alt="Creator Operations OS 去敏后的真实达人推荐界面" />
          <figcaption><span>真实生产界面 · 已去敏</span><strong>Brief → 推荐名单</strong></figcaption>
        </figure>

        <section className="case-brief" aria-label="案例摘要">
          <article><span>业务问题</span><p>项目和团队变多后，靠个人记忆、群消息与复制表格，很难稳定复用选人和建联判断。</p></article>
          <article><span>我负责什么</span><p>定义业务规则、梳理流程、设计产品逻辑，并根据团队每天的使用反馈继续迭代。</p></article>
          <article><span>怎样算有效</span><p>工具必须接进现有飞书与 Gmail 流程，让运营少查、少抄、少漏，并保留人工判断。</p></article>
        </section>

        <section className="capability-proof" aria-labelledby="capability-title">
          <div>
            <p id="capability-title">这一个案例，能看见三类能力</p>
            <span>不用单独写三段自我评价。</span>
          </div>
          <ol>
            <li><b>业务</b><span>知道 Brief 应该拆什么、达人为什么合适、报价里要看哪些风险。</span></li>
            <li><b>管理</b><span>把个人经验变成团队共同的检查点、交接方式和提醒机制。</span></li>
            <li><b>产品</b><span>知道 AI 适合查资料和整理，也知道价格、承诺与发送必须留给人。</span></li>
          </ol>
        </section>

        <section className="outreach-details" aria-labelledby="outreach-title">
          <header>
            <p id="outreach-title">一次建联怎样跑完</p>
            <h3>细节放在这里，<br />需要时再展开。</h3>
            <small>所有截图均使用你提供的手动去敏版本。</small>
          </header>
          <div className="outreach-steps">
            {outreachSteps.map((step) => (
              <details key={step.number} open={step.number === "01"}>
                <summary><span>{step.number}</span><strong>{step.title}</strong><i aria-hidden="true" /></summary>
                <div className="step-copy"><p>{step.body}</p></div>
                <figure className={`step-proof ${step.imageClass ?? ""}`}>
                  <img src={step.image} alt={step.alt} loading="lazy" />
                  <figcaption>{step.caption}<span>已去敏</span></figcaption>
                </figure>
              </details>
            ))}
          </div>
        </section>

        <div className="module-index" aria-label="已上线模块">
          <p>已经上线</p>
          <div>
            <span>达人推荐</span><span>内容调查</span><span>邮件建联</span><span>Follow-up</span>
            <span>回复解析</span><span>飞书回写</span><span>头部建联</span><span>脚本审查</span>
            <span>合同中心</span><span>付款审批</span>
          </div>
        </div>

        <div className="human-line">
          <p>AI 负责找资料、整理、起草和提醒。</p>
          <p>人负责价格、承诺、发送与风险判断。</p>
        </div>
      </article>

      <section className="selected-work" id="work">
        <header className="section-heading">
          <span>其他作品</span>
          <h2>三个侧面，<br />补全我的能力。</h2>
          <p>它们不和主案例抢位置，而是说明我还能把产品做出来、发布出去，也能自己做内容验证。</p>
        </header>

        <article className="work-row" id="kol-intel">
          <div className="work-number">02</div>
          <figure className="browser-shot">
            <div className="browser-top" aria-hidden="true"><span>● ● ●</span><i>creator profile</i></div>
            <img src="/projects/kol-intel/creator-review.png" alt="KOL Intelligence Badge 在达人主页旁展示判断信息" loading="lazy" />
          </figure>
          <div className="work-copy"><span>团队内部工具</span><h3>KOL Intelligence Badge</h3><p>运营浏览达人主页时，直接看到平均播放、互动率、合作记录和价格信息，减少来回查表。</p><p className="capability-line">浏览器扩展 · 真实业务场景</p></div>
        </article>

        <article className="work-row" id="coco">
          <div className="work-number">03</div>
          <figure className="coco-shot"><img src="/projects/coco/hero-coco.png" alt="COCO 走出 Mac 屏幕、来到书桌的产品主视觉" loading="lazy" /></figure>
          <div className="work-copy">
            <span>独立产品</span><h3>COCO Desktop Pet</h3><p>一只会在 Mac 桌面活动、也会记得互动的小狗。角色、交互、测试和发布都由我完成。</p>
            <p className="capability-line">macOS · 产品设计 · Beta 运营</p>
            <div className="work-links"><a href="https://mccoco.xyz/" target="_blank" rel="noreferrer">官网 <Arrow /></a><a href="https://github.com/ahuocicicicici-pixel/make-your-pet" target="_blank" rel="noreferrer">公开版 <Arrow /></a></div>
          </div>
        </article>

        <article className="work-row work-tarot" id="mowen">
          <div className="work-number">04</div>
          <div className="mowen-proof" aria-label="墨问塔罗官网与小红书内容截图">
            <figure className="mowen-site"><img src="/projects/tarot/mowen-homepage.png" alt="墨问塔罗完整官网首页" loading="lazy" /><figcaption>mowentarot.xyz · 当前官网</figcaption></figure>
            <figure className="mowen-social"><img src="/projects/tarot/mowen-xhs-20w.jpg" alt="墨问塔罗牌面在小红书发布后的互动截图" loading="lazy" /><figcaption><strong>20w+</strong><span>系列累计浏览量</span></figcaption></figure>
          </div>
          <div className="work-copy">
            <span>独立产品与内容实验</span><h3>Mowen Tarot</h3><p>从东方牌面到提问、抽牌、解读和历史记录，我做完了完整网站；制作过程在小红书获得 20w+ 系列浏览。</p>
            <p className="capability-line">Web 产品 · 视觉设计 · 内容验证</p>
            <div className="work-links"><a href="https://mowentarot.xyz/" target="_blank" rel="noreferrer">打开产品 <Arrow /></a></div>
          </div>
        </article>
      </section>

      <section className="experience" id="experience">
        <div><span>上一段经历</span><strong>2021.05—2024.10</strong><small>数字来自当时简历，与当前项目口径分开。</small></div>
        <p><b>70+</b> 客户</p><p><b>500+</b> 独立达人合作</p><p><b>62%</b> 客户复购</p>
      </section>

      <section className="closing">
        <p>Creator marketing since 2021</p>
        <h2>我不是为了做工具而做工具。<br />我只是不想让同一个问题，<br />被团队反复解决。</h2>
        <div className="closing-bottom"><p>海外红人营销 · 团队管理 · 运营系统 · 0→1 产品</p><a href="https://github.com/ahuocicicicici-pixel" target="_blank" rel="noreferrer">查看 GitHub <Arrow /></a></div>
      </section>

      <footer><a className="wordmark" href="#top">MARK<span>.</span></a><p>Creator marketing since 2021 · Shanghai</p><a href="#top">回到顶部 ↑</a></footer>
    </main>
  );
}
