export const route=(basePath:string,slug='')=>`${basePath}${slug?'/'+slug:''}`||'/'
