/**
 * Data profil, proyek, dan kontak.
 * Semua yang tampil di situs diambil dari sini — cukup ubah berkas ini
 * untuk memperbarui isi situs (tanpa menyentuh tampilan).
 */

export interface TeksDwibahasa {
  id: string
  en: string
}

export interface Proyek {
  slug: string
  nama: string
  jenis: TeksDwibahasa
  deskripsi: TeksDwibahasa
  teknologi: string[]
  live: string | null
  repo: string | null
  aksen: string
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
      'Sejauh ini saya sudah membangun beberapa aplikasi web utuh: sistem antrean klinik dengan peran pengguna dan asisten AI, toko daring dengan keranjang dan pembayaran, aplikasi obrolan real-time, serta prototipe aplikasi kantin. Semuanya saya kerjakan dari nol — mulai dari merancang basis data, menulis API, membuat antarmuka, sampai menguji dan menayangkannya.',
      'Bagi saya, aplikasi yang baik adalah yang selesai: berjalan, diuji, dan bisa dibuka siapa saja lewat tautan.',
    ],
    en: [
      'I am Aldi Yonatan Rusnawan, an Information Systems student. I enjoy turning ideas into applications people can actually use, not just a visual mock-up.',
      'So far I have built several complete web applications: a clinic queue system with user roles and an AI assistant, an online store with cart and payment, a real-time chat app, and a canteen app prototype. I built all of them from scratch — designing the database, writing the API, building the interface, then testing and deploying it.',
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
    judul: { id: 'Server (Backend)', en: 'Backend' },
    isi: ['Node.js', 'Express', 'REST API', 'WebSocket', 'Validasi data (Zod)'],
  },
  {
    judul: { id: 'Basis Data', en: 'Database' },
    isi: ['SQLite', 'Perancangan skema', 'Penyimpanan berkas (Vercel Blob)'],
  },
  {
    judul: { id: 'Alat & Lainnya', en: 'Tools & Others' },
    isi: ['Git & GitHub', 'Vercel', 'Pengujian (Vitest, Playwright)', 'Integrasi AI / LLM'],
  },
]

export const PROYEK: Proyek[] = [
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
