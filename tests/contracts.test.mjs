import {test} from 'node:test'
import assert from 'node:assert/strict'
import {readFile,readdir} from 'node:fs/promises'
const read=p=>readFile(new URL('../'+p,import.meta.url),'utf8')
test('双语页面注册完整且路由唯一',async()=>{const m=JSON.parse(await read('.tpl/template.json')),pages=m.surfaces[0].pages;assert.equal(pages.length,14);assert.equal(new Set(pages.map(x=>x.slug)).size,pages.length);assert.deepEqual(m.surfaces[0].locales,['zh','en']);for(const p of pages)assert.ok(p.localizedTitles.en)})
test('本地演示表单不外发、不持久化',async()=>{const s=await read('src/features/site-templates/catalog/kelo/components/Shell.tsx');assert.ok(s.includes('reportValidity()'));assert.ok(!/fetch\(|localStorage|sessionStorage/.test(s));assert.ok(s.includes('sent:false,saved:false'))})
test('业务素材本地托管，无装饰箭头',async()=>{async function scan(p){for(const entry of await readdir(new URL('../'+p,import.meta.url),{withFileTypes:true})){const q=p+'/'+entry.name;if(entry.isDirectory())await scan(q);else if(/\.(tsx?|css)$/.test(q)){const s=await read(q);assert.ok(!/cdn\.jiro\.build|i\.pravatar\.cc|google\.com\/s2/.test(s),q);assert.ok(!/[↗↳]/.test(s),q)}}}await scan('src/features/site-templates/catalog/kelo')})

test('运行素材和字体引用全部存在',async()=>{const meta=JSON.parse(await read('.tpl/docs/ASSETS.json'));for(const a of meta.assets){const b=await readFile(new URL('../public/templates/kelo/media/'+a.file,import.meta.url));assert.ok(b.length>0,a.file)}const css=await read('src/features/site-templates/catalog/kelo/theme.css');for(const m of css.matchAll(/url\('([^']+)'\)/g)){assert.ok(m[1].startsWith('/templates/kelo/'),m[1]);await readFile(new URL('../public'+m[1],import.meta.url))}})
