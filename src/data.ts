/**
 * Data profil, proyek, dan kontak.
 * Semua yang tampil di situs diambil dari sini — cukup ubah berkas ini
 * untuk memperbarui isi situs (tanpa menyentuh tampilan).
 */

export interface TeksDwibahasa {
  id: string
  en: string
}

/** Tingkat kesulitan sistem — dipakai untuk mengelompokkan proyek. */
export type Tingkat = 'mudah' | 'menengah' | 'sulit'

export interface Proyek {
  slug: string
  nama: string
  jenis: TeksDwibahasa
  deskripsi: TeksDwibahasa
  teknologi: string[]
  live: string | null
  repo: string | null
  aksen: string
  tingkat: Tingkat
}

export interface Kontak {
  label: string
  nilai: string
  tautan: string
  ikon: string
}

export const PROFIL = {
  nama: 'Aldi Yonatan Rusnawan',
  panggilan: 'Aldi',
  inisial: 'AY',
  /** Foto profil di folder public/ (mis. '/foto.jpg'). null = pakai inisial. */
  foto: '/foto.jpg' as string | null,
  peran: {
    id: 'Mahasiswa Sistem Informasi · Pengembang Web Full-Stack',
    en: 'Information Systems Student · Full-Stack Web Developer',
  },
  tagline: {
    id: 'Saya membangun aplikasi web utuh — dari antarmuka, logika server, basis data, sampai tayang di internet.',
    en: 'I build complete web applications — from the interface, server logic, and database, all the way to being live on the internet.',
  },
  tentang: {
    id: [
      'Saya Aldi Yonatan Rusnawan, mahasiswa Sistem Informasi. Saya suka mengubah ide menjadi aplikasi yang benar-benar bisa dipakai orang, bukan sekadar tampilan.',
      'Sejauh ini saya sudah membangun beberapa aplikasi utuh: aplikasi pelaporan masalah kota untuk warga Palembang dengan peta, pemantauan cuaca, dan asisten AI; sistem antrean klinik dengan peran pengguna; toko daring dengan keranjang dan pembayaran; aplikasi obrolan real-time; prototipe aplikasi kantin; serta aplikasi jadwal kuliah berbasis Flutter beserta uji widgetnya. Ada juga latihan REST API dari mata kuliah yang saya simpan sebagai titik awal. Semuanya saya kerjakan dari nol — mulai dari merancang basis data, menulis API, membuat antarmuka, sampai menguji dan menayangkannya.',
      'Bagi saya, aplikasi yang baik adalah yang selesai: berjalan, diuji, dan bisa dibuka siapa saja lewat tautan.',
    ],
    en: [
      'I am Aldi Yonatan Rusnawan, an Information Systems student. I enjoy turning ideas into applications people can actually use, not just a visual mock-up.',
      'So far I have built several complete applications: a city-issue reporting app for Palembang citizens with maps, weather monitoring, and an AI assistant; a clinic queue system with user roles; an online store with cart and payment; a real-time chat app; a canteen app prototype; and a Flutter-based class schedule app with its widget tests. There is also a coursework REST API exercise I keep as a starting point. I built all of them from scratch — designing the database, writing the API, building the interface, then testing and deploying it.',
      'To me, a good application is a finished one: it runs, it is tested, and anyone can open it through a link.',
    ],
  },
} as const

export const KEAHLIAN: { judul: TeksDwibahasa; isi: string[] }[] = [
  {
    judul: { id: 'Antarmuka (Frontend)', en: 'Frontend' },
    isi: ['React', 'TypeScript', 'Vite', 'HTML & CSS', 'Desain responsif'],
  },
  {
    judul: { id: 'Aplikasi Mobile', en: 'Mobile Apps' },
    isi: ['Flutter', 'Dart', 'Widget kustom', 'Build web & Android'],
  },
  {
    judul: { id: 'Server (Backend)', en: 'Backend' },
    isi: ['Node.js', 'Express', 'REST API', 'WebSocket', 'Validasi data (Zod)'],
  },
  {
    judul: { id: 'Basis Data', en: 'Database' },
    isi: ['Supabase', 'SQLite', 'Perancangan skema', 'Penyimpanan berkas (Vercel Blob)'],
  },
  {
    judul: { id: 'Alat & Lainnya', en: 'Tools & Others' },
    isi: ['Git & GitHub', 'Vercel', 'Pengujian (Vitest, Playwright)', 'Integrasi AI / LLM'],
  },
]

/**
 * Kategori tingkat proyek — urut dari yang paling mudah ke yang paling sulit.
 * Proyek dikelompokkan otomatis lewat kolom `tingkat`-nya (lihat Proyek.tsx).
 */
export const KATEGORI: { kunci: Tingkat; judul: TeksDwibahasa; keterangan: TeksDwibahasa }[] = [
  {
    kunci: 'mudah',
    judul: { id: 'Mudah', en: 'Easy' },
    keterangan: {
      id: 'Latihan dasar dan aplikasi berlingkup kecil — satu alur utama, tanpa peran pengguna.',
      en: 'Foundational practice and small-scope apps — one main flow, no user roles.',
    },
  },
  {
    kunci: 'menengah',
    judul: { id: 'Menengah', en: 'Intermediate' },
    keterangan: {
      id: 'Beberapa fitur sekaligus dalam satu aplikasi: keranjang belanja, pembayaran, atau obrolan waktu nyata.',
      en: 'Several features combined in one app: shopping cart, payment, or real-time chat.',
    },
  },
  {
    kunci: 'sulit',
    judul: { id: 'Sulit', en: 'Hard' },
    keterangan: {
      id: 'Sistem besar: lebih dari satu peran pengguna, integrasi layanan luar, dan pengujian menyeluruh.',
      en: 'Larger systems: multiple user roles, external integrations, and thorough testing.',
    },
  },
]

export const PROYEK: Proyek[] = [
  {
    slug: 'siagakota',
    nama: 'SIAGAKOTA',
    jenis: { id: 'Aplikasi Kota & Pengaduan', en: 'City & Citizen Reporting App' },
    deskripsi: {
      id: 'Aplikasi warga Palembang untuk melaporkan masalah kota: laporan tampil di peta dengan warna sesuai tingkat keparahan, ada riwayat status, pemberitahuan dalam aplikasi, serta pantauan cuaca, kualitas udara, dan gempa dari sumber resmi. Dilengkapi portal petugas, pembatas spam, dan asisten AI.',
      en: 'A citizen app for Palembang to report city issues: reports appear on a map colored by severity, with status history, in-app notifications, plus live weather, air quality, and earthquake monitoring from official sources. Includes a staff portal, spam limits, and an AI assistant.',
    },
    teknologi: ['Flutter', 'Dart', 'Supabase', 'AI', 'Vercel'],
    live: 'https://siagakota-app.vercel.app',
    repo: 'https://github.com/aldiii1-XZ/siagakota_app',
    aksen: '#60a5fa',
    tingkat: 'sulit',
  },
  {
    slug: 'siklinik',
    nama: 'SIKLINIK',
    jenis: { id: 'Sistem Antrean Klinik', en: 'Clinic Queue System' },
    deskripsi: {
      id: 'Mahasiswa mengambil nomor antrean, petugas memanggil dan mengubah status, dan ada asisten AI untuk menjawab pertanyaan kesehatan ringan. Dilengkapi hak akses berbeda untuk mahasiswa dan petugas.',
      en: 'Students take a queue number, staff call and update the status, and an AI assistant answers light health questions. Comes with different access rights for students and staff.',
    },
    teknologi: ['React', 'TypeScript', 'Express', 'SQLite', 'AI', 'Vercel'],
    live: 'https://siklinik.vercel.app',
    repo: 'https://github.com/aldiii1-XZ/siklinik',
    aksen: '#4fd1c5',
    tingkat: 'sulit',
  },
  {
    slug: 'nusawear',
    nama: 'NUSAWEAR',
    jenis: { id: 'Toko Daring', en: 'Online Store' },
    deskripsi: {
      id: 'Toko kaos & hoodie: katalog, pilihan ukuran dan warna, keranjang, checkout, pembayaran, serta panel admin untuk mengelola stok dan pesanan.',
      en: 'A t-shirt & hoodie store: catalog, size and color options, cart, checkout, payment, and an admin panel to manage stock and orders.',
    },
    teknologi: ['React', 'TypeScript', 'Express', 'SQLite', 'Midtrans', 'Vercel'],
    live: 'https://nusawear.vercel.app',
    repo: 'https://github.com/aldiii1-XZ/nusawear',
    aksen: '#f6ad55',
    tingkat: 'menengah',
  },
  {
    slug: 'ngobrol',
    nama: 'NGOBROL',
    jenis: { id: 'Obrolan Real-Time', en: 'Real-Time Chat' },
    deskripsi: {
      id: 'Aplikasi obrolan dengan beberapa ruang, daftar orang yang sedang online, dan indikator "sedang menulis". Berjalan lewat WebSocket, dengan mode cadangan agar tetap hidup di hosting serverless.',
      en: 'A chat app with multiple rooms, a list of who is online, and a "typing" indicator. Runs over WebSocket, with a fallback mode so it keeps working on serverless hosting.',
    },
    teknologi: ['React', 'TypeScript', 'Express', 'WebSocket', 'SQLite', 'Vercel'],
    live: 'https://ngobrol-nu.vercel.app',
    repo: 'https://github.com/aldiii1-XZ/ngobrol',
    aksen: '#6d8bff',
    tingkat: 'menengah',
  },
  {
    slug: 'jadwal-kuliah',
    nama: 'JADWAL KULIAH',
    jenis: { id: 'Aplikasi Mobile — Jadwal Kuliah', en: 'Mobile App — Class Schedule' },
    deskripsi: {
      id: 'Aplikasi Flutter untuk melihat jadwal kuliah mingguan: pilih hari lewat chip, ringkasan jumlah mata kuliah dan total jam, form tambah/ubah dengan validasi jam, halaman detail, dan uji widget untuk alur utamanya.',
      en: 'A Flutter app for viewing a weekly class schedule: pick a day with chips, see a summary of course count and total hours, add or edit entries through a validated form, open a detail page, and a set of widget tests covering the main flows.',
    },
    teknologi: ['Flutter', 'Dart', 'Vercel'],
    live: 'https://jadwal-kuliah-fawn.vercel.app',
    repo: 'https://github.com/aldiii1-XZ/jadwal_kuliah',
    aksen: '#a78bfa',
    tingkat: 'mudah',
  },
  {
    slug: 'rest-api-perikanan',
    nama: 'REST API PERIKANAN',
    jenis: { id: 'Latihan API — Tugas Kuliah', en: 'API Practice — Coursework' },
    deskripsi: {
      id: 'Latihan REST API memakai Express.js dengan tema kolam ikan: endpoint CRUD, pencarian lewat query string, validasi input, dan kumpulan permintaan Postman untuk mencobanya.',
      en: 'A REST API exercise with Express.js on fish-pond data: CRUD endpoints, query-string filtering, input validation, and a Postman collection for trying the requests.',
    },
    teknologi: ['Node.js', 'Express', 'REST API', 'Postman'],
    live: null,
    repo: 'https://github.com/aldiii1-XZ/tugas1-restful-2428240089',
    aksen: '#fb7185',
    tingkat: 'mudah',
  },
  {
    slug: 'sikantin',
    nama: 'SIKANTIN',
    jenis: { id: 'Aplikasi Kantin', en: 'Canteen App' },
    deskripsi: {
      id: 'Prototipe aplikasi kantin untuk mencatat transaksi penjualan dan menampilkan laporan.',
      en: 'A canteen app prototype to record sales transactions and show reports.',
    },
    teknologi: ['React', 'TypeScript', 'Express', 'SQLite'],
    live: null,
    repo: 'https://github.com/aldiii1-XZ/SIKANTIN-Prototype-',
    aksen: '#68d391',
    tingkat: 'mudah',
  },
]

/**
 * Daftar kontak. Isi `tautan` dengan "#" untuk menyembunyikan sementara
 * (tombolnya tidak akan tampil).
 */
export const KONTAK: Kontak[] = [
  {
    label: 'Email',
    nilai: 'aldiyonatan22@gmail.com',
    tautan: 'mailto:aldiyonatan22@gmail.com',
    ikon: 'email',
  },
  {
    label: 'GitHub',
    nilai: 'github.com/aldiii1-XZ',
    tautan: 'https://github.com/aldiii1-XZ',
    ikon: 'github',
  },
  {
    label: 'WhatsApp',
    nilai: 'Chat langsung',
    tautan: 'https://wa.me/62895386456868',
    ikon: 'whatsapp',
  },
  {
    // Isi tautan bila sudah ada, contoh: 'https://instagram.com/username'
    label: 'Instagram',
    nilai: '—',
    tautan: '#',
    ikon: 'instagram',
  },
  {
    // Isi tautan bila sudah ada, contoh: 'https://linkedin.com/in/username'
    label: 'LinkedIn',
    nilai: '—',
    tautan: '#',
    ikon: 'linkedin',
  },
]
