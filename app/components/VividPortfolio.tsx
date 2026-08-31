/* eslint-disable @next/next/no-img-element */
import { capabilities, experience, metrics, operationsFlow, profile, projects } from "../profile";

const Arrow = () => <span aria-hidden="true">↗</span>;

const mainProject = projects.find((project) => project.id === "operations")!;
const browserProject = projects.find((project) => project.id === "kol-intel")!;
const personalProjects = projects.filter((project) => project.id === "coco" || project.id === "mowen");

export function VividPortfolio() {
  return (
    <main className="vivid-page vivid-compact">
      <header className="vivid-nav">
        <a className="vivid-mark" href="#top" aria-label="回到顶部">M<span>+</span></a>
        <p>{profile.title}</p>
        <nav aria-label="页面导航">
          <a href="#main-case">工作产出</a>
          <a href="#more-work">个人产品</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section className="vivid-hero" id="top">
        <div className="vivid-hero-copy">
          <p className="vivid-kicker"><strong>{profile.name}</strong><span>{profile.heroRole}</span></p>
          <h1><span>2021—2026</span><br />海外红人<br />营销</h1>
          <p className="vivid-hero-proof">{profile.heroProof}</p>
          <p className="vivid-hero-path">{profile.tagline}</p>
        </div>

        <aside className="vivid-snapshot" aria-label="业务规模">
          <header><span>BUSINESS SNAPSHOT</span><small>截至 2026 · 公开区间</small></header>
          <div>
            {metrics.map((metric) => (
              <article key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </aside>

        <div className="vivid-hero-foot">
          <div className="vivid-capability-rail" aria-label="核心能力">
            {capabilities.map((item) => (
              <span key={item.number}><b>{item.number}</b>{item.title}</span>
            ))}
          </div>
          <a href="#main-case">看核心案例 <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="vivid-main-case" id="main-case">
        <header className="vivid-case-heading">
          <p>WORK OUTPUT · 01</p>
          <h2>{mainProject.name}</h2>
          <p>{mainProject.summary}</p>
        </header>

        <section className="vivid-workflow-carousel" aria-labelledby="workflow-title">
          {operationsFlow.map((step, index) => (
            <input
              className="vivid-workflow-radio"
              type="radio"
              name="vivid-workflow"
              id={`workflow-${index}`}
              aria-label={`查看${step.title}环节`}
              defaultChecked={index === 0}
              key={`workflow-radio-${step.number}`}
            />
          ))}
          <header>
            <h3 id="workflow-title">完整工作流</h3>
            <p>推荐 → 调查 → 建联 → 回复回写 → 头部建联</p>
          </header>
          <div className="vivid-workflow-viewport">
            <div className="vivid-workflow-track">
              {operationsFlow.map((step, index) => {
                const previous = (index - 1 + operationsFlow.length) % operationsFlow.length;
                const next = (index + 1) % operationsFlow.length;
                return (
                  <article className="vivid-workflow-slide" key={step.number}>
                    <label className="vivid-workflow-arrow" htmlFor={`workflow-${previous}`} aria-label="上一个环节">←</label>
                    <div className="vivid-workflow-content">
                      <figure><img src={step.image} alt={step.alt} /></figure>
                      <div>
                        <p><span>{step.number}</span> / 05</p>
                        <h4>{step.title}</h4>
                        <p>{step.body}</p>
                      </div>
                    </div>
                    <label className="vivid-workflow-arrow" htmlFor={`workflow-${next}`} aria-label="下一个环节">→</label>
                  </article>
                );
              })}
            </div>
          </div>
          {mainProject.link ? <a className="vivid-workflow-link" href={mainProject.link} target="_blank" rel="noreferrer">打开个人演示版 <Arrow /></a> : null}
        </section>
      </section>

      <section className="vivid-browser-case" aria-labelledby="browser-case-title">
        <header className="vivid-browser-heading">
          <p>WORK OUTPUT · 02</p>
          <div>
            <span>KOL INTELLIGENCE BADGE</span>
            <h2 id="browser-case-title">{browserProject.name}</h2>
          </div>
          <p>{browserProject.summary}</p>
        </header>

        <figure className="vivid-browser-media">
          <img src={browserProject.image} alt={browserProject.imageAlt} />
          <figcaption>真实插件界面 · 已去敏</figcaption>
        </figure>

        <div className="vivid-browser-proof">
          <article><span>01 · 场景</span><p>{browserProject.problem}</p></article>
          <article><span>02 · 我负责</span><p>{browserProject.role}</p></article>
          <article><span>03 · 落地</span><p>{browserProject.result}</p></article>
        </div>
      </section>

      <section className="vivid-more-work" id="more-work">
        <header>
          <p>PERSONAL PRODUCTS · 03—04</p>
          <div><h2>工作之外，我也会把想法做成产品。</h2><p>COCOPet 已形成稳定可用的桌宠体验；Mowen Tarot 则是我第一次把东方审美、占卜产品和内容验证完整做通。</p></div>
        </header>

        <div className="vivid-project-grid">
          {personalProjects.map((project) => (
            <article className={`vivid-project-card vivid-card-${project.id}`} key={project.id}>
              <figure className={`vivid-card-media vivid-card-crop-${project.crop ?? "top"}`}>
                <img src={project.image} alt={project.imageAlt} />
                {project.secondaryImage ? <img className="vivid-card-secondary" src={project.secondaryImage} alt={project.secondaryAlt} /> : null}
              </figure>
              <div>
                <span>{project.index} · {project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <small>{project.result}</small>
                {project.link ? <a href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <Arrow /></a> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="vivid-close" id="contact">
        <div className="vivid-experience-compact">
          <p>EXPERIENCE</p>
          {experience.map((item) => (
            <article key={item.period}><time>{item.period}</time><div><h3>{item.title}</h3><p>{item.body}</p></div></article>
          ))}
        </div>

        <footer className="vivid-contact">
          <p>OPEN TO THE NEXT CONVERSATION</p>
          <h2>把积累的业务经验，<br />沉淀成所有人都能复用的 Skill 和产品。</h2>
          <div>
            <span>{profile.location}</span>
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="#top">回到顶部 ↑</a>
          </div>
        </footer>
      </section>
    </main>
  );
}
