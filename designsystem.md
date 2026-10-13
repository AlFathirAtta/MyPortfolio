# Design System
## Website Portofolio — Muhammad Al Fathir Attaullah

**Versi:** 2.0 — menambahkan sistem animasi scroll (parallax & 3D) di atas fondasi v1.0
**Konsep:** *Blueprint* — bahasa visual cetak-biru teknik/arsitektur, diterjemahkan ke web, kini dengan lapisan gerak saat scroll.

---

## 0. Tentang Revisi Ini & Referensi

Versi 1.0 sengaja membatasi motion ke satu momen di Hero. Di versi ini kamu minta animasi scroll (parallax/3D) ditambahkan — jadi sistem motion diperluas, tapi **tetap dipetakan ke konsep blueprint**, bukan efek scroll generik yang bisa dipasang di situs apa saja.

Sebagai riset pembanding, saya meninjau pola-pola populer di [21st.dev](https://21st.dev) (direktori komponen React/Tailwind untuk situs personal/portofolio). Pola yang sering dipakai di sana: teks hero yang muncul bertahap (staggered reveal), avatar/elemen dengan animasi masuk halus, indikator scroll, efek glassmorphism, dan latar gradient/partikel bergerak. Beberapa dari itu justru contoh persis "AI slop" yang ingin dihindari (gradient partikel generik, glow di background, deskripsi "breathtaking... goes viral"). Yang saya ambil dari referensi tersebut **hanya pola interaksinya** (staggered reveal, scroll-linked motion, tilt 3D on hover) — lalu diterapkan dengan bahasa visual blueprint milikmu sendiri, bukan gradient/glow generiknya.

---

## 1. Rasional Konsep

Fathir adalah Front End Developer — orang yang **merancang dan membangun** antarmuka. Ia juga terbiasa menyusun rencana teknis di lapangan (rundown OSIS, manajemen risiko event). Konsep *blueprint* (gambar cetak-biru teknik) dipilih karena tiga alasan konkret, bukan sekadar "biru itu warna teknologi":

1. Biru muda yang kamu sukai **secara harfiah adalah warna kertas cetak-biru** (blueprint) — jadi warna favoritmu justru jadi dasar konsep, bukan ditempel di atas template generik.
2. Blueprint = rencana yang dibangun jadi sesuatu yang nyata. Itu metafora yang pas untuk portofolio: menunjukkan proses merancang → membangun.
3. Elemen khas gambar teknik — garis grid, tanda ukur (dimension line), *title block*, *legend*, tabel revisi — punya fungsi asli yang bisa dipetakan langsung ke kebutuhan konten portofolio (lihat Bagian 5), bukan dekorasi kosong.

**Yang dihindari secara sadar:** kartu seragam dengan radius & shadow yang sama untuk semua elemen (kit "SaaS card"), label ALL-CAPS bertaburan, tombol dengan tanda panah "→" di akhir, meta-text yang disambung titik tengah ("A · B · C"), serta latar gelap + satu aksen neon generik. Elemen teknik di sistem ini (nomor sheet, tabel revisi) dipakai **karena kontennya memang berurutan/historis** — bukan ditempel sebagai gaya.

---

## 2. Palet Warna

| Token | Hex | Peran |
|---|---|---|
| `--paper` | `#EAF3FB` | Latar utama — "kertas" cetak-biru, sangat muda |
| `--paper-alt` | `#F5FAFD` | Latar section alternatif / card, sedikit lebih terang dari paper |
| `--grid-line` | `#C6DCEE` | Garis grid halus, border tipis, dimension line |
| `--ink` | `#0F2B46` | Warna teks utama & garis gambar — navy gelap (bukan hitam pekat) |
| `--blue-primary` | `#1D5D9B` | Warna "tinta" utama — heading besar, ikon, garis penekanan |
| `--blue-bright` | `#4FA6E8` | Aksen interaktif — link, tombol, hover state, elemen fokus |
| `--amber-seal` | `#D98E2E` | Aksen tunggal non-biru — khusus untuk *stamp* prestasi/achievement (lihat 5.5) |

**Aturan pemakaian:**
- `--paper` & `--paper-alt` mendominasi (≥ 70% area) — kesan bersih seperti kertas gambar, bukan gelap.
- `--blue-primary` untuk elemen yang butuh bobot visual (judul, garis besar, ikon utama).
- `--blue-bright` **hanya** untuk elemen yang bisa diklik/interaktif — supaya warna itu langsung berarti "ini bisa disentuh".
- `--amber-seal` sengaja **satu-satunya warna non-biru**, dan hanya dipakai di elemen *stamp* prestasi. Ini membuat pencapaian (lomba, juara) langsung menonjol tanpa perlu banyak warna lain.
- Jangan pernah pakai hitam murni `#000000` atau putih murni `#FFFFFF` — selalu lewat token di atas agar nuansa "kertas biru" konsisten.

---

## 3. Tipografi

| Peran | Typeface | Alasan |
|---|---|---|
| Headline / Display | **Space Grotesk** | Bentuk huruf geometris-teknikal, terasa seperti label pada alat ukur/instrumen — cocok dengan nuansa blueprint tanpa harus pakai monospace di semua tempat |
| Body text | **IBM Plex Sans** | Berasal dari keluarga font dokumentasi teknis (IBM Plex) — netral, sangat terbaca, senada dengan Space Grotesk tanpa bentrok |
| Label teknis (tag skill, tanggal, kode) | **IBM Plex Mono** | Dipakai **fungsional saja** — untuk hal yang secara konten memang "data teknis" (stack, tanggal, koordinat sheet), bukan untuk mempercantik label sembarangan |

**Skala tipografi** (basis 16px, rasio ~1.25):
- H1 / Hero: 56px / 64px (mobile: 34px / 40px), Space Grotesk Medium
- H2 / Judul Section: 34px / 40px, Space Grotesk Medium
- H3 / Judul Card: 20px, Space Grotesk Medium
- Body: 16px / 26px, IBM Plex Sans Regular
- Small / Caption: 13px / 18px, IBM Plex Sans Regular
- Mono label: 12px, IBM Plex Mono Regular, letter-spacing 0.02em

**Aturan:**
- Lebar baris body maksimal ±72 karakter.
- Judul ditulis sentence case (huruf besar hanya di awal kalimat), **bukan ALL CAPS** — keterbacaan lebih tinggi dan lebih senada dengan gaya dokumentasi teknis modern daripada plakat.
- Jangan menonjolkan satu kata dalam headline dengan italic/warna berbeda — biarkan seluruh kalimat headline berbobot sama; hierarki dibangun lewat ukuran antar level, bukan penekanan di dalam satu kalimat.

---

## 4. Layout & Grid

**Alignment:** left-aligned untuk hampir semua teks (mengikuti konvensi lembar gambar teknik yang dibaca dari title block kiri-bawah/kiri-atas). Elemen numerik (nomor sheet, tanggal) boleh rata kanan sebagai penanda "meta info".

**Grid dasar:** 12 kolom, max-width konten 1140px, gutter 24px. Container dibungkus garis tipis `--grid-line` di kiri-kanan pada breakpoint desktop — meniru garis tepi kertas gambar teknik (bukan garis dekoratif acak).

**Konsep "Sheet":** Setiap section utama diperlakukan seperti satu lembar gambar teknik ("Sheet"), diberi nomor kecil di pojok kanan atas section menggunakan mono label — ini sah dipakai karena section-section portofolio memang berurutan sebagai halaman/bagian dokumen:

```
Sheet 01 — Beranda
Sheet 02 — Tentang
Sheet 03 — Keahlian
Sheet 04 — Proyek
Sheet 05 — Organisasi & Prestasi
Sheet 06 — Kontak
```

**Wireframe ASCII — Hero (Sheet 01):**
```
┌──────────────────────────────────────────────┐ Sheet 01
│ + REGISTRASI                       Sheet 01 +│
│                                                │
│  Muhammad Al Fathir Attaullah                 │
│  Front End Developer                          │
│  ────────────────────────────                 │
│  [ deskripsi singkat 2 baris ]                │
│                                                │
│  [ Lihat Proyek ]   [ Unduh CV ]              │
│                                                │
│  gh · in · email   (ikon kecil, kiri bawah)   │
│ +                                           + │
└──────────────────────────────────────────────┘
```
Tanda `+` di keempat pojok adalah *registration mark* (tanda pendaftaran cetak) — elemen kecil khas dokumen teknik, dipakai konsisten di setiap Sheet sebagai penanda batas section, bukan hiasan acak.

**Wireframe ASCII — Proyek (Sheet 04), 2 kolom di desktop:**
```
┌─ Proyek ──────────────────────────── Sheet 04 ┐
│ ┌───────────────────┐  ┌───────────────────┐  │
│ │ [thumb screenshot] │  │ [thumb screenshot] │  │
│ │ NEONRENT           │  │ SITU               │  │
│ │ Front End Dev.     │  │ Front End Dev.     │  │
│ │ html · css · js    │  │ html · css · js    │  │
│ │ ↳ lihat detail     │  │ ↳ lihat detail     │  │
│ └───────────────────┘  └───────────────────┘  │
└────────────────────────────────────────────────┘
```

---

## 5. Komponen

### 5.1 Tombol (Button)
- **Primary:** latar `--blue-bright`, teks `--paper` (putih-kebiruan), radius 4px (tegas, bukan pil bulat penuh), border none. Teks aksi langsung: "Lihat Proyek", "Unduh CV" — tanpa panah tambahan di akhir teks.
- **Secondary:** transparan, border 1.5px `--blue-primary`, teks `--blue-primary`. Hover: latar berubah ke `--paper-alt` + border jadi `--blue-bright`.
- Fokus keyboard: outline 2px `--amber-seal` offset 2px (kontras jelas terhadap dominasi biru).

### 5.2 Kartu Proyek (Project Card)
Bukan kartu seragam bershadow sama rata. Setiap kartu punya "title block" kecil di pojok kiri atas (meniru title block gambar teknik): nama proyek + peran, lalu screenshot, lalu baris tag stack dalam mono label.
- Border: 1px solid `--grid-line`, radius 4px (konsisten kecil — gambar teknik tidak pakai sudut sangat membulat).
- Tanpa drop-shadow lembut generik; sebagai gantinya, saat hover, border berubah warna ke `--blue-bright` dan muncul tanda `+` kecil di pojok kanan bawah (bukan card terangkat/lift).

### 5.3 Legend Keahlian (Skills)
Alih-alih progress bar generik, keahlian ditampilkan sebagai **legenda** — seperti legenda simbol pada peta/gambar teknik: simbol garis kecil + nama skill, dikelompokkan dua kolom (Technical / Soft Skills).
```
── Front End Development (HTML, CSS, JS)
── Back End Development (Basic)
── Git & GitHub
```
Panjang garis di depan tiap item boleh sedikit bervariasi merepresentasikan tingkat familiaritas — cara halus menunjukkan penekanan tanpa perlu bar persentase yang terkesan mengklaim angka pasti.

### 5.4 Tabel Revisi — Pengalaman Organisasi
Konsep "revision table" pada title block gambar teknik (mencatat riwayat perubahan rancangan) dipetakan langsung ke riwayat kepemimpinan Fathir — pemetaan yang sah karena kontennya memang riwayat berjenjang waktu:

| Rev. | Periode | Peran | Ringkasan |
|---|---|---|---|
| 01 | 2024–2026 | Koordinator Sie 5, OSIS | Ketua Pelaksana Open Recruitment, 100+ pendaftar |
| 02 | 2026–2027 | Ketua Komunitas, Mokleters | Memimpin 90+ anggota; Best Supporter Juara 5 DBL Malang |

Ditampilkan sebagai tabel bergaris tipis `--grid-line`, bukan card terpisah — memperkuat kesan dokumen teknik yang koheren.

### 5.5 Stamp Prestasi (Achievements)
Satu-satunya tempat warna `--amber-seal` muncul: setiap prestasi ditampilkan sebagai lencana bulat kecil bergaya "cap disetujui" (approved stamp) dengan border ganda tipis, tahun di tengah, judul lomba di bawahnya. Disusun sebagai grid 2–4 kolom, bukan list teks biasa — memberi bobot visual yang pantas untuk pencapaian tanpa mengubah keseluruhan palet jadi ramai.

### 5.6 Navigasi
Nav bar tipis, latar `--paper-alt`, garis bawah 1px `--grid-line`. Item aktif ditandai garis bawah 2px `--blue-bright` (bukan latar belakang penuh) — konsisten dengan bahasa "garis" di seluruh sistem.

---

## 6. Motion & Animasi Scroll

Prinsip dasar tetap sama: **satu bahasa gerak, bukan efek acak di tiap section.** Semua motion di bawah ini merepresentasikan satu ide: pengunjung sedang "membuka gulungan lembar blueprint" satu per satu saat scroll ke bawah — bukan sekadar elemen yang fade-in muncul random.

### 6.1 Transisi Antar-Sheet (Parallax)
Tiap section ("Sheet") punya 3 lapisan kecepatan scroll berbeda (parallax), semuanya elemen yang sudah ada di sistem — bukan elemen dekorasi baru:
- **Lapisan belakang** (paling lambat, ~0.3x kecepatan scroll): garis grid halus `--grid-line`.
- **Lapisan tengah** (~0.6x): tanda registrasi `+` di pojok, nomor Sheet.
- **Lapisan depan** (1x, normal): konten utama (teks, gambar, tombol).

Efeknya: saat scroll, garis grid & tanda pojok terasa "diam di tempatnya" sedikit lebih lama dibanding konten yang lewat di depannya — seperti melihat kertas kalkir bergerak di atas kertas gambar. Jangan menambah lapisan ke-4/ke-5; tiga sudah cukup untuk membaca kedalaman tanpa terasa berlebihan.

### 6.2 Reveal Konten per Sheet (bukan fade generik)
Alih-alih fade-and-slide-up standar, tiap Sheet "digambar" masuk mengikuti urutan alami membaca gambar teknik: **garis tepi/border section muncul dulu** (digambar dari kiri-atas ke kanan-bawah, ~400ms), baru kemudian isi konten muncul (~150ms setelah garis selesai, fade sederhana tanpa slide jauh — cukup 8px).
- Trigger: elemen masuk ke viewport ±20% (scroll-triggered, sekali saja per elemen — tidak berulang tiap kali discroll bolak-balik).
- Ini menggantikan "fade-slide-up di setiap card" yang generik: di sini yang bergerak adalah *garis Sheet*-nya sebagai satu kesatuan, isi di dalamnya menyusul secara halus.

### 6.3 Tilt 3D — Kartu Proyek & Stamp Prestasi
Saat kursor/scroll mendekatkan kartu proyek (5.2) atau stamp prestasi (5.5) ke tengah layar, elemen tersebut miring ringan mengikuti posisi kursor (max ±6°, perspective ~800px) — seperti memegang lembar gambar teknik dan memiringkannya sedikit untuk melihat detailnya kena cahaya.
- Batasi tilt maksimum kecil (±6°) — di atas itu terasa gimmick, bukan "melihat lembar dari sudut".
- Highlight tepi kartu (border `--blue-bright`) mengikuti arah tilt, mensimulasikan pantulan cahaya di permukaan — bukan glow/gradient tempel.
- Di mobile/touch: tilt 3D dinonaktifkan (tidak ada mouse position), diganti reveal statis dari 6.2 saja.

### 6.4 Indikator Scroll di Hero
Satu elemen kecil di bagian bawah Hero: garis vertikal tipis `--blue-primary` dengan titik yang bergerak turun-naik pelan (loop 1.5s), plus label kecil mono "scroll" — berfungsi sebagai penanda "sheet berikutnya ada di bawah", bukan dekorasi hero yang tidak berarti.

### 6.5 Nomor Sheet sebagai Progress
Saat scroll, nomor "Sheet 0X" di pojok kanan-atas nav (lihat 4) ikut berubah mengikuti section yang sedang aktif di viewport — memberi orientasi "sedang di lembar keberapa", sekaligus jadi feedback progres scroll yang fungsional, bukan progress bar generik.

### 6.6 Batasan & Reduced Motion
- Semua efek di atas berhenti/berganti versi statis saat `prefers-reduced-motion: reduce` terdeteksi: parallax dimatikan (lapisan jadi diam), tilt 3D dimatikan, reveal jadi fade sederhana 200ms tanpa gambar garis.
- Jangan kombinasikan parallax + tilt 3D + reveal garis dalam satu elemen yang sama secara bersamaan — pilih maksimum 2 efek per elemen agar tidak terasa "ramai" secara visual maupun berat secara performa.
- Uji di perangkat low-end/mobile: jika parallax menyebabkan jank, turunkan ke 1 lapisan saja (gabung lapisan tengah+depan) di breakpoint mobile.

---

## 7. Ikonografi

Gunakan ikon garis tipis (stroke ~1.5px), bukan ikon isi penuh (filled) — senada dengan bahasa garis gambar teknik. Sumber yang cocok: Lucide Icons (stroke-based, konsisten). Ikon sosial (GitHub, LinkedIn, Email) ditampilkan kecil, monokrom `--blue-primary`, berubah `--blue-bright` saat hover — tanpa lingkaran latar warna-warni.

---

## 8. Aksesibilitas

- Kontras teks: `--ink` di atas `--paper`/`--paper-alt` memenuhi WCAG AA untuk body text; `--blue-primary` di atas `--paper` juga diverifikasi AA untuk teks besar/judul.
- Semua elemen interaktif punya focus state terlihat (outline `--amber-seal`, lihat 5.1).
- Info yang disampaikan lewat warna (mis. status "aktif" di nav) selalu disertai penanda non-warna (underline, bold) — tidak bergantung warna saja.

---

## 9. Nada Penulisan (Voice)

- Kalimat aktif, langsung ke tindakan: "Unduh CV", "Lihat Proyek" — bukan "Submit" atau "Klik Disini".
- Deskripsi proyek ditulis dari sudut pandang apa yang dikerjakan Fathir, bahasa sederhana, bukan jargon pemasaran.
- Tidak ada label "eyebrow" dekoratif di atas judul section (mis. tulisan kecil huruf besar sebelum heading) — judul section berdiri sendiri dengan hierarki tipografi yang sudah cukup jelas.

---

## 10. Ringkasan Do / Don't

| Do | Don't |
|---|---|
| Radius kecil konsisten (4px), garis tipis `--grid-line` | Radius besar/pill di semua elemen, drop-shadow lembut seragam di setiap card |
| Parallax 3 lapisan yang merepresentasikan kertas kalkir di atas kertas gambar | Parallax acak (background blob/gradient melayang tanpa makna) |
| Garis tepi Sheet "digambar" saat masuk viewport, sekali per elemen | Fade-slide-up generik berulang di setiap section/card |
| Tilt 3D ringan (±6°) pada kartu proyek & stamp, mengikuti kursor | Tilt berlebihan / efek "flip card" yang tidak merepresentasikan apa pun |
| Nomor Sheet aktif sebagai indikator progres scroll | Progress bar generik di top page tanpa kaitan konten |
| Label mono untuk data teknis nyata (stack, tanggal) | Mono/ALL-CAPS untuk semua label dekoratif |
| Amber hanya untuk stamp prestasi | Menambah warna baru di sembarang tempat "biar rame" |
| Nomor Sheet karena section memang berurutan | Menambahkan numbering 01/02/03 pada konten yang bukan urutan |
| Tombol dengan teks aksi langsung | Tombol dengan "→" tambahan di akhir teks |

### Catatan Implementasi
- Untuk parallax & scroll-triggered reveal: library ringan seperti **GSAP ScrollTrigger** atau **Framer Motion** (`useScroll`, `useTransform`) cukup untuk semua efek di atas — tidak perlu library 3D penuh (Three.js/WebGL) karena tilt di 6.3 murni transform CSS 3D (`perspective` + `rotateX/rotateY`), bukan objek 3D nyata.
- Uji performa dengan Chrome DevTools "Performance" saat scroll cepat — target tetap di atas 50fps di laptop kelas menengah.

---

*Dokumen ini melengkapi `prd.md` sebagai acuan visual sebelum implementasi HTML/CSS.*