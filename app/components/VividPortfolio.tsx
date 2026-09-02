/* eslint-disable @next/next/no-img-element */
import { experience, metrics, operationsFlow, productCase, profile, projects } from "../profile";

const Arrow = () => <span aria-hidden="true">↗</span>;
const operations = projects.find((project) => project.id === "operations")!;
const creatorIntel = projects.find((project) => project.id === "kol-intel")!;
const personalProjects = projects.filter((project) => project.id === "coco" || project.id === "mowen");

export function VividPortfolio() {
  return (
    <main className="portfolio-page">
      <header className="portfolio-nav">
        <a className="portfolio-wordmark" href="#top" aria-label="回到页面顶部">MARK SHI<span>.</span></a>
        <nav aria-label="页面导航">
          <a href="#product">产品案例</a>
          <a href="#work">其他产品</a>
          <a href="#experience">经历</a>
        </nav>
        <a className="portfolio-nav-cta" href={profile.links.creatorResume} download>下载简历 <Arrow /></a>
      </header>

      <section className="portfolio-hero" id="top">
        <div className="portfolio-hero-copy">
          <p className="portfolio-eyebrow">{profile.eyebrow}</p>
          <h1>我做海外 Creator Growth，<br />也把真实业务做成<br /><em>团队在用的 AI 产品。</em></h1>
          <p className="portfolio-role">{profile.title}</p>
          <p className="portfolio-lead">{profile.heroProof}</p>
          <div className="portfolio-actions">
            <a className="portfolio-button portfolio-button-primary" href="#product">看产品案例 <span aria-hidden="true">↓</span></a>
            <a className="portfolio-button" href="#work">看其他产品 <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <aside className="portfolio-hero-proof" aria-label="核心能力与业务规模">
          <div className="portfolio-identity-symbol" aria-hidden="true">
            <span>OPERATE</span>
            <strong>BUSINESS</strong>
            <i>↓</i>
            <strong>SYSTEMS</strong>
            <small>MAKE EXPERIENCE REUSABLE</small>
          </div>
          <div className="portfolio-metric-grid">
            {metrics.map((metric) => (
              <article key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <small>{metric.note}</small>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="portfolio-case portfolio-product-case" id="product">
        <header className="portfolio-section-heading">
          <p>{productCase.eyebrow}</p>
          <div>
            <h2>{operations.name}</h2>
            <p>{operations.summary}</p>
          </div>
        </header>

        <div className="portfolio-product-metrics" aria-label="产品使用成果">
          {productCase.metrics.map((metric) => (
            <article key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <small>{metric.note}</small>
            </article>
          ))}
        </div>

        <div className="portfolio-workflow" aria-label="达人 OS 完整工作流轮播">
          {operationsFlow.map((step, index) => (
            <input
              className="portfolio-workflow-radio"
              type="radio"
              name="portfolio-workflow"
              id={`portfolio-workflow-${index}`}
              aria-label={`查看${step.title}环节`}
              defaultChecked={index === 0}
              key={`portfolio-workflow-radio-${step.number}`}
            />
          ))}
          <div className="portfolio-workflow-viewport">
            <div className="portfolio-workflow-track">
              {operationsFlow.map((step, index) => {
                const previous = (index - 1 + operationsFlow.length) % operationsFlow.length;
                const next = (index + 1) % operationsFlow.length;
                return (
                  <article className="portfolio-workflow-slide" key={step.number}>
                    <label className="portfolio-workflow-prev" htmlFor={`portfolio-workflow-${previous}`} aria-label="上一个环节">←</label>
                    <div className="portfolio-workflow-card">
                      <figure className="portfolio-product-media">
                        <img src={step.image} alt={step.alt} />
                        <span className="portfolio-privacy-badge">{step.badge}</span>
                      </figure>
                      <div className="portfolio-workflow-copy">
                        <span>{step.number} / 05</span>
                        <div>
                          <strong>{step.title}</strong>
                          <p>{step.body}</p>
                        </div>
                      </div>
                    </div>
                    <label className="portfolio-workflow-next" htmlFor={`portfolio-workflow-${next}`} aria-label="下一个环节">→</label>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="portfolio-workflow-dots" aria-label="选择工作流环节">
            {operationsFlow.map((step, index) => (
              <label key={step.number} htmlFor={`portfolio-workflow-${index}`} aria-label={`查看${step.title}环节`}>
                <span>{step.number}</span>{step.title}
              </label>
            ))}
          </div>
        </div>

        <footer className="portfolio-product-footer">
          <p><span>我负责</span>{operations.role}</p>
          <ul>{operations.stack.map((item) => <li key={item}>{item}</li>)}</ul>
          <a className="portfolio-button portfolio-button-dark" href={operations.link} target="_blank" rel="noreferrer">打开个人演示版 <Arrow /></a>
        </footer>
      </section>

      <section className="portfolio-supporting" id="work">
        <header className="portfolio-section-heading portfolio-section-heading-compact">
          <p>OTHER PRODUCTS · 02</p>
          <div><h2>其他产品</h2><p>主项目之外，我也在解决达人数据判断和个人产品设计问题。</p></div>
        </header>

        <article className="portfolio-intel-case">
          <figure>
            <img src={creatorIntel.image} alt={creatorIntel.imageAlt} />
            <span className="portfolio-privacy-badge">真实插件 mock</span>
          </figure>
          <div>
            <span>{creatorIntel.type}</span>
            <h3>{creatorIntel.name}</h3>
            <p>{creatorIntel.summary}</p>
            <dl>
              <div><dt>痛点</dt><dd>{creatorIntel.problem}</dd></div>
              <div><dt>角色</dt><dd>{creatorIntel.role}</dd></div>
              <div><dt>结果</dt><dd>{creatorIntel.result}</dd></div>
            </dl>
            {creatorIntel.link ? (
              <a className="portfolio-intel-link" href={creatorIntel.link} target="_blank" rel="noreferrer">
                Chrome 商店查看 <Arrow />
              </a>
            ) : null}
          </div>
        </article>

        <div className="portfolio-personal-row">
          <header><span>个人项目</span></header>
          {personalProjects.map((project) => (
            <article key={project.id}>
              {project.gallery ? (
                <figure className="portfolio-personal-media portfolio-mowen-gallery" aria-label="Mowen Tarot 真实产品与小红书素材">
                  {project.gallery.map((item, index) => <img src={item.image} alt={item.alt} key={item.image} loading="lazy" fetchPriority={index === 0 ? "high" : "auto"} />)}
                </figure>
              ) : (
                <figure className="portfolio-personal-media portfolio-coco-motion">
                  <picture>
                    {project.motionFallback ? <source media="(prefers-reduced-motion: reduce)" srcSet={project.motionFallback} /> : null}
                    <img src={project.image} alt={project.imageAlt} loading="lazy" />
                  </picture>
                  <figcaption>mccoco.xyz 真实角色动图</figcaption>
                </figure>
              )}
              <div><span>{project.type}</span><h3>{project.name}</h3><p>{project.summary}</p>{project.link ? <a href={project.link} target="_blank" rel="noreferrer">打开项目 <Arrow /></a> : null}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-experience" id="experience">
        <header><p>EXPERIENCE</p><h2>从一线执行、带团队，<br />到把经验做成产品。</h2></header>
        <ol>
          {experience.map((item) => (
            <li key={item.period}><time>{item.period}</time><div><h3>{item.title}</h3><p>{item.body}</p></div></li>
          ))}
        </ol>
      </section>

      <footer className="portfolio-contact" id="contact">
        <p>OPEN TO AI CREATOR GROWTH / AI PRODUCT OPPORTUNITIES</p>
        <h2>想找一个懂海外增长、也做过真实 AI 产品的人？欢迎找我聊聊。</h2>
        <div className="portfolio-resume-links">
          <a href={profile.links.creatorResume} download><span>01</span><strong>Creator Growth 简历</strong><Arrow /></a>
          <a href={profile.links.productResume} download><span>02</span><strong>AI 产品经理简历</strong><Arrow /></a>
        </div>
        <div className="portfolio-contact-links">
          <span>{profile.location}</span>
          <a href={profile.links.email}>邮件联系 <Arrow /></a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a href="#top">回到顶部 ↑</a>
        </div>
      </footer>
    </main>
  );
}
