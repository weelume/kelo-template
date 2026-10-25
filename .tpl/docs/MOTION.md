# 原站动效与对照清单

来源：公开运行预览及其实际加载的脚本。已实际采集三端功能/流程运行状态，但未完成原站与实现的全部逐帧时序对照。

|区块|原参数与触发|实现|
|---|---|---|
|导航|y -20→0 / opacity，0.8s easeOut|Shell|
|首屏|标题 y20 / 描述与 CTA y16，0.6s，delay .1/.2/.3|Hero|
|品牌|delay .5，stagger .1；hover1.1|Hero；字体字号按双语规范调整|
|视频|muted autoplay loop playsInline|原 Hero 03.mp4，本地托管；离开/隐藏暂停，降动态提供手动控制|
|功能|卡片 stagger .1，y20，.5s；hover y-5/.2s|Features，首卡图片缩放保留|
|训练|标签延迟 .5/.6/.7，x -10→0；loading 1s旋转|横向 -10 入场已实现|
|工作流|浮块 y±12 / rotate±5 / scale1.05，6s/5s delay1；节点 .2/.3/.5|Workflow|
|洞察|音量20→90%，2.5s stagger .4；柱高40/70/45/90/65/80/50/60，1.2s stagger.1|Insights|
|流程|卡片 y30 .8s ease .21/.47/.32/.98，stagger.2；背景8/10s|Steps；使用原 .21/.47/.32/.98 曲线|
|流程1|节点入场delay.4/.5/.6；浮动±2/3s；光带2.5s；图标旋转4s/缩放2s/透明2s|节点、浮动、光带与图标循环已写；待逐项实测|
|流程2|中心点scale1.3/opacity，2s；五环scale .2→1.8，opacity0/.6/0，4s，stagger .8|OrbitDemo|
|流程3|扫描3s、点阵opacity2s stagger.1、柱高1.5n→2.2n→1.5n /2s stagger.05|AnalyticsDemo|
|集成|每帧 .5px，双份循环，hover暂停；横向原生滚动|30px/s时间校准；键盘、触控及拖动，手动暂停|
|价格|标题 y20 .55s；面板 y28 .7 delay.15；列 y16 .5 delay.25+.1i|Pricing|
|FAQ|分类切换清空展开；height0→auto opacity .3 easeOut|Faq|
|文章|hover y-2；图scale1.05/.5s|Blog|
|页脚|标题 y16 .8 delay.1；表单delay.25；玻璃面板opacity1s delay.2|Footer|

无原参考拖拽回弹，不自行添加。按本项目规范移除装饰箭头；保留实际导航。扩展内页为原创内容，使用同主题与已有区块。系统减少动态效果时关闭循环、入场与自动播放；具体操作矩阵待验证。

## 实际运行补充

三端已观察工作流浮动、训练旋转、流程扫描、扩散环与分析柱的变化；手机柱状图在滚动进入后由0增长。循环横列暂停时 scrollLeft 保持 0.667，恢复后增长至38。视频已实际播放并在离开视区暂停。全部原站悬停/按压、精确触发边界和系统减少动态设置矩阵尚未完整对照。
