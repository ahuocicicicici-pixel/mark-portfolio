import assert from "node:assert/strict";
import { access, readdir, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://portfolio.example${pathname}`, {
      headers: { accept: "text/html", host: "portfolio.example" },
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

function assertSharedPortfolioContent(html) {
  assert.match(html, /2021/);
  assert.match(html, /海外红人营销/);
  assert.match(html, /达人 OS 系统/);
  assert.match(html, /100\+[\s\S]*合作客户/);
  assert.match(html, /200\+[\s\S]*完整 Campaign/);
  assert.match(html, /2000\+[\s\S]*KOL 内容上线/);
  assert.match(html, /6 人[\s\S]*直接管理/);
  assert.doesNotMatch(html, /表内实收|毛利|利润/);
}

test("server-renders the job-focused creator growth and product portfolio", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Mark Shi — Creator Growth &amp; AI Operations Product<\/title>/i);
  assert.match(html, /我做海外 Creator Growth/);
  assert.match(html, /团队在用的 AI 产品/);
  assertSharedPortfolioContent(html);
  assert.doesNotMatch(html, /Kling AI 海外 Creator Growth|MY OWNERSHIP · FROM BRIEF TO LIVE/);
  assert.doesNotMatch(html, /href="#business"|id="business"/);
  assert.match(html, /href="#product"[^>]*>看产品案例/);
  assert.match(html, /href="#work"[^>]*>看其他产品/);
  assert.match(html, /PRODUCT CASE · 01/);
  assert.match(html, /OTHER PRODUCTS · 02/);
  assert.doesNotMatch(html, /PRODUCT CASE · 02|SUPPORTING WORK · 03/);
  assert.match(html, /GrowMax/);
  assert.match(html, /10[\s\S]*内部真实用户/);
  assert.match(html, /4 个月[\s\S]*持续运行/);
  assert.match(html, /30\+[\s\S]*累计处理项目/);
  assert.match(html, /3→4[\s\S]*人均并行项目[\s\S]*约 \+30%/);
  assert.match(html, /完整工作流轮播/);
  assert.match(html, /portfolio-workflow-prev/);
  assert.match(html, /portfolio-workflow-next/);
  assert.match(html, /portfolio-workflow-card/);
  assert.match(html, /id="portfolio-workflow-0"[^>]*checked/);
  assert.match(html, /上一个环节/);
  assert.match(html, /下一个环节/);
  assert.match(html, /执行跟踪/);
  assert.doesNotMatch(html, /额外业务证据|帮助其实际付费合作价格提升/);
  assert.match(html, /达人情报谷歌插件/);
  assert.match(html, /<h2>其他产品<\/h2>/);
  assert.match(html, /<span>个人项目<\/span>/);
  assert.doesNotMatch(html, /两个个人项目作为产品感和完整交付能力的补充证据/);
  assert.match(html, /coco-store-mock-1280x800\.jpg/);
  assert.match(html, /真实插件 mock/);
  assert.match(html, /AM 和运营团队/);
  assert.match(html, /Chrome 商店查看/);
  assert.match(html, /chromewebstore\.google\.com\/detail\/coco-creator-intel\/ogmmgjpedgjhhdpmmjiadgphenmineaa/);
  assert.match(html, /COCOPet Desktop Pet/);
  assert.match(html, /Mowen Tarot/);
  assert.match(html, /projects\/coco\/personality\.gif/);
  assert.match(html, /prefers-reduced-motion: reduce[^>]*projects\/coco\/hero-coco\.png/);
  assert.match(html, /mccoco\.xyz 真实角色动图/);
  assert.match(html, /mowen-xhs-featured\.jpg[\s\S]*mowen-product-home\.jpg[\s\S]*mowen-reading-result\.jpg/);
  assert.doesNotMatch(html, /projects\/tarot\/mowen-homepage\.png/);
  assert.match(html, /mark-shi-creator-growth-cn\.pdf/);
  assert.match(html, /mark-shi-ai-product-cn\.pdf/);
  assert.match(html, /recommendation-live\.png/);
  assert.doesNotMatch(html, /recommendation-redacted\.png/);
  assert.match(html, /真实系统 · 已去敏/);
  assert.doesNotMatch(html, /creator-intel-profile\.png|基于真实产品结构重绘|基于真实插件结构重绘/);
  assert.ok(html.indexOf("达人 OS 系统") < html.indexOf("达人情报谷歌插件"));
  assert.ok(html.indexOf("达人情报谷歌插件") < html.indexOf("COCOPet Desktop Pet"));
  assert.doesNotMatch(html, /千万级|选择项目|vivid-project-radio|vivid-controls/);

  await Promise.all([
    "projects/outreach/flow/recommendation-public.jpg",
    "projects/outreach/flow/recommendation-live.png",
    "projects/kol-intel/coco-store-mock-1280x800.jpg",
    "projects/coco/personality.gif",
    "projects/coco/hero-coco.png",
    "projects/tarot/mowen-xhs-featured.jpg",
    "projects/tarot/mowen-product-home.jpg",
    "projects/tarot/mowen-reading-result.jpg",
  ].map((path) => access(new URL(`../public/${path}`, import.meta.url))));
});

test("server-renders the cinematic portfolio", async () => {
  const response = await render("/cinematic");
  assert.equal(response.status, 200);

  const html = await response.text();
  assertSharedPortfolioContent(html);
  assert.match(html, /COCOPet[\s\S]*Desktop Pet/);
  assert.match(html, /达人情报谷歌插件/);
  assert.match(html, /Mowen Tarot/);
  assert.match(html, /recommendation-public\.jpg/);
  assert.doesNotMatch(html, /recommendation-live\.png/);
  assert.match(html, /20w\+/);
  assert.ok(html.indexOf("达人 OS 系统") < html.indexOf("COCOPet Desktop Pet"));
  assert.match(html, /Systems Builder/);
  assert.match(html, /查看系统怎么跑/);
  assert.match(html, /按账号时区/);
  assert.match(html, /解析报价、币种和交付形式/);
  assert.match(html, /个性化 Follow-up/);
  assert.match(html, /卡在客户、达人还是运营/);
  assert.match(html, /每位运营同时执行的达人数量约从 25\+ 提升到 35/);
  assert.doesNotMatch(html, /团队同时执行的达人约从 25\+ 提升到 35/);
  assert.match(html, /<details[^>]*class="cinematic-flow"/);
  assert.doesNotMatch(html, /<details[^>]*open/);
});

test("keeps both finished sites accessible and free of starter code", async () => {
  const [rootPage, vivid, cinematic, css, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/VividPortfolio.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/CinematicPortfolio.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(`${rootPage}${vivid}${cinematic}`, /SkeletonPreview|_sites-preview/);
  assert.doesNotMatch(layout, /codex-preview|Starter Project/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /@font-face/);
  assert.match(css, /@media \(max-width: 560px\)/);
  assert.match(css, /portfolio-mowen-gallery[\s\S]*overflow-x:\s*auto[\s\S]*scroll-snap-type:\s*x mandatory/);
  assert.doesNotMatch(css, /linear-gradient\([^)]*purple|#6d28d9|#7c3aed/i);

  const previewFiles = await readdir(new URL("../app/_sites-preview", import.meta.url)).catch(() => []);
  assert.deepEqual(previewFiles, []);
});
