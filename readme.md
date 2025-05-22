# SYSTAMA

Project ini merupakan sistem informasi akademik (SIAKAD) yang terdiri dari dua bagian utama:

- **Frontend** (`fe-siakad`)
- **Backend** (`be-siakad`)

Script yang tersedia di `package.json` membantu menginstal dependensi dan menjalankan kedua bagian aplikasi secara bersamaan.

## Struktur Proyek

```
uts-siakad/
├── fe-siakad/       # Frontend 
├── be-siakad/       # Backend 
├── package.json     # Script instalasi dan startup gabungan
├── README.md        # Panduan penggunaan proyek
```

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

- **Node.js** (disarankan versi LTS)
- **npm** (biasanya sudah termasuk dalam Node.js)

## Instalasi

Jalankan perintah ini terlebih dahulu ( untuk menginstall concurrently )

```bash
npm install
```

Untuk menginstal semua dependensi frontend dan backend, cukup jalankan perintah berikut:

```bash
npm run install-app
```

## Menjalankan Aplikasi

Untuk menjalankan frontend dan backend secara bersamaan dalam mode development:

```bash
npm run dev
```

## Mengakses Aplikasi 

silahkan kunjugi `http://localhost:5173`

## Author

Mochamad Rasyad - 230631013

---
