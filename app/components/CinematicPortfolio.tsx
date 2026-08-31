/* eslint-disable @next/next/no-img-element */
import { capabilities, experience, metrics, operationsFlow, profile, projects } from "../profile";

const Arrow = () => <span aria-hidden="true">↗</span>;
const operations = projects[0];
const supportingProjects = projects.slice(1);

export function CinematicPortfolio() {
  return (
    <main className="cinematic-page">
      <div className="cinematic-atmosphere" aria-hidden="true">
        <span className="cinematic-orbit cinematic-orbit-one" />
        <span className="cinematic-orbit cinematic-orbit-two" />
        <span className="cinematic-trace" />
        <strong>FIELD NOTES</strong>
      </div>

      <header className="cinematic-nav">
        <a className="cinematic-logo" href="#cinematic-top">MARK<span> / 21—NOW</span></a>
        <nav aria-label="页面导航">
          <a href="#cinematic-about"><span>关于</span></a>
          <a href="#cinematic-case"><span>主案例</span></a>
          <a href="#cinematic-work"><span>作品</span></a>
        </nav>
      </header>

      <section className="cinematic-hero" id="cinematic-top">
        <p className="cinematic-eyebrow">{profile.eyebrow}</p>
        <h1><span>Creator Marketing</span><br />Operator &amp;<br />Systems Builder</h1>
        <div className="cinematic-hero-note">
          <p>{profile.intro}</p>
          <a className="cinematic-cta" href="#cinematic-case"><span>查看主案例</span><i aria-hidden="true">↓</i></a>
        </div>
        <div className="cinematic-status"><span>BASED IN SHANGHAI</span><span>OPEN TO CONVERSATION</span></div>
      </section>

      <section className="cinematic-statement" id="cinematic-about">
        <p className="cinematic-section-label">01 / HOW I WORK</p>
        <h2>我做红人营销。项目里的判断、交接和重复动作，也会被我继续做成团队每天能用的工具。</h2>
        <div className="cinematic-capability-grid">
          {capabilities.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.statement}</p>
              <small>{item.proof}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="cinematic-metrics" aria-label="业务规模">
        <p>SELECTED BUSINESS SCALE · PUBLIC RANGE</p>
        <div>
          {metrics.map((metric) => (
            <article key={metric.label}>
              <strong>{metric.value}</strong><span>{metric.label}</span><small>{metric.note}</small>
            </article>
          ))}
        </div>
      </section>

      <article className="cinematic-case" id="cinematic-case">
        <header>
          <p className="cinematic-section-label">02 / MAIN CASE</p>
          <div>
            <h2>{operations.name}</h2>
            <p>{operations.summary}</p>
          </div>
        </header>

        <figure className="cinematic-case-hero">
          <img src={operations.image} alt={operations.imageAlt} />
          <figcaption><span>BRIEF → CREATOR RECOMMENDATION</span><small>真实界面 · 已去敏</small></figcaption>
        </figure>

        <div className="cinematic-case-brief">
          <article><span>问题</span><p>{operations.problem}</p></article>
          <article><span>我的角色</span><p>{operations.role}</p></article>
          <article><span>工作结果</span><p>{operations.result}</p></article>
        </div>

        <details className="cinematic-flow">
          <summary><span>查看系统怎么跑</span><small>5 个关键环节</small><i aria-hidden="true" /></summary>
          <div>
            {operationsFlow.map((step) => (
              <article key={step.number}>
                <header><span>{step.number}</span><h3>{step.title}</h3><p>{step.body}</p></header>
                <figure><img src={step.image} alt={step.alt} loading="lazy" /><figcaption>真实界面 · 已去敏</figcaption></figure>
              </article>
            ))}
          </div>
        </details>

        <a className="cinematic-cta cinematic-case-link" href={profile.links.operations} target="_blank" rel="noreferrer">
          <span>查看个人演示版</span><i aria-hidden="true">↗</i>
        </a>
      </article>

      <section className="cinematic-work" id="cinematic-work">
        <header>
          <p className="cinematic-section-label">03 / SELECTED WORK</p>
          <h2>三件小作品，补全我做产品的方式。</h2>
        </header>
        <div className="cinematic-work-grid">
          {supportingProjects.map((project) => (
            <article className={`cinematic-project cinematic-project-${project.id}`} key={project.id}>
              <figure className={`cinematic-project-media cinematic-crop-${project.crop ?? "top"}`}>
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
                {project.secondaryImage ? <img className="cinematic-secondary" src={project.secondaryImage} alt={project.secondaryAlt} loading="lazy" /> : null}
              </figure>
              <div>
                <span>{project.index} / {project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <small>{project.result}</small>
                {project.link ? <a href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <Arrow /></a> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cinematic-experience">
        <p className="cinematic-section-label">04 / EXPERIENCE</p>
        <ol>
          {experience.map((item) => (
            <li key={item.period}>
              <time>{item.period}</time>
              <div><h3>{item.title}</h3><p>{item.body}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <footer className="cinematic-footer">
        <div className="cinematic-footer-cta">
          <p>LET&apos;S TALK ABOUT THE WORK</p>
          <h2>业务要往前走，<br />系统也该跟上。</h2>
          <a className="cinematic-cta" href={profile.links.github} target="_blank" rel="noreferrer"><span>查看 GitHub</span><i aria-hidden="true">↗</i></a>
        </div>
        <div className="cinematic-footer-links">
          <div><span>IDENTITY</span><strong>Mark</strong><p>{profile.title}</p></div>
          <div><span>PROJECTS</span><a href="#cinematic-case">{operations.name}</a><a href={profile.links.coco}>COCO</a><a href={profile.links.tarot}>Mowen Tarot</a></div>
          <div><span>STATUS</span><p>{profile.location}</p><a href="#cinematic-top">Back to top ↑</a></div>
        </div>
        <small>© 2026 MARK · CREATOR MARKETING &amp; SYSTEMS</small>
      </footer>
    </main>
  );
}
