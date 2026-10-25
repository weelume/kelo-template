import {text as t} from '../config/brand'
export const navigation=[['features',t('产品功能','Features')],['solutions',t('解决方案','Solutions')],['pricing',t('价格方案','Pricing')],['about',t('关于我们','About')]] as const
export const features=[
 {id:'conversations',title:t('更懂你的对话\n更出色的结果','Smarter conversations,\nbetter results.'),body:t('以接近人的理解能力和即时响应，轻松处理复杂问题。','Our AI chatbot handles complex queries with human-like understanding and lightning-fast speed.')},
 {id:'learning',title:t('理解上下文的学习能力','Context-Aware Learning'),body:t('从每一次互动中学习，让回复越来越准确，也越来越贴合客户。','The chatbot learns from every interaction to provide increasingly accurate and personalized responses.')},
 {id:'workflows',title:t('自动化工作流','Automated Workflows'),body:t('从对话直接触发业务动作，连接 CRM 更新、邮件通知与服务工单。','Trigger actions across your stack directly from chat, from CRM updates to helpdesk tickets.')},
 {id:'insights',title:t('洞察每一段对话','Conversational Insights'),body:t('实时分析对话趋势与客户情绪，持续改善每一次服务体验。','Analyze chat patterns and sentiment in real-time to continuously improve user satisfaction.')}
]
export const steps=[
 {image:'process.jpg',title:t('分析你的业务流程','Analyze Your Process'),body:t('连接现有工具，让 AI 发现适合自动化的工作环节。','Connect your tools - our AI scans workflows to spot automation.')},
 {image:'train.jpeg',title:t('借助 AI 自动执行','Automate with AI'),body:t('持续学习、适应变化，让繁琐工作流自然运转。','AI learns and adapts to optimize your workflows effortlessly.')},
 {image:'desk.jpeg',title:t('预测分析辅助决策','Predictive Analytics'),body:t('用机器学习提炼数据洞察，让每一次业务决策更有依据。','Data-driven insights with machine learning for smarter business decisions.')}
]
export const integrations=[
 ['arc','Arc','arc.net','为你而工作的浏览器','The browser that works for you'],['notion','Notion','notion.so','笔记与文档的一站式工作区','All-in-one workspace for notes and docs'],['raycast','Raycast','raycast.com','用快捷键掌控你的工具','Control your tools with a keystroke'],['loom','Loom','loom.com','团队异步视频沟通','Async video messaging for teams'],['mailchimp','Mailchimp','mailchimp.com','邮件营销与自动化','Marketing automation and email marketing'],['lovable','Lovable','lovable.dev','用自然语言构建应用','Build apps with natural language'],['bolt','Bolt','bolt.new','快速开发环境','Lightning fast development environment'],['warp','Warp','warp.dev','面向现代工作方式的终端','The terminal for the 21st century'],['vscode','Visual Studio Code','code.visualstudio.com','重新定义代码编辑','Code editing. Redefined.'],['nextjs','Next.js','nextjs.org','面向 Web 的 React 框架','The React Framework for the Web'],['figma','Figma','figma.com','协作式界面设计工具','The collaborative interface design tool'],['obsidian','Obsidian','obsidian.md','本地文件驱动的知识库','A powerful knowledge base on local files'],['dropbox','Dropbox','dropbox.com','云端存储与文件同步','Cloud storage and file synchronization'],['zapier','Zapier','zapier.com','连接应用并自动执行工作','Automate your work across 5,000+ apps'],['cleanshot','Cleanshot','cleanshot.com','轻松完成屏幕录制','The ultimate screen recording tool'],['framer','Framer','framer.com','设计并发布理想网站','Design and publish your dream site'],['linear','Linear','linear.app','高效团队的问题追踪工具','The issue tracker for high-performance teams'],['discord','Discord','discord.com','连接社区与团队','Where the world hangs out'],['supabase','Supabase','supabase.com','开源的应用开发平台','The open source Firebase alternative'],['craft','Craft','craft.do','记录你的想法与灵感','Document your thoughts and ideas'],['vercel','Vercel','vercel.com','开发、预览与交付','Develop. Preview. Ship.'],['github','GitHub','github.com','共同构建软件','Where the world builds software'],['grok','Grok.com','x.ai','理解世界的 AI','AI that understands the world'],['chatgpt','ChatGPT','openai.com','人人可用的 AI 助手',"The world's most popular AI assistant"],['v0','v0','v0.dev','开发者的生成式界面工具','Generative UI for developers']
].map(([id,name,domain,zh,en])=>({id,name,domain,description:t(zh,en)}))
export const plans=[
 {name:t('入门方案','Starter Plan'),tagline:t('从零开始迈向自动化','From zero to automated.'),price:'$499',items:[t('业务流程审计','PROCESS AUDIT'),t('1 条自动化工作流','1 AUTOMATED WORKFLOW'),t('工具集成配置','TOOL INTEGRATION SETUP'),t('邮件与 Slack 通知','EMAIL & SLACK NOTIFICATIONS'),t('30 天支持','30-DAY SUPPORT'),t('双周进度沟通','BI-WEEKLY CHECK-IN')]},
 {name:t('成长方案','Growth Plan'),tagline:t('多个系统 一个团队','Multiple systems, one team.'),price:'$999',items:[t('包含入门方案全部能力','EVERYTHING IN STARTER'),t('最多 4 条自动化工作流','UP TO 4 AUTOMATED WORKFLOWS'),t('CRM 与 API 集成','CRM & API INTEGRATIONS'),t('每月优化沟通','MONTHLY OPTIMIZATION CALL'),t('业务效果报告','PERFORMANCE REPORTING'),t('优先支持','PRIORITY SUPPORT')]},
 {name:t('定制方案','Custom'),tagline:t('完整的自动化架构','Full automation architecture.'),price:'Custom',items:[t('包含成长方案全部能力','EVERYTHING IN GROWTH'),t('不限数量的工作流','UNLIMITED WORKFLOWS'),t('定制 AI 智能体','CUSTOM AI AGENTS'),t('专属客户经理','DEDICATED ACCOUNT MANAGER'),t('每周策略沟通','WEEKLY STRATEGY CALLS'),t('服务等级协议','SLA AGREEMENT')]}
]
export const faqCategories=[t('产品','Product'),t('支持','Support'),t('付款','Payments')]
export const faqs=[
 [
  [t('可以免费试用吗？','Is there a free trial?'),t('可以！提供 14 天完整功能试用，开始体验无需信用卡。本模板仅演示该产品流程。','Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started. This template demonstrates the product flow.')],
  [t('完成配置需要多久？','How long does setup take?'),t('连接数据源、配置知识库并检查回复后即可开始。实际时间取决于你的业务和数据质量。','Connect your sources, configure the knowledge base, and review responses. Timing depends on your workflow and data quality.')],
  [t('能连接我现在使用的工具吗？','Can I integrate Kelo with my current tools?'),t('可以规划 CRM、帮助台与 API 连接。本模板的集成页面展示场景，不会连接真实账户。','You can plan CRM, helpdesk, and API connections. The integration directory is a demonstration and does not connect real accounts.')],
  [t('试用结束后会怎样？','What happens after the trial ends?'),t('你可以评估后选择合适方案。本演示不会收费，也不会开通订阅。','Review the results and choose a suitable plan. This demonstration does not charge or create subscriptions.')],
  [t('企业数据如何保障安全？','Is Kelo secure enough for enterprise use?'),t('正式产品需要明确访问控制、数据保留与审计策略。本模板不接收或存储客户数据。','A production product requires access controls, retention rules, and auditing. This template does not collect or store customer data.')],
  [t('可以获得哪些支持？','What kind of support do you offer?'),t('方案包含不同程度的配置与优化支持。联系页面可本地校验需求，但不会提交。','Plans describe setup and optimization support. The contact page validates your request locally without submitting it.')]
 ],
 [
  [t('如何联系团队？','How do I contact the team?'),t('打开联系页填写需求，查看本地校验提示。演示信息不会发送。','Open the contact page and describe your needs. Demo information is validated locally and never sent.')],
  [t('可以协助迁移知识库吗？','Can you help migrate a knowledge base?'),t('先梳理现有内容，再制定连接与验证计划。此模板不执行真实迁移。','Review existing content, then plan connection and verification. This template does not perform real migrations.')],
  [t('支持无障碍与移动端吗？','Is the experience accessible and mobile ready?'),t('支持键盘导航、触控布局与系统减少动态效果偏好。','The interface supports keyboard navigation, touch layouts, and reduced motion preferences.')]
 ],
 [
  [t('演示会产生费用吗？','Will this demo charge me?'),t('不会。价格仅用于展示，没有支付接口或订阅服务。','No. Prices are illustrative. There is no payment endpoint or subscription service.')],
  [t('能否按业务规模选择方案？','Can I choose a plan for my business size?'),t('可比较入门、成长与定制方案，并在联系表单中选择意向。','Compare Starter, Growth, and Custom plans, then select your interest in the contact form.')],
  [t('是否收集付款信息？','Do you collect payment details?'),t('不收集信用卡、账户或任何付款信息。','No credit card, account, or payment information is collected.')]
 ]
]
export const articles=[
 {slug:'building-kelo',image:'landscape.jpg',title:t('幕后故事：我们如何构建 Kelo 自动化','Behind the Scenes: How We Built Kelo Automation'),summary:t('更清晰、更直觉的设计，减少操作步骤，让团队把注意力放回重要的事情。','A cleaner, more intuitive design that reduces clicks, improves focus, and looks stunning in both light and dark modes'),sections:[
  [t('从真正的问题出发','Start with a real problem'),t('重复回答相似问题会消耗团队的时间。我们先梳理常见请求，再把可确认的知识整理成有结构的内容。自动化应从清晰的信息开始。','Repeated questions take time away from meaningful work. First identify common requests, then organize verified knowledge into structured content. Automation starts with clear information.')],
  [t('让流程可理解','Make the workflow understandable'),t('把触发条件、处理步骤和完成状态展示出来，让人知道系统正在做什么。无法确认的回复应交给团队判断，而不是假装成功。','Show triggers, actions, and completion states so people understand what is happening. Uncertain answers should be reviewed by the team instead of appearing successful.')],
  [t('持续检验服务质量','Keep reviewing quality'),t('定期检查回复准确性、处理时间和客户反馈。本文为模板原创演示内容，不代表实际产品表现。','Review accuracy, handling time, and customer feedback regularly. This article is original demonstration content and does not claim actual product performance.')]
 ]},
 {slug:'sales-metrics',image:'desk.jpeg',title:t('真正值得关注的 3 项销售指标','3 Sales Metrics That Actually Matter'),summary:t('使用更清晰的条件和分支规划自动化，让重复工作自然流转。','Create advanced no-code automations using new conditions and branching logic. Your repetitive tasks just became hands-free.'),sections:[
  [t('首次响应时间','First response time'),t('关注客户从发出问题到收到有效回应的时间。速度有价值，但前提是回复能帮助客户前进一步。','Measure the time between a question and a useful response. Speed matters when the answer helps a customer take the next step.')],
  [t('问题解决率','Resolution rate'),t('观察问题是否真正得到解决，而不只看对话是否被关闭。为复杂问题保留人工介入的路径。','Check whether the issue was actually resolved, rather than simply closed. Keep a clear handoff path for complex questions.')],
  [t('客户满意度','Customer satisfaction'),t('结合定量反馈与真实对话复盘，识别知识缺口。此处为方法说明，不包含真实业务数据。','Combine feedback scores with conversation reviews to identify knowledge gaps. These are practical ideas, not real business results.')]
 ]},
 {slug:'crm-simplicity',image:'train.jpeg',title:t('简化 CRM 如何改善销售运营','The ROI of CRM Simplicity in Sales Operations'),summary:t('把更新、评论和集成放在同一条清晰的信息流中，让协作更轻松。','Now you can see every action—edits, comments, integrations—all in one real-time feed. Stay aligned without asking.'),sections:[
  [t('减少不必要的切换','Reduce unnecessary switching'),t('将常用动作放到合适的位置，用少量清晰的步骤替代分散的重复操作。','Put common actions in context and replace scattered repetitive work with a small number of clear steps.')],
  [t('建立共同的数据语言','Create shared definitions'),t('先对齐客户状态与流程含义，再连接不同工具。工具连接不应掩盖业务规则。','Agree on customer states and workflow definitions before connecting tools. Integrations should make business rules visible.')],
  [t('从小范围开始','Start with a focused scope'),t('先验证一条流程，记录结果，再逐步扩展。此模板只演示界面和交互，没有连接实际 CRM。','Validate one workflow, review the outcome, and expand gradually. This template demonstrates interfaces and interactions without connecting a real CRM.')]
 ]}
]
