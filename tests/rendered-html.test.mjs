import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://portfolio.example/", {
      headers: { accept: "text/html", host: "portfolio.example" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the creator-marketing portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Mark — Creator Marketing &amp; Systems<\/title>/i);
  assert.match(html, /2021/);
  assert.match(html, /海外红人营销/);
  assert.match(html, /COCO[\s\S]*Desktop Pet/);
  assert.match(html, /Creator Operations OS/);
  assert.match(html, /负责海外红人营销运营团队/);
  assert.match(html, /6 名运营/);
  assert.match(html, /50\+[\s\S]*合作客户/);
  assert.match(html, /100\+[\s\S]*项目/);
  assert.match(html, /2000\+[\s\S]*达人内容上线/);
  assert.match(html, /累计千万级/);
  assert.match(html, /千万级[\s\S]*项目资金/);
  assert.match(html, /recommendation-redacted\.png/);
  assert.match(html, /research-redacted\.png/);
  assert.match(html, /draft-redacted\.png/);
  assert.match(html, /reply-parse-redacted\.png/);
  assert.match(html, /headliner-redacted\.png/);
  assert.match(html, /最近 10 条内容/);
  assert.match(html, /批量生成定制草稿/);
  assert.match(html, /标黄提醒/);
  assert.match(html, /头部达人单独研究，走另一条建联路径/);
  assert.match(html, /<details[^>]*open/);
  assert.match(html, /2021\.05—2024\.10/);
  assert.match(html, /KOL Intelligence/);
  assert.match(html, /Mowen[\s\S]*Tarot/);
  assert.match(html, /20w\+[\s\S]*系列累计浏览量/);
  assert.match(html, /mowen-homepage\.png/);
  assert.match(html, /mowen-xhs-20w\.jpg/);
  assert.match(html, /https:\/\/portfolio\.example\/og\.png/);
  assert.ok(
    html.indexOf("Creator Operations OS") < html.indexOf("COCO Desktop Pet"),
    "Creator Operations OS should be presented before the supporting projects",
  );
  assert.doesNotMatch(html, /GrowMax|grow-max|表内实收|毛利|利润/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/i);
});

test("keeps the finished site free of starter preview code", async () => {
  const [page, css, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|_sites-preview/);
  assert.doesNotMatch(layout, /codex-preview|Starter Project/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /summary:focus-visible/);
  assert.match(css, /oklch\(/);
  assert.doesNotMatch(css, /background-clip:\s*text|repeating-linear-gradient|backdrop-filter/);

  const previewFiles = await readdir(
    new URL("../app/_sites-preview", import.meta.url),
  ).catch(() => []);
  assert.deepEqual(previewFiles, []);
});
