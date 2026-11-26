/* Unwaste Mitra Toko — shared: tema, data, layout, alur verifikasi */
(function(){
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const KEY='unwaste_toko',OKEY='unwaste_orders',SKEY='uw_session';
const IMG={
 "sourdough": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZG2-tV_acp_DPExVW8KGsWOq3hQ8FE1idgJyuGlSJTB8WCJoSVLOk1F1qV2a9cSS4U_KWAAP3bi3HX0p1uVH6dtwnaq1LObPozU_WsyNnrZlt7FjPrsXsFaes2fbYa7uO2JCAp48zSqwg8mOunrTh3QWgkcm6yxxzsyp0qGMTrEapv98IiDMpbU22s_pKAhnYbUicdZcZjirS_25ujJyciI8RNFmfCRxD0t_3aw",
 "croissant": "https://lh3.googleusercontent.com/aida-public/AB6AXuBYsok_m268u3F9lmIEMngHYaI6IfPofD3b0PrCDFE-4oM1mAb9K_agOBaS4BWU0J1TrnviQUBG1k2KVuvTkKyFA341Wlc3JrNWmP2nO0aohaMQ6EfGOqrzLrzzzSGUg3g-geRhybYy-uLu_8kg7LZeL76_ByjWmYFuHOg1tK8DKkdsazWZ-S-jk8mOIJ1u8RxviZZcIlvMRglAlzpUtzsSciJp0MiRSAHzCwJ_XA",
 "box": "https://lh3.googleusercontent.com/aida-public/AB6AXuD9BzkB5gnuCAbK7eOFYD2072iH47DCm74SOLV6tYKlDWcT0p2cK2w3QeCHk-yz6MnTWUZ7hfJHygT0cL8mkI42XcCO-9kJNE_Z2iKHXEBnkLEwEY2ViUxcfzgxRrUGEj53Z59kgjfUO_knrzA8H-tYajWquWxp8goiPmpGC2URgPOc3UON-dOgd8FwvRQBmZ6eCu7ePOvn7ornKVuCLfC-SFcn89YSHUcxJsBQwA",
 "pastry": "https://lh3.googleusercontent.com/aida-public/AB6AXuBCptPP-rb2_jd76BOYdaXw41rDTAuYdtvu4mkuJJa0uluzJb_qci3E1ZoV48oek0hpERPWQCYZCKWtuHMs_w64vVs-A-6Kql7Yo5P8e0LErdozzw77Z4KaDmvCI9Mj-LbjnxWO05ww36fj2w_FsM2YysQiAee-ttnV1Tx1KUKofwB1nvq0c3WJvepApvskE6rVISnxE6ayY9T-dVPNQUNLSRMKp-O5lg_k--HknA",
 "almond": "https://lh3.googleusercontent.com/aida-public/AB6AXuAn2BczttPYQ-jl5lVHPsJ47oLaf99RsIdmn-IvVoq2M32pC9bJq4bvbiQjKKHaOMCdoKKpAWiBaCMbfzI8b1zBygMHTZt1R3hrt6fGMvdkJCJOQuSBuPzRZkec3tBQWit9OXIfPAyL927S9LJXsEg29N1QdFOLPXWiXQ5S0NMsf9PkmmwJnUrkJaXCWeG2_FbUc22iHB6HUwXZVJcBvPd-8LuiaZfphcawKQWZWA",
 "quiche": "https://lh3.googleusercontent.com/aida-public/AB6AXuDhUsC_ANh7GFPbkeKddpOjm_CSZLF_rl5ok2NuIXzqO4lbnS33w-MHyGzkHKAfKxpZCga60_vGQr5lqwqOS2DIONgG_3D4nXtmGCvxTj1plfDFp81CwRkyZh2K65v9KhsBPg-s8NHTNJLYe7G_fsw_4EH9c1tLsi087vhAkMQeU2gP-kDqGQ8bO8EwvRoX7DhxMXZJVaag5r7ngDVuEdjfEqdn6LYFOh0sg9ZiIg",
 "loaf": "https://lh3.googleusercontent.com/aida-public/AB6AXuB47mwtj_AMpPSp8PGxpUuDzQc-M6xw09IipJQg2wLoInJbvKIrW9YAtLyrDUl1em5JVowccBHXUcMNVNezV72S1zu82wRFvCllKqgoFvHiWH3BG2XSol4AEtvYJJY_qgVSbpxaY-eaz6Jb_ghQ7xGpQ343hURJCnw66L4h90B_rx6gdZRXPgeJ3OL-T2lAIRtk7S39_W9Wtxv9Q_qEvhDrVp1AvOUaSHQ9_mYMqw",
 "bag": "https://lh3.googleusercontent.com/aida-public/AB6AXuDgIKufOHP5g0E1iWMwiX1zDnMsDtVA56jOb_ajDxi0FnB6wByftIiF0H2mTZ3v4mYojqNe0ltBQNpciEsRb856BjfHYHvfGkBuz_Gbb2w6VJQaX-eXekAyXv3fylbNZMYDIVuM8EBB72GCU-GlfdZzUa_EI6f5iXXmiAh3XpxCScBZ-L8wCaTxQYuYmAQtGhyrkjbWa-eO2tQPO7WlCM_0NMOaOR_53WxxbsqTNQ",
 "danish": "https://lh3.googleusercontent.com/aida-public/AB6AXuDBzNQoriZeKsICk1pHnIpyCzryXVvl_lJNKTeFTkmZVk6OzoolU--vLvUFNvGz-1dAALfIYlTvUSHp0XbjJkeYICFo5Eq04PS3Y9GaOWMgD9u4Huko57o7NNSWvJH3CEGXF1W5MNHPa5ecXvTp40LNMBrkx6ODZQMRuoFeYsMox_uq_gTGOHsR3zjVVs0Wb90gUmudQ4kk-gRKl1ZZm1TrtqIr7a9UUJXULp_m-A",
 "bento": "https://lh3.googleusercontent.com/aida-public/AB6AXuCPS87wLfYKUtoSs2DKYtKGPftjPxSAG2-3jH8DjriJgc9gWJTl4KVXOVqHXoJ-YjheC07BV0acSTTAAmiPCvngJ5L8FyOaD-UG7-RbvDXYXeojoWS-4TV7KoXq7tc1nWKz0vFw1lagPvxJAalQBQ-bQKgu04m66lpdKDzuGOUeDwBOLCdKQgy8LOlEHC1B_n8x9r6iy_fvPcQSc1IIT_-SyWYuUtwh-KHYOAwdrw"
};
const U=window.UWT={IMG,$,$$};
U.rp=n=>'Rp '+Math.round(n).toLocaleString('id-ID');
U.esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const esc=U.esc,rp=U.rp;
const jget=k=>{try{return JSON.parse(UWMEM.getItem(k)||'null')}catch(e){return null}};
const jset=(k,v)=>{try{UWMEM.setItem(k,JSON.stringify(v))}catch(e){}};

/* ---------- sesi ---------- */
U.session=()=>jget(SKEY);
if(!U.session()||U.session().role!=='toko'){location.replace('../login.html?tab=toko');}
U.logout=()=>{try{UWMEM.removeItem(SKEY)}catch(e){}location.href='../login.html?tab=toko'};

/* ---------- data awal ---------- */
const CO2=0.8;U.CO2=CO2;
const seed=()=>{const n=Date.now(),m=x=>n-x*60000;return{v:2,
 shop:{name:'Bonjour Bakery Kemanggisan',short:'Bonjour Bakery',owner:'Chef Andra Ramadhan',email:'toko@bonjourbakery.id',phone:'0812-3456-7890',address:'Jl. K.H. Syahdan No. 9, Palmerah, Jakarta Barat',open:true,from:'19:30',to:'21:00',closeAt:'21:15',halal:true,bank:'BCA',acc:'8830123456',accName:'PT Bonjour Roti Nusantara',notif:{order:true,stock:true,report:false}},
 listings:[
 {id:'l1',name:'Artisan Pastry & Sourdough Surprise Pack',type:'box',cat:'bakery',orig:50000,price:19000,stock:3,from:'19:30',to:'21:00',status:'aktif',img:IMG.pastry,tags:['halal','gluten','dairy','nutfree'],desc:'Aneka pastry butter & sourdough roll panggang hari ini, dikurasi baker menjelang tutup.'},
 {id:'l2',name:'Duo Almond Croissant Butter Gold',type:'spesifik',cat:'bakery',orig:48000,price:24000,stock:4,from:'20:00',to:'21:30',status:'aktif',img:IMG.almond,tags:['halal','gluten','dairy'],desc:'Dua almond croissant mentega dengan taburan almond panggang.'},
 {id:'l3',name:'Savory Quiche & Cheese Roll Pack',type:'box',cat:'berat',orig:50000,price:22500,stock:7,from:'20:30',to:'22:00',status:'jadwal',publishAt:'19:00',img:IMG.quiche,tags:['halal','gluten','dairy'],desc:'Quiche dan cheese roll gurih, cocok dihangatkan di oven.'},
 {id:'l4',name:'Rustic Country Sourdough Loaf (750g)',type:'spesifik',cat:'bakery',orig:45000,price:20000,stock:0,from:'19:30',to:'21:00',status:'aktif',img:IMG.loaf,tags:['halal','gluten','vegetarian'],desc:'Roti sourdough utuh fermentasi alami 24 jam.'},
 {id:'l5',name:'Surprise Box Roti Manis & Savory (Medium)',type:'box',cat:'bakery',orig:50000,price:25000,stock:3,from:'19:30',to:'21:00',status:'aktif',img:IMG.box,tags:['halal','gluten','dairy'],desc:'Campuran roti manis dan savory pilihan baker.'},
 {id:'l6',name:'Croissant Butter & Choco Danish Duo',type:'spesifik',cat:'bakery',orig:36000,price:18000,stock:0,from:'19:30',to:'21:00',status:'aktif',img:IMG.croissant,tags:['halal','gluten','dairy'],desc:'Croissant butter dan choco danish.'}],
 orders:[
 {code:'UW-4786',buyer:'Rian Pratama',lid:'l5',qty:1,slot:'19:30 - 20:00',pay:'GoPay / OVO / ShopeePay',note:'',status:'Selesai',ts:m(55),doneTs:m(40)},
 {code:'UW-4790',buyer:'Siti Nurhaliza',lid:'l6',qty:2,slot:'19:30 - 20:00',pay:'GoPay / OVO / ShopeePay',note:'',status:'Selesai',ts:m(48),doneTs:m(33)},
 {code:'UW-4793',buyer:'Bima Saputra',lid:'l4',qty:3,slot:'19:30 - 20:00',pay:'QRIS',note:'Tolong dibungkus terpisah ya.',status:'Selesai',ts:m(40),doneTs:m(25)},
 {code:'UW-4799',buyer:'Dewi Lestari',lid:'l2',qty:2,slot:'19:30 - 20:00',pay:'QRIS',note:'',status:'Selesai',ts:m(35),doneTs:m(20)},
 {code:'UW-4812',buyer:'Dimas Wicaksono',lid:'l1',qty:2,slot:'20:00 - 20:30',pay:'Bayar di toko',note:'Siapkan kembalian jika bayar Rp 50.000.',status:'Siap',ts:m(22)},
 {code:'UW-4821',buyer:'Anisa Rahmawati',lid:'l1',qty:1,slot:'19:30 - 20:00',pay:'QRIS',note:'Tolong pisahkan varian isi keju jika memungkinkan. Terima kasih banyak!',status:'Baru',ts:m(14)},
 {code:'UW-4825',buyer:'Rizky Fauzan',lid:'l2',qty:1,slot:'20:00 - 20:30',pay:'GoPay / OVO / ShopeePay',note:'',status:'Baru',ts:m(9)},
 {code:'UW-4830',buyer:'Maya Anggraini',lid:'l5',qty:2,slot:'20:30 - 21:00',pay:'QRIS',note:'',status:'Baru',ts:m(3)},
 {code:'UW-4777',buyer:'Hendra Kusuma',lid:'l1',qty:1,slot:'19:30 - 20:00',pay:'QRIS',note:'',status:'Batal',ts:m(70)}],
 ostate:{},seen:[]}};
let D=jget(KEY);if(!D||D.v!==2){D=seed();}
U.db=()=>D;
U.save=()=>jset(KEY,D);U.save();
U.reset=()=>{D=seed();jset(KEY,D);try{const a=(jget(OKEY)||[]).filter(o=>!isMine(o));jset(OKEY,a)}catch(e){}};

/* ---------- pesanan: gabungan demo + dari aplikasi konsumen ---------- */
const isMine=o=>/bonjour/i.test(o.store||'');
const lmatch=o=>D.listings.find(l=>l.id===o.lid)||D.listings.find(l=>l.name===o.name);
U.listing=id=>D.listings.find(l=>l.id===id);
U.orders=()=>{
 const demo=D.orders.map(o=>{const l=U.listing(o.lid);return{...o,name:l?l.name:'Menu',price:l?l.price:0,orig:l?l.orig:0,img:l?l.img:'',src:'demo'}});
 const app=(jget(OKEY)||[]).filter(isMine).map(o=>{
  const st=o.status==='Selesai'?'Selesai':o.status==='Dibatalkan'?'Batal':(D.ostate[o.id]||'Baru');
  const l=D.listings.find(x=>x.name===o.name);
  return{code:o.id,buyer:'Pelanggan Unwaste',lid:l?l.id:null,name:o.name,qty:o.qty||1,price:o.price,orig:o.orig,slot:o.slot||o.time,pay:o.pay||'',note:'',status:st,ts:o.ts||Date.now(),doneTs:o.doneTs,img:o.img||(l&&l.img)||'',src:'app'}});
 return[...app,...demo].sort((a,b)=>b.ts-a.ts)};
/* pesanan baru dari aplikasi konsumen -> kurangi stok listing yang cocok */
U.sync=()=>{let ch=false;const a=(jget(OKEY)||[]).filter(isMine);
 a.forEach(o=>{if(D.seen.includes(o.id))return;D.seen.push(o.id);ch=true;const l=D.listings.find(x=>x.name===o.name);if(l)l.stock=Math.max(0,l.stock-(o.qty||1))});
 if(ch)U.save();return ch};
U.setStatus=(code,st)=>{
 const o=U.orders().find(x=>x.code===code);if(!o)return;
 if(st==='Batal'&&o.status!=='Batal'){const l=o.lid&&U.listing(o.lid);if(l)l.stock+=o.qty}
 if(o.src==='demo'){const d=D.orders.find(x=>x.code===code);d.status=st;if(st==='Selesai')d.doneTs=Date.now()}
 else{const all=jget(OKEY)||[];const r=all.find(x=>x.id===code);
  if(r){if(st==='Selesai'){r.status='Selesai';r.doneTs=Date.now()}else if(st==='Batal')r.status='Dibatalkan';else D.ostate[code]=st;jset(OKEY,all)}}
 U.save()};
U.lstate=l=>l.status==='draft'?'draft':l.status==='jadwal'?'jadwal':l.stock<=0?'habis':l.status==='jeda'?'jeda':'aktif';
U.sold=l=>U.orders().filter(o=>o.status!=='Batal'&&(o.lid===l.id||(!o.lid&&o.name===l.name))).reduce((a,o)=>a+o.qty,0);
U.pct=l=>Math.round((1-l.price/l.orig)*100);
U.stats=()=>{const os=U.orders(),ok=os.filter(o=>o.status!=='Batal'),done=os.filter(o=>o.status==='Selesai');
 const sum=a=>a.reduce((s,o)=>s+o.price*o.qty,0),por=a=>a.reduce((s,o)=>s+o.qty,0);
 const live=D.listings.filter(l=>!['draft','jadwal'].includes(U.lstate(l)));
 const stock=live.reduce((s,l)=>s+Math.max(0,l.stock),0);
 return{os,ok,done,rev:sum(ok),revDone:sum(done),por:por(ok),porDone:por(done),waiting:os.filter(o=>o.status==='Baru'||o.status==='Siap'),stock,sold:por(ok),co2:por(done)*CO2,saved:ok.reduce((s,o)=>s+(o.orig-o.price)*o.qty,0)}};
U.ago=ts=>{const m=Math.max(0,Math.round((Date.now()-ts)/60000));return m<1?'baru saja':m<60?m+' mnt lalu':Math.round(m/60)+' jam lalu'};
U.hhmm=ts=>new Date(ts).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'}).replace('.',':');
U.payInfo=o=>/toko/i.test(o.pay)?{cod:true,label:'Bayar di Toko',cls:'bg-error-container text-on-error-container'}:{cod:false,label:'Lunas · '+o.pay.split(' /')[0],cls:'bg-surface-container text-on-surface-variant'};

/* ---------- UI dasar ---------- */
U.toast=m=>{let t=$('#uwToast');if(!t){t=document.createElement('div');t.id='uwToast';t.setAttribute('role','status');t.className='fixed left-1/2 -translate-x-1/2 bottom-24 lg:bottom-8 z-[90] bg-text-primary text-white px-4 py-2.5 rounded-xl font-label-md text-label-md shadow-lg transition-opacity opacity-0 pointer-events-none';document.body.appendChild(t)}
 t.textContent=m;t.style.opacity=1;clearTimeout(U.th);U.th=setTimeout(()=>t.style.opacity=0,2600)};
U.modal=(html,wide)=>{U.close();const o=document.createElement('div');o.id='uwModal';o.className='fixed inset-0 z-[80] bg-black/40 flex items-center justify-center p-4';
 o.innerHTML='<div role="dialog" aria-modal="true" class="bg-surface-card rounded-2xl shadow-xl w-full '+(wide?'max-w-lg':'max-w-md')+' max-h-[90vh] overflow-y-auto p-space-lg">'+html+'</div>';
 o.addEventListener('click',e=>{if(e.target===o)U.close()});document.body.appendChild(o);
 const f=$('input,button',o);f&&f.focus&&setTimeout(()=>f.focus(),30);return o};
U.close=()=>{const m=$('#uwModal');m&&m.remove()};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){U.close();const d=$('#notifPanel');d&&d.classList.add('hidden')}});
U.confirm=(title,msg,okLabel,fn,danger)=>{const m=U.modal(`<h2 class="text-headline-sm font-bold mb-1">${title}</h2><p class="text-body-md text-text-muted mb-5">${msg}</p><div class="grid grid-cols-2 gap-2"><button type="button" id="cNo" class="py-3 rounded-xl bg-surface-container text-label-lg font-bold">Batal</button><button type="button" id="cYes" class="py-3 rounded-xl ${danger?'bg-error text-white':'bg-primary text-on-primary'} text-label-lg font-bold">${okLabel}</button></div>`);
 $('#cNo',m).onclick=U.close;$('#cYes',m).onclick=()=>{U.close();fn()}};
U.icon=(n,c)=>`<span class="material-symbols-outlined ${c||''}" aria-hidden="true">${n}</span>`;

/* ---------- verifikasi kode pickup (dipakai Dashboard & Pesanan) ---------- */
U.normCode=v=>{v=String(v||'').toUpperCase().replace(/[^A-Z0-9]/g,'').replace(/^UW/,'');return v?'UW-'+v:''};
U.verify=(raw,expected)=>{
 const code=U.normCode(raw);
 if(!code||code.length<5){U.toast('Masukkan kode reservasi dari aplikasi konsumen');return}
 const o=U.orders().find(x=>x.code===code);
 const head=(ic,cl,t,s)=>`<div class="text-center mb-4"><div class="w-14 h-14 mx-auto rounded-full ${cl} flex items-center justify-center mb-3">${U.icon(ic,'text-[32px]')}</div><h2 class="text-headline-sm font-bold">${t}</h2>${s?`<p class="text-body-md text-text-muted mt-1">${s}</p>`:''}</div>`;
 const close=`<button type="button" id="vOk" class="w-full py-3 rounded-xl bg-surface-container text-label-lg font-bold">Tutup</button>`;
 if(!o){const m=U.modal(head('search_off','bg-error-container text-error','Kode tidak ditemukan','Kode <b>'+esc(code)+'</b> tidak ada di pesanan toko ini. Minta konsumen membuka ulang kode di menu Riwayat Pesanan.')+close);$('#vOk',m).onclick=U.close;return}
 if(expected&&expected!==code){const m=U.modal(head('block','bg-error-container text-error','Kode tidak cocok','Kode yang diketik tidak sama dengan pesanan yang sedang diverifikasi.')+close);$('#vOk',m).onclick=U.close;return}
 if(o.status==='Selesai'){const m=U.modal(head('task_alt','bg-surface-container text-primary','Sudah diambil','Pesanan <b>'+code+'</b> atas nama '+esc(o.buyer)+' sudah diserahkan'+(o.doneTs?' pukul '+U.hhmm(o.doneTs):'')+'.')+close);$('#vOk',m).onclick=U.close;return}
 if(o.status==='Batal'){const m=U.modal(head('cancel','bg-error-container text-error','Pesanan dibatalkan','Pesanan <b>'+code+'</b> sudah dibatalkan. Jangan serahkan paket.')+close);$('#vOk',m).onclick=U.close;return}
 const p=U.payInfo(o),tot=o.price*o.qty;
 const m=U.modal(head('verified','bg-discount-green/10 text-discount-green','Kode valid','Cocokkan data berikut sebelum menyerahkan paket.')+
 `<div class="bg-surface-container-low rounded-xl p-4 mb-4 flex flex-col gap-2 text-body-md">
  <div class="flex justify-between gap-3"><span class="text-text-muted">Kode</span><b class="text-primary tracking-wider">${code}</b></div>
  <div class="flex justify-between gap-3"><span class="text-text-muted">Pembeli</span><b>${esc(o.buyer)}</b></div>
  <div class="flex justify-between gap-3"><span class="text-text-muted">Pesanan</span><b class="text-right">${o.qty}× ${esc(o.name)}</b></div>
  <div class="flex justify-between gap-3"><span class="text-text-muted">Jam ambil</span><b>${esc(o.slot)}</b></div>
  <div class="flex justify-between gap-3"><span class="text-text-muted">Pembayaran</span><b>${p.cod?'Bayar di toko':'Lunas ('+esc(o.pay)+')'}</b></div></div>
  ${p.cod?`<div class="bg-tertiary-fixed text-on-tertiary-fixed rounded-xl p-3 mb-4 text-body-md font-semibold flex items-center gap-2">${U.icon('payments','text-[20px]')}Tagih ${rp(tot)} di kasir sebelum menyerahkan paket.</div>`:''}
  <div class="grid grid-cols-2 gap-2"><button type="button" id="vNo" class="py-3 rounded-xl bg-surface-container text-label-lg font-bold">Batal</button><button type="button" id="vYes" class="py-3 rounded-xl bg-primary text-on-primary text-label-lg font-bold">${p.cod?'Sudah Dibayar & Serahkan':'Serahkan Paket'}</button></div>`);
 $('#vNo',m).onclick=U.close;
 $('#vYes',m).onclick=()=>{U.setStatus(code,'Selesai');U.close();U.toast('Pesanan '+code+' selesai diambil');U.refresh()}};

/* ---------- layout ---------- */
const NAV=[['dashboard','dashboard.html','Dashboard','space_dashboard'],['listing','listing.html','Listing Surplus','inventory_2'],['pesanan','pesanan.html','Pesanan Masuk','receipt_long'],['laporan','laporan.html','Laporan','monitoring'],['profil','profil.html','Profil Toko','storefront']];
U.header=active=>{
 const s=D.shop,st=U.stats(),n=st.waiting.length;
 const nots=[...st.os.filter(o=>o.status==='Baru').slice(0,4).map(o=>({ic:'shopping_bag',t:'Pesanan baru '+o.code,d:o.qty+'× '+o.name+' · '+U.ago(o.ts),h:'pesanan.html?code='+o.code})),
  ...D.listings.filter(l=>U.lstate(l)==='aktif'&&l.stock<=2).map(l=>({ic:'warning',t:'Stok hampir habis',d:l.name+' · sisa '+l.stock+' porsi',h:'listing.html'}))];
 const nav=NAV.map(([k,h,t])=>`<a href="${h}" ${k===active?'aria-current="page"':''} class="relative px-4 py-2 rounded-xl text-label-lg font-semibold whitespace-nowrap transition-colors ${k===active?'bg-primary text-on-primary':'text-on-surface-variant hover:bg-surface-container-low'}">${t}${k==='pesanan'&&n?`<span class="ml-1.5 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-label-sm ${k===active?'bg-white text-primary':'bg-discount-orange text-white'}">${n}</span>`:''}</a>`).join('');
 const bn=NAV.map(([k,h,t,ic])=>`<a href="${h}" ${k===active?'aria-current="page"':''} class="relative flex-1 flex flex-col items-center gap-0.5 py-2 ${k===active?'text-primary':'text-text-muted'}"><span class="material-symbols-outlined text-[24px]" style="${k===active?"font-variation-settings:'FILL' 1":''}">${ic}</span><span class="text-label-sm">${t.split(' ')[0]}</span>${k==='pesanan'&&n?`<span class="absolute top-1 left-1/2 ml-2 min-w-[16px] h-4 px-1 rounded-full bg-discount-orange text-white text-[10px] font-bold flex items-center justify-center">${n}</span>`:''}</a>`).join('');
 return `<header class="fixed top-0 inset-x-0 z-50 bg-surface-card/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,.05)]"><div class="h-16 lg:h-20 max-w-7xl mx-auto px-margin lg:px-margin-lg flex items-center justify-between gap-3">
  <a href="dashboard.html" class="flex items-center gap-2 shrink-0"><span class="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center">${U.icon('eco','text-[20px]')}</span><span class="flex flex-col leading-none"><span class="text-headline-sm font-bold text-primary tracking-tight">Unwaste <span class="align-middle ml-1 text-label-sm bg-sky-blue text-on-primary-fixed px-1.5 py-0.5 rounded-full">MITRA</span></span><span class="hidden sm:block text-label-sm text-text-muted mt-1 truncate max-w-[200px]">${esc(s.name)}</span></span></a>
  <nav class="hidden lg:flex items-center gap-1" aria-label="Menu utama">${nav}</nav>
  <div class="flex items-center gap-2">
   <button type="button" id="openToggle" aria-pressed="${s.open}" title="Klik untuk ${s.open?'menutup':'membuka'} penerimaan pesanan" class="flex items-center gap-2 px-3 py-1.5 rounded-full text-label-md font-semibold ${s.open?'bg-discount-green/10 text-discount-green':'bg-error-container text-on-error-container'}"><span class="w-2 h-2 rounded-full ${s.open?'bg-discount-green':'bg-error'}"></span><span class="hidden sm:inline">${s.open?'Menerima Pesanan':'Toko Tutup'}</span><span class="sm:hidden">${s.open?'Buka':'Tutup'}</span></button>
   <div class="relative"><button type="button" id="notifBtn" aria-label="Notifikasi" class="relative w-10 h-10 rounded-full hover:bg-surface-container-low flex items-center justify-center text-on-surface-variant">${U.icon('notifications')}${nots.length?`<span class="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-discount-orange border-2 border-white"></span>`:''}</button>
    <div id="notifPanel" class="hidden absolute right-0 mt-2 w-80 max-w-[calc(100vw-2rem)] bg-surface-card rounded-2xl shadow-xl border border-border-subtle p-2"><p class="px-3 py-2 text-label-lg font-bold">Notifikasi</p>${nots.length?nots.map(x=>`<a href="${x.h}" class="flex gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-container-low"><span class="w-8 h-8 shrink-0 rounded-full ${x.ic==='warning'?'bg-tertiary-fixed text-tertiary':'bg-sky-blue/50 text-primary'} flex items-center justify-center">${U.icon(x.ic,'text-[18px]')}</span><span class="min-w-0"><b class="block text-label-lg">${esc(x.t)}</b><span class="block text-body-sm text-text-muted truncate">${esc(x.d)}</span></span></a>`).join(''):'<p class="px-3 py-4 text-body-md text-text-muted">Belum ada notifikasi.</p>'}</div></div>
   <div class="relative"><button type="button" id="userBtn" aria-label="Menu akun" class="flex items-center gap-2 pl-1 pr-1 sm:pr-3 py-1 rounded-full hover:bg-surface-container-low"><span class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center">${U.icon('storefront','text-[18px]')}</span><span class="hidden md:flex flex-col text-left leading-tight"><b class="text-label-md">${esc(s.short)}</b><span class="text-label-sm text-text-muted font-normal">Mitra Terverifikasi</span></span></button>
    <div id="userPanel" class="hidden absolute right-0 mt-2 w-56 bg-surface-card rounded-2xl shadow-xl border border-border-subtle p-2"><a href="profil.html" class="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-surface-container-low text-label-lg">${U.icon('storefront','text-[20px]')}Profil Toko</a><a href="../index.html" id="toCons" class="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-surface-container-low text-label-lg">${U.icon('shopping_bag','text-[20px]')}Lihat sisi konsumen</a><button type="button" id="logoutBtn" class="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-error-container text-on-error-container text-label-lg">${U.icon('logout','text-[20px]')}Keluar</button></div></div>
  </div></div></header>
  <nav class="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-surface-card border-t border-border-subtle flex px-1 pb-[env(safe-area-inset-bottom)]" aria-label="Menu bawah">${bn}</nav>`};
U.footer=()=>`<footer class="bg-surface-card border-t border-border-subtle mt-space-xl"><div class="max-w-7xl mx-auto px-margin lg:px-margin-lg py-space-lg flex flex-col sm:flex-row justify-between gap-3 text-body-sm text-text-muted"><span>© 2026 Unwaste Indonesia · Portal Mitra Toko</span><span class="flex gap-5"><a href="#" data-help="Bantuan Mitra" class="hover:text-primary">Bantuan Mitra</a><a href="#" data-help="Standar Mutu Pangan" class="hover:text-primary">Standar Mutu Pangan</a></span></div></footer>`;
U.page=null;
U.refresh=()=>{if(U.page){const y=scrollY;U.mount();scrollTo(0,y)}};
U.mount=()=>{
 $('#hdr').innerHTML=U.header(U.page.active);$('#ftr').innerHTML=U.footer();U.page.render();wire()};
const wire=()=>{
 $('#openToggle').onclick=()=>{D.shop.open=!D.shop.open;U.save();U.toast(D.shop.open?'Toko dibuka — pesanan baru diterima':'Toko ditutup — pesanan baru dihentikan');U.refresh()};
 const pan=(b,p)=>{$(b).onclick=e=>{e.stopPropagation();const x=$(p),o=x.classList.contains('hidden');$$('#notifPanel,#userPanel').forEach(y=>y.classList.add('hidden'));o&&x.classList.remove('hidden')}};
 pan('#notifBtn','#notifPanel');pan('#userBtn','#userPanel');
 $('#logoutBtn').onclick=()=>U.confirm('Keluar dari portal?','Kamu akan kembali ke halaman login.','Keluar',U.logout);
 $('#toCons').onclick=e=>{e.preventDefault();U.confirm('Pindah ke sisi konsumen?','Kamu akan keluar dari akun toko dan kembali ke halaman login untuk masuk sebagai konsumen.','Lanjut',()=>{try{UWMEM.removeItem(SKEY)}catch(x){}location.href='../login.html?tab=konsumen'})};
 $$('[data-help]').forEach(a=>a.onclick=e=>{e.preventDefault();U.modal(`<h2 class="text-headline-sm font-bold mb-2">${a.dataset.help}</h2><p class="text-body-md text-text-muted mb-4">${a.dataset.help==='Bantuan Mitra'?'Hubungi tim Unwaste Mitra lewat WhatsApp 0811-0000-1234 (08.00–22.00) atau email mitra@unwaste.id.':'Pastikan makanan surplus dikemas higienis, diberi label alergen, dan disarankan dikonsumsi pada hari yang sama. Makanan yang sudah basi atau berbau tidak boleh dilisting.'}</p><button type="button" id="hOk" class="w-full py-3 rounded-xl bg-primary text-on-primary text-label-lg font-bold">Mengerti</button>`);$('#hOk').onclick=U.close});
 U.page.after&&U.page.after()};
document.addEventListener('click',e=>{if(!e.target.closest('#notifPanel,#notifBtn,#userPanel,#userBtn'))$$('#notifPanel,#userPanel').forEach(y=>y.classList.add('hidden'))});
U.boot=p=>{U.page=p;U.sync();
 const go=()=>{document.body.className='bg-surface font-body-md text-on-surface antialiased pb-20 lg:pb-0';
  document.body.insertAdjacentHTML('afterbegin','<div id="hdr"></div>');document.body.insertAdjacentHTML('beforeend','<div id="ftr"></div>');
  const mn=$('main');mn.className='max-w-7xl mx-auto px-margin lg:px-margin-lg pt-24 lg:pt-28 min-h-[70vh]';U.mount()};
 document.readyState==='loading'?document.addEventListener('DOMContentLoaded',go):go();
 window.addEventListener('storage',e=>{if(e.key===OKEY||e.key===KEY){D=jget(KEY)||D;U.sync();if(!$('#uwModal')&&!(document.activeElement&&/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)))U.refresh()}})};
/* kartu stat */
U.stat=(ic,label,val,sub,tone)=>`<div class="bg-surface-card rounded-2xl p-4 lg:p-5 shadow-[0_1px_8px_rgba(0,0,0,.04)] flex items-start justify-between gap-3"><div class="min-w-0"><p class="text-label-md text-text-muted uppercase tracking-wide">${label}</p><p class="text-headline-md font-bold mt-1 ${tone||'text-on-surface'}">${val}</p>${sub?`<p class="text-body-sm text-text-muted mt-1">${sub}</p>`:''}</div><span class="w-10 h-10 shrink-0 rounded-xl bg-sky-blue/50 text-primary flex items-center justify-center">${U.icon(ic,'text-[22px]')}</span></div>`;
U.statusChip=st=>({Baru:['Perlu Disiapkan','bg-tertiary-fixed text-tertiary'],Siap:['Siap Diambil','bg-sky-blue/60 text-on-primary-fixed'],Selesai:['Selesai Diambil','bg-discount-green/10 text-discount-green'],Batal:['Dibatalkan','bg-error-container text-on-error-container']}[st]);
})();
