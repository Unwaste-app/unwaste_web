/* Unwaste (konsumen) - fungsi bersama: UW.orders, UW.toast, UW.modal, dll */
(function(){
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const rp=n=>'Rp '+Math.round(n).toLocaleString('id-ID');
window.UW={rp};
const page=(location.pathname.split('/').pop()||'index.html');
UW.orders=()=>{try{return JSON.parse(UWMEM.getItem('unwaste_orders')||'[]')}catch(e){return[]}};
UW.save=a=>{try{UWMEM.setItem('unwaste_orders',JSON.stringify(a))}catch(e){}};
UW.toast=m=>{let t=$('#uwToast');if(!t){t=document.createElement('div');t.id='uwToast';t.className='fixed left-1/2 -translate-x-1/2 bottom-24 xl:bottom-8 z-[80] bg-text-primary text-white px-4 py-2.5 rounded-xl font-label-md text-label-md shadow-lg transition-opacity opacity-0 pointer-events-none';document.body.appendChild(t)}
 t.textContent=m;t.style.opacity=1;clearTimeout(UW.th);UW.th=setTimeout(()=>t.style.opacity=0,2400)};
UW.modal=html=>{UW.close();const o=document.createElement('div');o.id='uwModal';o.className='fixed inset-0 z-[70] bg-black/40 flex items-center justify-center p-4';
 o.innerHTML='<div role="dialog" aria-modal="true" class="bg-surface-card rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto p-space-lg">'+html+'</div>';
 o.addEventListener('click',e=>{if(e.target===o)UW.close()});document.body.appendChild(o);return o};
UW.close=()=>{const m=$('#uwModal');m&&m.remove()};
document.addEventListener('keydown',e=>{if(e.key==='Escape')UW.close()});
const slots=t=>{const m=t.match(/(\d\d):(\d\d)\D+(\d\d):(\d\d)/);if(!m)return[t];let a=+m[1]*60+ +m[2];const z=+m[3]*60+ +m[4],o=[];const f=x=>String(Math.floor(x/60)).padStart(2,'0')+':'+String(x%60).padStart(2,'0');while(a<z&&o.length<4){const b=Math.min(a+30,z);o.push(f(a)+' - '+f(b));a=b}return o};
/* konfirmasi pesanan -> simpan -> kode */
UW.order=function(o){
 o.qty=o.qty||1;const sl=slots(o.time);
 const pays=[['QRIS','Scan QRIS saat bayar'],['GoPay / OVO / ShopeePay','Dompet digital'],['Bayar di toko','Tunai atau QRIS saat ambil']];
 const m=UW.modal(`<h2 class="font-headline-sm text-headline-sm font-bold mb-1">Konfirmasi pesanan</h2>
 <p class="font-body-sm text-body-sm text-text-muted mb-4">${o.qty}× ${o.name} · ${o.store}</p>
 ${o.note?`<div class="bg-tertiary-fixed text-on-tertiary-fixed rounded-xl p-3 mb-4 font-body-sm text-body-sm">${o.note}</div>`:''}
 <p class="font-label-md text-label-md font-bold mb-2">Jam ambil hari ini</p>
 <div class="grid grid-cols-2 gap-2 mb-4">${sl.map((s,i)=>`<label class="cursor-pointer"><input type="radio" name="uwSlot" value="${s}" class="peer sr-only" ${i?'':'checked'}><span class="block text-center py-2 rounded-lg border border-border-subtle font-label-md text-label-md peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary peer-focus-visible:ring-2 ring-sky-blue">${s}</span></label>`).join('')}</div>
 <p class="font-label-md text-label-md font-bold mb-2">Pembayaran</p>
 <div class="flex flex-col gap-2 mb-4">${pays.map((p,i)=>`<label class="cursor-pointer"><input type="radio" name="uwPay" value="${p[0]}" class="peer sr-only" ${i?'':'checked'}><span class="block px-3 py-2 rounded-lg border border-border-subtle peer-checked:border-primary peer-checked:bg-surface-container-low peer-focus-visible:ring-2 ring-sky-blue"><b class="font-label-md text-label-md">${p[0]}</b><span class="block font-body-sm text-body-sm text-text-muted">${p[1]}</span></span></label>`).join('')}</div>
 <div class="flex justify-between font-body-md text-body-md mb-1"><span class="text-text-muted">Kamu hemat</span><b class="text-discount-green">${rp((o.orig-o.price)*o.qty)}</b></div>
 <div class="flex justify-between font-title-sm text-title-sm font-bold mb-4"><span>Total</span><span class="text-primary">${rp(o.price*o.qty)}</span></div>
 <div class="grid grid-cols-2 gap-2"><button type="button" id="uwNo" class="py-3 rounded-xl bg-surface-container font-label-lg text-label-lg font-bold">Batal</button><button type="button" id="uwYes" class="py-3 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold">Bayar &amp; selamatkan</button></div>`);
 $('#uwNo',m).onclick=UW.close;
 $('#uwYes',m).onclick=()=>{
  const code='UW-'+Math.random().toString(36).slice(2,6).toUpperCase();
  const rec=Object.assign({},o,{id:code,slot:$('[name=uwSlot]:checked',m).value,pay:$('[name=uwPay]:checked',m).value,status:'Aktif',ts:Date.now()});
  const a=UW.orders();a.unshift(rec);UW.save(a);
  UW.modal(`<div class="text-center"><div class="w-16 h-16 mx-auto rounded-full bg-discount-green/10 text-discount-green flex items-center justify-center mb-3"><span class="material-symbols-outlined text-[36px]">check_circle</span></div>
  <h2 class="font-headline-sm text-headline-sm font-bold">Pesanan berhasil!</h2>
  <p class="font-body-sm text-body-sm text-text-muted mt-1">Ambil di ${o.store} hari ini, ${rec.slot}.</p>
  <div class="bg-surface-container-low rounded-xl p-4 my-4"><span class="font-label-sm text-label-sm text-text-muted block">Kode pesanan</span><span class="font-display-lg text-headline-lg font-extrabold text-primary tracking-widest">${code}</span><span class="font-body-sm text-body-sm text-text-muted block mt-1">Tunjukkan ke kasir saat mengambil</span></div>
  <a href="riwayat.html" class="block py-3 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold mb-2">Lihat pesanan saya</a>
  <button type="button" id="uwOk" class="w-full py-3 rounded-xl bg-surface-container font-label-lg text-label-lg font-bold">Lanjut jelajah</button></div>`);
  $('#uwOk').onclick=()=>{UW.close();location.href='index.html'};
 };
};
/* header: CO2 nyata, pencarian, tautan mati */
const done=UW.orders().filter(o=>o.status==='Selesai');
const co2=done.reduce((a,o)=>a+(o.co2||0.8)*o.qty,0);
$$('header span').forEach(s=>{if(/CO2e/.test(s.textContent)&&!s.children.length)s.textContent='🌱 '+co2.toFixed(1).replace('.',',')+' kg CO2e'});
const hs=$('header input[type=text]');
if(hs){hs.setAttribute('aria-label','Cari menu atau toko');hs.addEventListener('keydown',e=>{if(e.key==='Enter'&&page!=='index.html'&&page!==''){location.href='index.html?q='+encodeURIComponent(hs.value)}})}
$$('button').forEach(b=>{if(/Bagikan/.test(b.textContent)&&!b.id)b.addEventListener('click',()=>{try{navigator.clipboard.writeText(location.href)}catch(e){}UW.toast('Tautan disalin')});if(/Simpan Menu/.test(b.textContent))b.remove()});
document.addEventListener('click',e=>{const a=e.target.closest('a[href="#"]');if(a){e.preventDefault();UW.toast('Halaman ini belum tersedia di prototipe')}});
})();
