# Run against a fresh build and running preview. Requires agent-browser.
# Start an isolated ass2-audit browser first (in this VM: --args --no-sandbox).
# Override AUDIT_BASE_URL if the preview port/base differs.
import subprocess,json,pathlib,os
root=pathlib.Path(__file__).resolve().parents[2]
base=os.environ.get('AUDIT_BASE_URL','http://127.0.0.1:4341/comp4020-ass2-am167/')
def ab(*args):
 p=subprocess.run(['agent-browser','--session','ass2-audit',*args],text=True,capture_output=True,timeout=40)
 if p.returncode: raise RuntimeError(p.stderr+p.stdout)
 return p.stdout
routes=sorted([str(p.relative_to(root/'dist')).replace('index.html','') for p in (root/'dist').rglob('*.html')])
metrics=[]
js='''(async()=>{await document.fonts.ready;let main=document.querySelector('main')||document.body;return {url:location.href,title:document.title,width:innerWidth,height:innerHeight,scrollWidth:document.documentElement.scrollWidth,brokenImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),outliers:[...main.querySelectorAll('h1,h2,h3,p,table,figure,li')].filter(e=>{let r=e.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+2||r.left < -2)}).slice(0,12).map(e=>({tag:e.tagName,text:e.innerText.slice(0,70),rect:e.getBoundingClientRect().toJSON()}))}})()'''
deckjs='''(async()=>{await document.fonts.ready;let out=[];let ss=[...document.querySelectorAll('.slides>section')];for(let i=0;i<ss.length;i++){location.hash='/'+(i+1);await new Promise(r=>setTimeout(r,60));let s=document.querySelector('.slides>section.present');if(!s)continue;let b=s.getBoundingClientRect();let text=[...s.querySelectorAll('h1,h2,h3,p,li,td,th,figure')].filter(e=>!e.closest('aside'));out.push({slide:i+1,title:s.querySelector('h1,h2')?.innerText,box:b.toJSON(),minTextPx:Math.min(...text.filter(e=>e.innerText?.trim()).map(e=>parseFloat(getComputedStyle(e).fontSize)*b.width/s.offsetWidth)),clipped:text.filter(e=>{let r=e.getBoundingClientRect();return r.width>0&&(r.bottom>b.bottom+2||r.right>b.right+2||r.left<b.left-2||r.top<b.top-2)}).map(e=>({tag:e.tagName,text:e.innerText?.slice(0,70),rect:e.getBoundingClientRect().toJSON()}))});}return out})()'''
for w,h in [(390,844),(1920,1080)]:
 ab('set','viewport',str(w),str(h))
 for route in routes:
  ab('open',base+route)
  data=json.loads(ab('eval',js))
  if route.startswith('decks/'):
   data['slides']=json.loads(ab('eval',deckjs))
  metrics.append(data)
  print(w,route,'overflow',data['scrollWidth']>w,'slides',len(data.get('slides',[])),flush=True)
  (root/'notes/audit-evidence/browser-metrics.json').write_text(json.dumps(metrics,indent=2))
print(ab('errors'))
