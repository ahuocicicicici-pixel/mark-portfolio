/* eslint-disable @next/next/no-img-element */
import { capabilities, experience, metrics, operationsFlow, profile, projects } from "../profile";

const Arrow = () => <span aria-hidden="true">↗</span>;

const mainProject = projects[0];
const supportingProjects = projects.slice(1);

export function VividPortfolio() {
  return (
    <main className="vivid-page vivid-compact">
      <header className="vivid-nav">
        <a className="vivid-mark" href="#top" aria-label="回到顶部">M<span>+</span></a>
        <p>{profile.title}</p>
        <nav aria-label="页面导航">
          <a href="#main-case">主案例</a>
          <a href="#more-work">其他作品</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section className="vivid-hero" id="top">
        <div className="vivid-hero-copy">
          <p className="vivid-kicker">{profile.eyebrow}</p>
          <h1><span>MARK</span><br />CREATOR<br />OPERATOR</h1>
          <p>{profile.tagline}</p>
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
          <p>{profile.intro}</p>
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
          <p>MAIN CASE · 01</p>
          <h2>{mainProject.name}</h2>
          <p>{mainProject.summary}</p>
        </header>

        <div className="vivid-case-grid">
          <figure className="vivid-case-media">
            <img src={mainProject.image} alt={mainProject.imageAlt} />
            <figcaption><span>真实项目素材 · 已去敏</span><strong>从 Brief 到回复回写</strong></figcaption>
          </figure>

          <div className="vivid-case-copy">
            <p className="vivid-case-lead">不是给运营加一个 AI 对话框，而是把我实际做项目时的判断，放回团队每天使用的流程里。</p>
            <dl>
              <div><dt>问题</dt><dd>{mainProject.problem}</dd></div>
              <div><dt>我负责</dt><dd>{mainProject.role}</dd></div>
              <div><dt>落地结果</dt><dd>{mainProject.result}</dd></div>
            </dl>
            {mainProject.link ? <a className="vivid-text-link" href={mainProject.link} target="_blank" rel="noreferrer">{mainProject.linkLabel} <Arrow /></a> : null}
          </div>
        </div>

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
        </section>
      </section>

      <section className="vivid-more-work" id="more-work">
        <header>
          <p>SUPPORTING WORK · 02—04</p>
          <div><h2>业务之外，我也会把想法做成产品。</h2><p>三个项目分别补充角色产品、浏览器工具和内容验证能力。</p></div>
        </header>

        <div className="vivid-project-grid">
          {supportingProjects.map((project) => (
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
          <h2>懂业务，能带团队，<br />也能把经验做成系统。</h2>
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
