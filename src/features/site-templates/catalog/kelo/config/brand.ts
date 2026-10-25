export type Locale = 'zh' | 'en'
export type Bilingual = Record<Locale, string>
export const brand = {name:{zh:'Kelo',en:'Kelo'},logo:'/templates/kelo/media/logo-mark.svg',year:2026}
export const asset = (name:string) => `/templates/kelo/media/${name}`
export const text = (zh:string,en:string):Bilingual => ({zh,en})
