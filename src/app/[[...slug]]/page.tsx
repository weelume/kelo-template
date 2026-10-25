import { notFound } from 'next/navigation'
import { keloTemplate } from '../../features/site-templates/catalog/kelo/meta'
export function generateStaticParams() { return keloTemplate.surfaces[0].pages.flatMap(page => [{ slug: page.slug ? page.slug.split('/') : [] }, { slug: ['en', ...(page.slug ? page.slug.split('/') : [])] }]) }
export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params, locale = slug[0] === 'en' ? 'en' : 'zh', path = (locale === 'en' ? slug.slice(1) : slug).join('/')
  const page = keloTemplate.surfaces[0].pages.find(page => page.slug === path)
  if (!page) notFound()
  const { default: Component } = await page.load()
  return <Component locale={locale} basePath={locale === 'en' ? '/en' : ''} />
}
export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) { const { slug = [] } = await params; return { title: `${slug[0] === 'en' ? 'AI Customer Support' : 'AI 客户支持'} · Kelo` } }
