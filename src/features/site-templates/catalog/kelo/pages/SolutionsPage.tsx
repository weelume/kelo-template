import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Steps} from '../components/Steps'
export default function Page({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><Steps locale={locale} basePath={basePath}/></Shell>}
