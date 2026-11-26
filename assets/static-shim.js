/* Unwaste (versi statis): pengganti localStorage di memori + sesi demo otomatis.
   Tidak ada data yang tersimpan; setiap halaman dibuka dengan data contoh yang sama. */
(function(){
  var isToko=/\/toko\//.test(location.pathname);
  var isLogin=/login\.html$/.test(location.pathname);
  var m={};
  window.UWMEM={
    getItem:function(k){return Object.prototype.hasOwnProperty.call(m,k)?m[k]:null},
    setItem:function(k,v){m[k]=String(v)},
    removeItem:function(k){delete m[k]}
  };
  if(isLogin) return;
  if(isToko){
    m.uw_session=JSON.stringify({role:'toko',name:'Bonjour Bakery Kemanggisan',id:'toko@bonjourbakery.id'});
  }else{
    m.uw_session=JSON.stringify({role:'konsumen',name:'pengguna',id:'pengguna@gmail.com'});
    var n=Date.now(),mn=function(x){return n-x*60000},S='Bonjour Bakery Kemanggisan';
    m.unwaste_orders=JSON.stringify([
      {id:'UW-A7K2',name:'Artisan Pastry & Sourdough Surprise Pack',qty:1,price:19000,orig:50000,store:S,slot:'19:30 - 20:00',pay:'QRIS',status:'Aktif',ts:mn(12)},
      {id:'UW-3MQ9',name:'Duo Almond Croissant Butter Gold',qty:2,price:24000,orig:48000,store:S,slot:'19:30 - 20:00',pay:'GoPay / OVO / ShopeePay',status:'Selesai',ts:mn(1500),doneTs:mn(1440),co2:0.8},
      {id:'UW-X5D1',name:'Croissant Butter & Choco Danish Duo',qty:1,price:18000,orig:36000,store:S,slot:'20:00 - 20:30',pay:'Bayar di toko',status:'Selesai',ts:mn(4400),doneTs:mn(4380),co2:0.8},
      {id:'UW-9PB4',name:'Surprise Box Roti Manis & Savory (Medium)',qty:1,price:25000,orig:50000,store:S,slot:'20:30 - 21:00',pay:'QRIS',status:'Dibatalkan',ts:mn(6000)}
    ]);
  }
})();
