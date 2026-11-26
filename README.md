# Unwaste

Prototipe web **Unwaste**: platform penyelamat makanan surplus (*Save food, save money*).
Situs statis (HTML + Tailwind CDN + JavaScript biasa), tanpa build step.

## Halaman

| Sisi | File |
|------|------|
| Konsumen | `index.html`, `detail.html`, `random-pick.html`, `surprise-box.html`, `riwayat.html`, `login.html` |
| Mitra toko | `toko/dashboard.html`, `toko/listing.html`, `toko/pesanan.html`, `toko/laporan.html`, `toko/profil.html` |

## Struktur

```
.
├── index.html ... (halaman konsumen)
├── toko/            halaman mitra + shared.js
├── assets/          tailwind-config.js, uw-common.js, nav-highlight.js, static-shim.js, logo
├── vercel.json
└── README.md
```

## Jalankan lokal

Cukup buka `index.html` di browser, atau jalankan server statis:

```bash
npx serve .
```

## Deploy ke Vercel

1. Push proyek ke GitHub (lihat perintah di bawah).
2. Buka [vercel.com/new](https://vercel.com/new), pilih **Import** repo ini.
3. Biarkan pengaturan default: **Framework Preset: Other**, Build Command kosong, Output Directory kosong (root).
4. Klik **Deploy**. Setiap `git push` ke `main` akan otomatis deploy ulang.

```bash
git init
git add .
git commit -m "Initial commit: Unwaste"
git branch -M main
git remote add origin https://github.com/USERNAME/unwaste.git
git push -u origin main
```

## Catatan

- Butuh internet untuk Tailwind (CDN), Google Fonts, dan gambar.
- Data bersifat demo: `assets/static-shim.js` menyimpan data di memori, jadi tidak tersimpan antar halaman/refresh.
- Jangan aktifkan `cleanUrls` di Vercel; navigasi dan penanda menu aktif memakai nama file `.html`.
