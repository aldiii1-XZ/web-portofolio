/**
 * Uji tampilan portofolio dengan browser sungguhan.
 * Memeriksa: semua bagian tampil, tombol bahasa bekerja, dan tautan benar.
 */
const { chromium } = require('playwright')

const URL = process.env.PORTO_URL || 'http://localhost:5271/'
const hasil = []
const gagal = []

function cek(nama, ok, detail = '') {
  if (ok) { hasil.push(nama); console.log(`✔ ${nama}${detail ? ' — ' + detail : ''}`) }
  else { gagal.push(nama); console.log(`✖ ${nama} ${detail}`) }
}

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  const galatKonsol = []
  page.on('console', m => { if (m.type() === 'error') galatKonsol.push(m.text()) })

  try {
    // Mulai dari keadaan bersih: hapus preferensi bahasa lama.
    await page.goto(URL, { waitUntil: 'domcontentloaded' })
    await page.evaluate(() => localStorage.clear())
    await page.goto(URL, { waitUntil: 'networkidle' })

    // ── 1. Nama & bagian utama tampil ──────────────────────────────────────
    const isi = await page.textContent('body')
    cek('Nama tampil', isi.includes('Aldi Yonatan Rusnawan'))
    cek('NPM & kelas tidak tampil', !isi.includes('NPM') && !isi.includes('SI5B') && !isi.includes('2428240089'))
    cek('Bagian Tentang tampil', isi.includes('Tentang saya'))

    // ── 1b. Foto profil tampil ─────────────────────────────────────────────
    const adaFoto = await page.locator('img.lingkaran').count()
    cek('Foto profil tampil', adaFoto === 1)
    if (adaFoto) {
      const alami = await page.locator('img.lingkaran').evaluate(el => ({ w: el.naturalWidth, h: el.naturalHeight }))
      cek('Foto profil berhasil dimuat', alami.w > 0 && alami.h > 0, `${alami.w}x${alami.h}`)
      const bulat = await page.locator('img.lingkaran').evaluate(el => getComputedStyle(el).borderRadius)
      cek('Foto profil berbentuk bulat', bulat.includes('50%'))
    }

    // ── 1c. Logo AYR menggantikan teks "Aldi." ─────────────────────────────
    const logo = page.locator('.bilah-logo img')
    cek('Logo tampil di bilah atas', (await logo.count()) === 1)
    if (await logo.count()) {
      const alami = await logo.evaluate(el => ({ w: el.naturalWidth, h: el.naturalHeight, alt: el.alt }))
      cek('Logo berhasil dimuat', alami.w > 0 && alami.h > 0, `${alami.w}x${alami.h}`)
      cek('Logo punya teks alternatif', alami.alt.length > 0, alami.alt)
      const tinggi = await logo.evaluate(el => el.getBoundingClientRect().height)
      cek('Tinggi logo wajar (25–40px)', tinggi >= 25 && tinggi <= 40, `${tinggi.toFixed(1)}px`)
    }
    // Teks lama "Aldi." tidak boleh muncul lagi sebagai tulisan
    const namaLama = await page.locator('.bilah-nama').count()
    cek('Teks lama "Aldi." sudah diganti logo', namaLama === 0)

    // ── 1d. Ikon tab browser (favicon) ─────────────────────────────────────
    const fav = await page.evaluate(() => {
      const l = document.querySelector('link[rel="icon"]')
      return l ? l.getAttribute('href') : null
    })
    cek('Favicon ditautkan di halaman', fav !== null && fav.includes('favicon'), String(fav))
    const favOk = await page.evaluate(async () => {
      const l = document.querySelector('link[rel="icon"]')
      if (!l) return false
      const res = await fetch(l.href)
      return res.ok
    })
    cek('Berkas favicon bisa diakses', favOk === true)

    cek('Bagian Keahlian tampil', isi.includes('Keahlian'))
    cek('Bagian Proyek tampil', isi.includes('Proyek'))
    cek('Bagian Kontak tampil', isi.includes('Kontak'))

    // ── 2. Semua proyek tampil ─────────────────────────────────────────────
    for (const nama of ['SIKLINIK', 'NUSAWEAR', 'NGOBROL', 'SIKANTIN']) {
      cek(`Proyek ${nama} tampil`, isi.includes(nama))
    }

    // ── 3. Tombol "Buka aplikasi" hanya untuk proyek yang live ─────────────
    const tombolBuka = await page.locator('a:has-text("Buka aplikasi")').count()
    cek('Tiga proyek punya tombol "Buka aplikasi"', tombolBuka === 3, `${tombolBuka} tombol`)

    // ── 4. Tautan live benar ───────────────────────────────────────────────
    const hrefs = await page.locator('a[target="_blank"]').evaluateAll(as => as.map(a => a.href))
    cek('Tautan SIKLINIK benar', hrefs.some(h => h.includes('siklinik.vercel.app')))
    cek('Tautan NUSAWEAR benar', hrefs.some(h => h.includes('nusawear.vercel.app')))
    cek('Tautan NGOBROL benar', hrefs.some(h => h.includes('ngobrol-nu.vercel.app')))
    cek('Tautan GitHub benar', hrefs.some(h => h.includes('github.com/aldiii1-XZ')))

    // ── 5. Kontak: email & WhatsApp ────────────────────────────────────────
    const semuaHref = await page.locator('a').evaluateAll(as => as.map(a => a.getAttribute('href')))
    cek('Email sebagai mailto', semuaHref.includes('mailto:aldiyonatan22@gmail.com'))
    cek('WhatsApp sebagai wa.me', semuaHref.some(h => h && h.startsWith('https://wa.me/')))
    cek('Kontak yang kosong disembunyikan', !semuaHref.includes('#'))

    // ── 6. Ganti bahasa ke Inggris ─────────────────────────────────────────
    await page.click('button:has-text("EN")')
    await page.waitForTimeout(400)
    const isiEn = await page.textContent('body')
    cek('Mode Inggris: judul berubah', isiEn.includes('About me') && isiEn.includes('Projects'))
    cek('Mode Inggris: deskripsi berubah', isiEn.includes('Open app'))
    cek('Mode Inggris: tombol "Open app" muncul', (await page.locator('a:has-text("Open app")').count()) === 3)
    cek('Atribut lang jadi "en"', (await page.getAttribute('html', 'lang')) === 'en')

    // ── 7. Kembali ke Indonesia & bahasa diingat ───────────────────────────
    await page.click('button:has-text("ID")')
    await page.waitForTimeout(300)
    cek('Kembali ke Indonesia', (await page.textContent('body')).includes('Tentang saya'))

    await page.reload({ waitUntil: 'networkidle' })
    await page.waitForTimeout(500)
    cek('Pilihan bahasa diingat setelah muat ulang', (await page.textContent('body')).includes('Tentang saya'))

    // ── 8. Tidak ada error konsol ──────────────────────────────────────────
    cek('Tidak ada error konsol', galatKonsol.length === 0, galatKonsol.slice(0, 2).join(' | '))
  } catch (err) {
    console.log('\n!! Uji berhenti karena galat:', err.message)
    gagal.push('galat: ' + err.message)
  } finally {
    await browser.close()
  }

  console.log('\n' + '='.repeat(60))
  console.log(`HASIL: ${hasil.length}/${hasil.length + gagal.length} pemeriksaan lulus`)
  console.log('Error konsol:', galatKonsol.length ? galatKonsol.slice(0, 3) : 'tidak ada')
  if (gagal.length) console.log('Gagal:', gagal)
  console.log('='.repeat(60))
  process.exit(gagal.length === 0 ? 0 : 1)
})()
