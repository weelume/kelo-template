'use client'
import {createContext,useContext,type ReactNode} from 'react'
import {brand,type Bilingual} from './config/brand'
export interface KeloHostConfig {brandName:Bilingual;logo?:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:Bilingual;marketplaceAriaLabel?:Bilingual;filing?:ReactNode}
const Context=createContext<KeloHostConfig>({brandName:brand.name,logo:brand.logo,lightLogo:brand.logo})
export function KeloHostProvider({children,...config}:KeloHostConfig&{children:ReactNode}){return <Context.Provider value={config}>{children}</Context.Provider>}
export const useKeloHost=()=>useContext(Context)
