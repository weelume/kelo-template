# 架构

Next.js / React / Framer Motion，feature-based。src/features/site-templates/catalog/kelo 下 config 管品牌，content 管双语数据，theme.css 管主题与响应式，components 管区块及交互，pages 组合页面，meta.ts 注册。host.tsx 是可选的消费者适配，不依赖特定平台。

视频可见且页面活动时自动播放，离开或页面隐藏暂停；自动播放受阻会记录明确日志并显示原生控件。没有后端、数据库、支付或账户连接。
