import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
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
  assert.match(html, /200\+[\s\S]*执行项目/);
  assert.match(html, /2000\+[\s\S]*达人内容上线/);
  assert.match(html, /6 人[\s\S]*直接管理/);
  assert.match(html, /千万级[\s\S]*项目资金/);
  assert.match(html, /recommendation-redacted\.png/);
  assert.doesNotMatch(html, /GrowMax|grow-max|表内实收|毛利|利润/);
}

test("server-renders the compact vivid portfolio", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Mark — Creator Marketing &amp; Systems<\/title>/i);
  assert.match(html, /5\+ 年专注海外红人营销/);
  assertSharedPortfolioContent(html);
  assert.match(html, /2021—2026[\s\S]*海外红人[\s\S]*营销/);
  assert.match(html, /BUSINESS SNAPSHOT/);
  assert.match(html, /WORK OUTPUT · 01/);
  assert.match(html, /完整工作流/);
  assert.match(html, /id="workflow-0"[^>]*checked/);
  assert.match(html, /上一个环节/);
  assert.match(html, /下一个环节/);
  assert.doesNotMatch(html, /<details[^>]*class="vivid-workflow"|展开看完整工作流/);
  assert.doesNotMatch(html, /vivid-case-grid|不是给运营加一个 AI 对话框/);
  assert.match(html, /WORK OUTPUT · 02/);
  assert.match(html, /达人情报谷歌插件/);
  assert.match(html, /creator-intel-profile\.png/);
  assert.match(html, /AM 和运营团队/);
  assert.match(html, /团队整体效率提升约 30%/);
  assert.match(html, /PERSONAL PRODUCTS · 03—04/);
  assert.match(html, /COCOPet Desktop Pet/);
  assert.match(html, /Mowen Tarot/);
  assert.ok(html.indexOf("达人 OS 系统") < html.indexOf("达人情报谷歌插件"));
  assert.ok(html.indexOf("达人情报谷歌插件") < html.indexOf("COCOPet Desktop Pet"));
  assert.doesNotMatch(html, /选择项目|vivid-project-radio|vivid-controls/);
});

test("server-renders the cinematic portfolio", async () => {
  const response = await render("/cinematic");
  assert.equal(response.status, 200);

  const html = await response.text();
  assertSharedPortfolioContent(html);
  assert.match(html, /COCOPet[\s\S]*Desktop Pet/);
  assert.match(html, /达人情报谷歌插件/);
  assert.match(html, /Mowen Tarot/);
  assert.match(html, /20w\+/);
  assert.ok(html.indexOf("达人 OS 系统") < html.indexOf("COCOPet Desktop Pet"));
  assert.match(html, /Systems Builder/);
  assert.match(html, /查看系统怎么跑/);
  assert.match(html, /最近 10 条内容/);
  assert.match(html, /批量调查、起草、发送与 Follow-up/);
  assert.match(html, /回写表格并提醒/);
  assert.match(html, /单独维护经纪人、MCN/);
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
  assert.doesNotMatch(css, /linear-gradient\([^)]*purple|#6d28d9|#7c3aed/i);

  const previewFiles = await readdir(new URL("../app/_sites-preview", import.meta.url)).catch(() => []);
  assert.deepEqual(previewFiles, []);
});
