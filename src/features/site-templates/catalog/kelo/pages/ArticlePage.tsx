import {route} from '../config/routes'
import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {articles} from '../content/data'
import {asset} from '../config/brand'
import {Shell,Reveal} from '../components/Shell'
export function ArticlePage({locale='zh',basePath,slug}:SiteTemplatePageProps&{slug:string}){const article=articles.find(a=>a.slug===slug);if(!article)throw new Error('未注册的文章');const zh=locale==='zh';return <Shell locale={locale} basePath={basePath}><article className="kl-article kl-container"><Link className="kl-learn" href={route(basePath,'blog')}>{zh?'返回全部更新':'Back to all updates'}</Link><Reveal><span className="kl-eyebrow">{zh?'产品洞察 · 阅读约 3 分钟':'PRODUCT INSIGHTS · 3 MIN READ'}</span><h1>{article.title[locale]}</h1><p className="kl-intro">{article.summary[locale]}</p></Reveal><img className="kl-article-cover" src={asset(article.image)} alt={article.title[locale]}/><div className="kl-prose">{article.sections.map(([title,body])=><section key={title.en}><h2>{title[locale]}</h2><p>{body[locale]}</p></section>)}<p>{zh?'本文为原创演示文章，用于展示模板内容结构。':'This original demonstration article showcases the template’s content structure.'}</p><Link className="kl-button kl-green" href={route(basePath,'contact')}>{zh?'与我们聊聊':'Start a conversation'}</Link></div></article></Shell>}
