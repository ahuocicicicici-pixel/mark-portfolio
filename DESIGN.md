# Design System — Mark Portfolio

## 共同原则

- 人在前，工具在后。首屏必须出现 Mark、海外红人营销和 2021。
- 达人 OS 系统与达人情报谷歌插件是两个工作主产出；COCOPet 与 Mowen Tarot 是个人产品。
- 所有项目使用真实素材。界面只展示用户确认过的去敏版本。
- 中文正文使用 Atkinson Hyperlegible Next 与 PingFang SC / Noto Sans SC 回退；编辑感标题使用 Songti SC / Noto Serif CJK SC。
- 不使用蓝紫色、科技网格、发光粒子、同尺寸卡片墙或渐变文字。

## 版本 A：Compact Vivid Portfolio

### 视觉方向

强色编辑部与杂志封面的混合。珊瑚橙负责达人 OS 系统，芥末黄负责达人情报谷歌插件；两个个人产品分别使用橄榄绿和棕红。页面先给出两项工作证据，再补充个人产品能力。

### 色板

- Operations：珊瑚橙 `#f48360`、奶油桃 `#ffd9c7`、墨黑 `#17130f`
- COCO：橄榄绿 `#8e9f78`、麻布米 `#e9d9bd`
- KOL Badge：芥末黄 `#e5b84b`、淡黄 `#f5e9b8`
- Mowen：棕红 `#6b392b`、宣纸米 `#e8d7b5`

### 页面结构

1. Identity + proof hero：姓名、职业身份、三类能力和五项业务规模在首屏完成。
2. Work output 01：达人 OS 系统标题后直接进入五步完整工作流，用大箭头横向切换，不重复展示同一张推荐图。
3. Work output 02：达人情报谷歌插件使用完整插件截图和三条简短证据，说明场景、个人职责和落地状态。
4. Personal products：COCO 与 Mowen 并列出现，各自只证明一种补充能力。
5. Compact close：经历和联系合并成一个收尾区。

### 动效

只保留图片的轻微 Hover 放大，以及主案例五步流程的单一横向切换。页面不使用整屏分页或滚动劫持。

## 版本 B：Cinematic Scroll

### 视觉方向

黑金编辑电影感。固定的轨道线、暗纹和超大背景字只负责气氛，页面内容保持稀疏。金色只用在标签、数字和行动入口。

### 色板

- Background `#080806`
- Warm white `#f4ecdc`
- Muted gold `#d9b670`
- Glass surface `rgba(28, 25, 18, 0.64)`

### 页面结构

1. Cinematic hero：身份、简短自述和主案例入口。
2. Statement：一句工作方法和三项能力。
3. Business scale：五项公开区间。
4. Main case：达人 OS 系统大图、问题、角色、结果与五步折叠流程。
5. Selected work：COCO 主位，Badge 和 Mowen 辅助。
6. Experience 与玻璃页尾。

### 动效

固定背景不抢滚动。支持 `animation-timeline` 的浏览器使用一次滚动揭示；其余浏览器直接显示内容。导航和页尾是全站仅有的模糊表面。

## 响应式与可访问性

- 820px 以下，双栏全部改为单栏；五项数据改成两列。
- 560px 以下，首屏标题、项目媒体和流程截图使用独立手机裁切。
- 所有按钮、链接和折叠控件有可见焦点。
- `prefers-reduced-motion: reduce` 会关闭动画和顺滑滚动。
