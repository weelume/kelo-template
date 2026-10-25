'use client'
import Link from 'next/link'
import {asset} from '../config/brand'
import {articles} from '../content/data'
import {Reveal,route,type SectionProps} from './Shell'
export function Blog({locale,basePath,full=false}:SectionProps&{full?:boolean}){const zh=locale==='zh';return <section className="kl-section kl-blog"><div className="kl-container"><header className="kl-split-heading"><h2>{zh?'探索产品的新动态\n与值得分享的洞察':'Explore Product Latest\nUpdates & Insights'}</h2>{!full&&<Link href={route(basePath,'blog')} className="kl-button kl-outline">{zh?'全部更新':'All Updates'}</Link>}</header><div className="kl-blog-grid">{articles.map(a=><Reveal key={a.slug} className="kl-blog-card"><Link className="kl-blog-image" href={route(basePath,'blog/'+a.slug)}><img src={asset(a.image)} alt={a.title[locale]}/></Link><h3><Link href={route(basePath,'blog/'+a.slug)}>{a.title[locale]}</Link></h3><p>{a.summary[locale]}</p><Link className="kl-learn" href={route(basePath,'blog/'+a.slug)}>{zh?'了解更多':'Learn more'}</Link></Reveal>)}</div></div></section>}
