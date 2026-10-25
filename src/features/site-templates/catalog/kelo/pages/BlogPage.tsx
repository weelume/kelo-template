import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Blog} from '../components/Blog'
export default function Page({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><Blog locale={locale} basePath={basePath} full/></Shell>}
