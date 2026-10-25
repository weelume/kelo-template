'use client'
import Link from 'next/link'
import {usePathname,useRouter} from 'next/navigation'
import {MotionConfig, motion, useReducedMotion} from 'framer-motion'
import {useEffect,useRef,useState,type ReactNode} from 'react'
import {asset,brand,type Locale} from '../config/brand'
import {navigation} from '../content/data'
import {useKeloHost} from '../host'
import '../theme.css'
export interface SectionProps {locale:Locale;basePath:string}
import {route} from '../config/routes'
export {route} from '../config/routes'
export function Reveal({children,className='',delay=0,duration=.6,y=20,x=0,ease='easeOut'}:{children:ReactNode;className?:string;delay?:number;duration?:number;y?:number;x?:number;ease?:'easeOut'|[number,number,number,number]}){
 const reduce=useReducedMotion()
 return <motion.div className={className} initial={reduce?false:{opacity:0,y,x}} whileInView={{opacity:1,y:0,x:0}} viewport={{once:true,margin:'-40px'}} transition={{duration:reduce?0:duration,delay:reduce?0:delay,ease}}>{children}</motion.div>
}
export function Heading({title,body}:{title:string;body?:string}){return <header className="kl-heading"><Reveal><h2>{title}</h2></Reveal>{body&&<Reveal delay={.1}><p>{body}</p></Reveal>}</header>}
export function Video({className='',locale='zh'}:{className?:string;locale?:Locale}){
 const video=useRef<HTMLVideoElement>(null),reduce=useReducedMotion(),[failed,setFailed]=useState(false),host=useKeloHost()
 useEffect(()=>{const el=video.current;if(!el)return
  let visible=true,cancelled=false
  const update=()=>{if(reduce||document.hidden||!visible){el.pause();return}void el.play().catch((error:unknown)=>{if(cancelled)return;const name=error instanceof Error?error.name:'unknown';if(name==='AbortError'&&(document.hidden||!visible||reduce)){console.debug('[Kelo video] 可见性切换已中断播放请求');return}console.warn('[Kelo video] 自动播放被阻止: '+name);setFailed(true)})}
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;update()},{threshold:.05});observer.observe(el);document.addEventListener('visibilitychange',update);update()
  return()=>{cancelled=true;observer.disconnect();document.removeEventListener('visibilitychange',update);el.pause()}
 },[reduce])
 return <video ref={video} className={className} muted loop playsInline controls={!!reduce||failed} poster={asset('interior.jpg')} aria-label={host.brandName[locale]+(locale==='zh'?'背景视频':' background video')} onError={()=>{console.error('[Kelo video] 视频加载失败');setFailed(true)}}><source src={asset('hero.mp4')} type="video/mp4"/></video>
}
export function Shell({children,locale='zh',basePath,hero=false}:{children:ReactNode;locale?:Locale;basePath:string;hero?:boolean}){
 const host=useKeloHost(),[menu,setMenu]=useState(false),pathname=usePathname(),menuButton=useRef<HTMLButtonElement>(null)
 useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==='Escape'){setMenu(false);menuButton.current?.focus()}};document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close)},[])
 // 当前页面、查询和锚点一起切换，使用客户端路由避免整页刷新。
 return <MotionConfig reducedMotion="user"><div className={`kl ${hero?'kl-home':''}`} lang={locale==='en'?'en':'zh-CN'}>
  <a className="kl-skip" href="#kl-main">{locale==='zh'?'跳到主要内容':'Skip to content'}</a>
  <motion.header key={pathname} className={`kl-nav-wrap ${hero?'on-hero':''}`} initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.8,ease:'easeOut'}}>
   <nav className="kl-nav" aria-label={locale==='zh'?'主导航':'Main navigation'}>
    <Link href={route(basePath)} className="kl-brand">{(hero?host.lightLogo:host.logo)&&<img src={hero?host.lightLogo:host.logo} alt=""/>}<span>{host.brandName[locale]}</span></Link>
    <div className="kl-desktop-nav">{navigation.map(([slug,label])=><Link key={slug} href={route(basePath,slug)}>{label[locale]}</Link>)}</div>
    <div className="kl-nav-actions"><LanguageLink locale={locale} basePath={basePath}/><Link className="kl-login" href={route(basePath,'contact')}>{locale==='zh'?'联系团队':'Log in'}</Link><Link className="kl-button kl-white" href={route(basePath,'contact')}>{locale==='zh'?'开始体验':'Get Started'}</Link><button ref={menuButton} type="button" className="kl-menu-button" aria-expanded={menu} aria-controls="kl-mobile-menu" aria-label={locale==='zh'?'切换导航菜单':'Toggle navigation menu'} onClick={()=>setMenu(!menu)}>{menu?'×':'☰'}</button></div>
    {menu&&<motion.div id="kl-mobile-menu" className="kl-mobile-menu" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}}>{navigation.map(([slug,label])=><Link onClick={()=>setMenu(false)} key={slug} href={route(basePath,slug)}>{label[locale]}</Link>)}<Link onClick={()=>setMenu(false)} href={route(basePath,'blog')}>{locale==='zh'?'更新与洞察':'Updates & insights'}</Link><Link onClick={()=>setMenu(false)} href={route(basePath,'contact')}>{locale==='zh'?'联系我们':'Contact us'}</Link></motion.div>}
   </nav>
  </motion.header>
  <main id="kl-main">{children}</main>
  <Footer locale={locale} basePath={basePath}/>
  {host.marketplaceHref&&<Link className="kl-market" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}>{host.lightLogo&&<img src={host.lightLogo} alt=""/>}<span>{host.brandName[locale]}</span></Link>}
 </div></MotionConfig>
}
function LanguageLink({locale,basePath}:SectionProps){const pathname=usePathname(),router=useRouter(),root=locale==='en'?basePath.replace(/\/en$/,''):basePath,slug=pathname.startsWith(basePath)?pathname.slice(basePath.length).replace(/^\//,''):'',target=route(locale==='zh'?root+'/en':root,slug)
 return <Link href={target} lang={locale==='zh'?'en':'zh-CN'} aria-label={locale==='zh'?'Switch to English':'切换为中文'} onClick={e=>{e.preventDefault();router.push(target+window.location.search+window.location.hash)}}>{locale==='zh'?'EN':'中文'}</Link>
}
export function LocalForm({locale,compact=false}:{locale:Locale;compact?:boolean}){
 const[done,setDone]=useState(false),zh=locale==='zh'
 return <form className={compact?'kl-subscribe':'kl-contact-form'} onSubmit={e=>{e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;console.debug('[Kelo demo form]',{step:'validated',kind:compact?'newsletter':'contact',sent:false,saved:false});setDone(true)}} onChange={()=>setDone(false)}>
  {!compact&&<><label>{zh?'你的姓名':'Your name'}<input required name="name" autoComplete="name" maxLength={100}/></label><label>{zh?'公司名称':'Company'}<input name="company" autoComplete="organization" maxLength={120}/></label></>}
  <label className={compact?'kl-email-only':''}><span>{zh?'邮箱地址':'Email address'}</span><input required name="email" type="email" autoComplete="email" placeholder={zh?'输入你的邮箱':'Enter your email'} maxLength={254}/></label>
  {!compact&&<><label>{zh?'意向方案':'Interested plan'}<select name="plan"><option>{zh?'入门方案':'Starter Plan'}</option><option>{zh?'成长方案':'Growth Plan'}</option><option>{zh?'定制方案':'Custom'}</option></select></label><label className="kl-full">{zh?'告诉我们你的需求':'Tell us about your needs'}<textarea name="message" required minLength={10} maxLength={3000} rows={5}/></label></>}
  <button className={`kl-button ${compact?'kl-white':'kl-green'}`} type="submit">{compact?(zh?'订阅预览':'SUBSCRIBE'):(zh?'检查填写内容':'Review request')}</button>
  <p className="kl-form-note" role="status">{done?(zh?'校验通过；演示内容未发送、未保存。':'Validated. Demo information was not sent or saved.'):(zh?'仅本地演示：不发送、不保存任何填写内容。':'Local demo only. Nothing is sent or saved.')}</p>
 </form>
}
function Footer({locale,basePath}:SectionProps){const host=useKeloHost(),zh=locale==='zh';return <footer className="kl-footer"><Video locale={locale} className="kl-footer-video"/><div className="kl-footer-shade"/><div className="kl-footer-top"><Reveal duration={.8} delay={.1}><h2>{zh?'每周新知\n只谈有用的事':'Weekly News. No Fluff.'}</h2></Reveal><Reveal duration={.8} delay={.25}><LocalForm compact locale={locale}/></Reveal></div><Reveal className="kl-footer-panel" duration={1} delay={.2}><div className="kl-footer-grid"><div><Link className="kl-brand" href={route(basePath)}>{host.lightLogo&&<img src={host.lightLogo} alt=""/>}<span>{host.brandName[locale]}</span></Link><p>{zh?'让每一次对话更有价值，让客户支持更从容。':'Make every conversation count. Bring clarity and calm to customer support.'}</p></div><div><h3>{zh?'探索产品':'Explore'}</h3>{[['features',zh?'产品功能':'Features'],['solutions',zh?'解决方案':'Solutions'],['integrations',zh?'集成目录':'Integrations'],['pricing',zh?'价格方案':'Pricing']].map(([slug,label])=><Link key={slug} href={route(basePath,slug)}>{label}</Link>)}</div><div><h3>{zh?'关于我们':'About Project'}</h3>{[['about',zh?'我们的理念':'Our mission'],['blog',zh?'更新与洞察':'Updates & insights'],['contact',zh?'联系团队':'Contact team']].map(([slug,label])=><Link key={slug} href={route(basePath,slug)}>{label}</Link>)}</div><div><h3>{zh?'支持与帮助':'Support'}</h3>{[['faq',zh?'帮助中心':'Help center'],['privacy',zh?'隐私政策':'Privacy policy'],['terms',zh?'服务条款':'Terms of service']].map(([slug,label])=><Link key={slug} href={route(basePath,slug)}>{label}</Link>)}</div></div><div className="kl-footer-bottom"><span>© {brand.year} {host.brandName[locale]}</span>{host.marketplaceHref&&<Link href={host.marketplaceHref}>{host.marketplaceLabel?.[locale]}</Link>}{host.filing}</div></Reveal></footer>}
