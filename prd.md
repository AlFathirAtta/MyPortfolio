# Product Requirements Document (PRD)
## Website Portofolio Pribadi — Muhammad Al Fathir Attaullah

| | |
|---|---|
| **Pemilik Produk** | Muhammad Al Fathir Attaullah |
| **Versi Dokumen** | 1.0 |
| **Tanggal** | 16 September 2026 |
| **Status** | Draft |

---

## 1. Latar Belakang & Tujuan

Muhammad Al Fathir Attaullah adalah siswa Rekayasa Perangkat Lunak (peminatan Front End Development) di SMK Telkom Malang, dengan pengalaman proyek nyata (SITU, Aplikasi Rental Mobil), pengalaman organisasi yang kuat (OSIS, Komunitas Pengurus Supporter), serta sejumlah prestasi kompetisi.

Website portofolio ini dibuat untuk:
1. Menampilkan identitas profesional dan kemampuan Front End Development secara visual dan kredibel.
2. Menjadi media promosi diri saat melamar magang/kerja, mengikuti lomba, atau membangun personal branding.
3. Menunjukkan bukti nyata (proyek, sertifikasi, pengalaman organisasi) yang memperkuat CV.
4. Menjadi ruang eksplorasi skill Front End Development sekaligus contoh karya (portofolio itu sendiri adalah proyek portofolio).

## 2. Target Pengguna

| Persona | Tujuan mengakses situs |
|---|---|
| Rekruter / HRD / Mentor magang | Menilai kemampuan teknis & soft skill secara cepat |
| Panitia lomba / kompetisi | Verifikasi profil peserta |
| Teman/relasi organisasi (OSIS, komunitas) | Mengenal profil kepemimpinan |
| Fathir sendiri | Media personal branding & showcase belajar |

## 3. Tujuan Produk (Goals)
- G1: Pengunjung dapat memahami siapa Fathir dan keahliannya dalam < 10 detik di halaman utama.
- G2: Pengunjung dapat melihat minimal 2 proyek nyata lengkap dengan peran & teknologi yang digunakan.
- G3: Pengunjung dapat melihat rekam jejak kepemimpinan/organisasi dan prestasi.
- G4: Pengunjung dapat dengan mudah menghubungi Fathir (email/WA) atau mengunduh CV.
- G5: Situs responsif dan nyaman diakses di mobile (mengingat rekruter sering cek dari HP).

### Non-Goals (di luar cakupan v1)
- Tidak ada dashboard admin/CMS backend — konten dikelola langsung via kode/markdown.
- Tidak ada blog penuh (bisa jadi fase berikutnya).
- Tidak ada sistem autentikasi/login.

## 4. Struktur Konten & Sitemap

```
/ (Home)
├── Hero (nama, tagline, CTA)
├── Tentang Saya (About)
├── Keahlian (Skills)
├── Pengalaman Kerja / Proyek (Experience & Projects)
├── Pengalaman Organisasi (Organization)
├── Prestasi & Sertifikasi (Achievements)
├── Pendidikan (Education)
└── Kontak (Contact / Footer)
```
Untuk v1 direkomendasikan **single-page scroll** dengan navigasi anchor (Home, About, Skills, Projects, Organization, Contact) agar ringan dan cepat dibangun; opsi multi-page dapat menjadi peningkatan di v2.

## 5. Spesifikasi Fitur & Konten (dipetakan dari CV)

### 5.1 Hero / Landing Section
- Nama: **Muhammad Al Fathir Attaullah**
- Tagline: "Front End Developer | Siswa RPL SMK Telkom Malang"
- Lokasi: Malang, Jawa Timur, Indonesia
- CTA: tombol "Lihat Proyek" & "Unduh CV" / "Hubungi Saya"
- Ikon sosial: Email, WhatsApp, GitHub ([AlFathirAtta](https://github.com/AlFathirAtta)), LinkedIn ([al-fathir-attaullah](https://www.linkedin.com/in/al-fathir-attaullah-48891040b/))

### 5.2 Tentang Saya (About)
Konten diadaptasi dari Profil Singkat CV:
> Lulusan baru (fresh graduate) yang antusias di bidang Front End Development, mampu membangun antarmuka web yang responsif, interaktif, dan berfokus pada pengalaman pengguna. Didukung kemampuan leadership dan public speaking yang membuatnya mampu bekerja kolaboratif dalam tim maupun berkomunikasi efektif dengan berbagai pihak.

### 5.3 Keahlian (Skills)
Dikelompokkan agar lebih rapi secara visual:

**Technical Skills**
- Front End Development: HTML, CSS, JavaScript
- Back End Development (Basic)
- Git & GitHub

**Soft Skills**
- Leadership
- Public Speaking
- Team Management
- Problem Solving
- Team Collaboration

Rekomendasi tampilan: progress bar / badge grid, bukan hanya daftar teks.

### 5.4 Pengalaman Kerja / Proyek (Projects)
Ditampilkan sebagai **card proyek**, masing-masing dengan: judul, peran, deskripsi singkat, poin kontribusi, dan (jika ada) screenshot/link demo/repo GitHub.

**1. Sistem Informasi Tata Usaha (SITU) — Front End Developer**
- Mengembangkan antarmuka web untuk mendukung proses administrasi sekolah.
- Membuat tampilan yang responsif dan mudah digunakan oleh pengguna.

**2. NeonRent (Aplikasi Rental Mobil) — Front End Developer**
- Berkolaborasi dengan tim Back End Developer untuk mengintegrasikan fitur dan data aplikasi.
- Membangun tampilan yang responsif dan meningkatkan pengalaman pengguna.
- Tema visual: dark mode dengan aksen neon biru, kesan modern & futuristik.
- Fitur yang ditonjolkan di UI: booking online instan, pembayaran via QRIS otomatis, katalog armada dengan filter (transmisi, kapasitas, rentang harga).
- Screenshot tersedia: halaman Beranda (hero), halaman Katalog Mobil (filter pencarian), dan section "Mengapa Memilih NeonRent" (value proposition) — siap dipakai sebagai galeri/carousel pada card proyek ini.
- Link repo GitHub: cek di [github.com/AlFathirAtta](https://github.com/AlFathirAtta) (tautkan repo spesifik proyek ini jika terpisah dari akun utama).

> Catatan: Untuk proyek SITU, screenshot/dokumentasi visual masih perlu disiapkan agar konsisten dengan NeonRent yang sudah punya galeri visual.

### 5.5 Pengalaman Organisasi
Ditampilkan sebagai timeline atau card kepemimpinan:

**Organisasi Siswa Intra Sekolah (OSIS) — Koordinator Sie 5 (2024–2026)**
- Ketua Pelaksana Open Recruitment OSIS Periode 2025–2026, menarik 100+ pendaftar dan memimpin proses kurasi hingga terpilih 17 pengurus baru.
- Menyusun rundown teknis perlengkapan dan manajemen risiko lapangan, memastikan seluruh kebutuhan operasional terpenuhi tepat.

**Komunitas Pengurus Supporter (Mokleters) — Ketua Komunitas (2026–2027)**
- Memimpin dan mengoordinasikan lebih dari 90 anggota dalam menjalankan kegiatan dan program komunitas.
- Merencanakan, mengorganisir, dan mengawasi pelaksanaan berbagai kegiatan komunitas untuk memastikan tujuan organisasi tercapai secara efektif.
- Mengembangkan kemampuan kepemimpinan, pengambilan keputusan, manajemen tim, dan penyelesaian masalah dalam lingkungan organisasi yang dinamis.
- **Meraih Best Supporter Juara 5 pada event DBL Malang** selama masa kepemimpinan sebagai Ketua Mokleters periode 2026/2027.

### 5.6 Prestasi & Sertifikasi (Achievements)
Ditampilkan sebagai list/grid dengan tahun:
- 2026 — Juara 3 O2SN Panjat Tebing Putra tingkat kota
- 2026/2027 — Best Supporter Juara 5, event DBL Malang (sebagai Ketua Komunitas Pengurus Supporter/Mokleters)
- 2025 — Juara 1 Majlis Boxing tingkat kota
- 2025 — Finalis lomba Business Plan Competition BEGIN 1.0 tingkat nasional
- 2025 — Penghargaan sebagai peserta lomba Business Model Canvas, diselenggarakan UNESA tingkat nasional

### 5.7 Pendidikan
- **SMK Telkom Malang** (2024 – Sekarang)
  Jurusan Rekayasa Perangkat Lunak, peminatan Front End Development

### 5.8 Kontak (Contact)
- Email: muhammadattaullahh@gmail.com
- Telepon/WhatsApp: +62 878-3130-5958
- Lokasi: Malang, Jawa Timur, Indonesia
- GitHub: [github.com/AlFathirAtta](https://github.com/AlFathirAtta)
- LinkedIn: [linkedin.com/in/al-fathir-attaullah-48891040b](https://www.linkedin.com/in/al-fathir-attaullah-48891040b/)
- Form kontak sederhana (nama, email, pesan) → dikirim via mailto atau layanan form (mis. Formspree) karena tidak ada backend di v1.
- Tombol unduh CV (PDF) — file CV.pdf sudah tersedia dan siap ditautkan.

## 6. Kebutuhan Non-Fungsional
| Kategori | Ketentuan |
|---|---|
| Responsif | Wajib mobile-first; teruji di ukuran 360px–1920px |
| Performa | Waktu muat awal < 3 detik di koneksi 4G |
| Aksesibilitas | Kontras warna memadai (WCAG AA), alt text pada gambar |
| SEO dasar | Meta title/description, Open Graph tag untuk share link |
| Kompatibilitas browser | Chrome, Firefox, Edge, Safari (2 versi terakhir) |
| Hosting | Statis, dapat di-deploy gratis (Vercel/Netlify/GitHub Pages) |

## 7. Rekomendasi Tech Stack
Disesuaikan dengan skill yang sudah dikuasai (HTML, CSS, JavaScript, Git & GitHub) sekaligus jadi ruang belajar:
- **Dasar:** HTML5, CSS3, JavaScript (vanilla) — cocok untuk menunjukkan fondasi FE yang solid.
- **Opsi peningkatan (opsional, jika ingin belajar sekaligus):** Tailwind CSS untuk styling cepat & rapi.
- **Version control:** Git & GitHub (repo publik agar rekruter bisa melihat kode).
- **Deployment:** GitHub Pages / Vercel / Netlify (gratis, mudah dihubungkan ke domain custom nantinya).

## 8. Desain & Gaya Visual (Arahan Umum)
- Kesan: profesional, bersih, modern, sedikit energik (mencerminkan sisi leadership & olahraga).
- Palet warna: 1 warna utama (brand color) + netral (putih/abu gelap) + 1 aksen.
- Tipografi: sans-serif modern, hierarki jelas antara judul, subjudul, dan body text.
- Micro-interaction ringan (hover pada card proyek/skill) untuk kesan interaktif — relevan karena CV menonjolkan "responsif & interaktif".

## 9. User Flow Utama
1. Pengunjung masuk ke Home → membaca Hero & tagline.
2. Scroll ke About → memahami latar belakang singkat.
3. Scroll ke Skills → menilai kompetensi teknis & soft skill.
4. Scroll ke Projects → melihat bukti kerja nyata (SITU, Rental Mobil).
5. Scroll ke Organization & Achievements → menilai leadership dan prestasi.
6. Scroll ke Contact → menghubungi / mengunduh CV.

## 10. Metrik Keberhasilan (Success Metrics)
- Situs dapat diakses tanpa error di desktop & mobile.
- Semua tautan (email, WA, unduh CV, link proyek jika ada) berfungsi.
- Waktu muat halaman < 3 detik.
- Minimal 1 tanggapan positif (interview/pesan masuk) dalam 1 bulan setelah publikasi sebagai indikator awal.

## 11. Roadmap / Fase Pengembangan
| Fase | Cakupan |
|---|---|
| v1 (MVP) | Single-page: Hero, About, Skills, Projects, Organization, Achievements, Contact |
| v2 | Tambah halaman detail per proyek (screenshot, tech stack, link demo/repo) |
| v3 | Tambah blog/catatan belajar, dark mode, dukungan multi-bahasa (ID/EN) |

## 12. Risiko & Catatan Terbuka

**Sudah terpenuhi:**
- ✅ Screenshot proyek NeonRent (Aplikasi Rental Mobil) — 3 tangkapan layar (Beranda, Katalog Mobil, section value proposition) sudah tersedia.
- ✅ Link GitHub: [github.com/AlFathirAtta](https://github.com/AlFathirAtta)
- ✅ Link LinkedIn: [al-fathir-attaullah-48891040b](https://www.linkedin.com/in/al-fathir-attaullah-48891040b/)
- ✅ File CV.pdf final sudah tersedia untuk ditautkan ke tombol "Unduh CV".

**Masih perlu dilengkapi:**
- ⬜ Screenshot/dokumentasi visual untuk proyek SITU (Sistem Informasi Tata Usaha) — belum ada, agar setara dengan galeri NeonRent.
- ⬜ Pastikan repo GitHub proyek SITU & NeonRent bisa diakses publik (bukan private), atau siapkan link demo alternatif jika repo tidak bisa dibagikan (misal proyek tim/sekolah).
- ⬜ Isi foto profil/foto diri untuk bagian Hero/About (opsional tapi meningkatkan kesan personal).

---
*Dokumen ini menjadi acuan sebelum masuk ke tahap desain (wireframe) dan implementasi kode website portofolio.*