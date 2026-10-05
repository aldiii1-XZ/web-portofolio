/**
 * Tes data portofolio.
 *
 * Menjaga agar isi situs tetap konsisten: semua proyek punya data lengkap,
 * tautan sah, dan tidak ada kontak yang tampil tanpa tautan.
 */
import { describe, expect, it } from 'vitest'

import { PROFIL, KEAHLIAN, PROYEK, KONTAK } from '../src/data'

describe('profil', () => {
  it('memuat identitas dasar', () => {
    expect(PROFIL.nama).toBe('Aldi Yonatan Rusnawan')
    expect(PROFIL.inisial).toHaveLength(2)
  })

  it('tidak lagi memuat NPM & kelas', () => {
    expect('npm' in PROFIL).toBe(false)
    expect('kelas' in PROFIL).toBe(false)
  })

  it('punya teks dwibahasa yang tidak kosong', () => {
    expect(PROFIL.peran.id.length).toBeGreaterThan(0)
    expect(PROFIL.peran.en.length).toBeGreaterThan(0)
    expect(PROFIL.tagline.id.length).toBeGreaterThan(0)
    expect(PROFIL.tagline.en.length).toBeGreaterThan(0)
    expect(PROFIL.tentang.id.length).toBe(PROFIL.tentang.en.length)
  })
})

describe('proyek', () => {
  it('semuanya punya data lengkap', () => {
    expect(PROYEK.length).toBeGreaterThanOrEqual(4)
    for (const p of PROYEK) {
      expect(p.slug).toMatch(/^[a-z0-9-]+$/)
      expect(p.nama.length).toBeGreaterThan(0)
      expect(p.jenis.id.length).toBeGreaterThan(0)
      expect(p.jenis.en.length).toBeGreaterThan(0)
      expect(p.deskripsi.id.length).toBeGreaterThan(20)
      expect(p.deskripsi.en.length).toBeGreaterThan(20)
      expect(p.teknologi.length).toBeGreaterThan(0)
      expect(p.aksen).toMatch(/^#[0-9a-fA-F]{6}$/)
    }
  })

  it('slug proyek unik', () => {
    const slug = PROYEK.map(p => p.slug)
    expect(new Set(slug).size).toBe(slug.length)
  })

  it('tautan yang ada berbentuk alamat sah', () => {
    for (const p of PROYEK) {
      if (p.live) expect(p.live).toMatch(/^https:\/\//)
      if (p.repo) expect(p.repo).toMatch(/^https:\/\/github\.com\//)
    }
  })

  it('setiap proyek punya setidaknya satu tautan', () => {
    for (const p of PROYEK) expect(Boolean(p.live || p.repo)).toBe(true)
  })
})

describe('keahlian', () => {
  it('tiap kelompok punya judul & isi', () => {
    expect(KEAHLIAN.length).toBeGreaterThanOrEqual(3)
    for (const k of KEAHLIAN) {
      expect(k.judul.id.length).toBeGreaterThan(0)
      expect(k.judul.en.length).toBeGreaterThan(0)
      expect(k.isi.length).toBeGreaterThan(0)
    }
  })
})

describe('kontak', () => {
  it('setiap kontak punya label, nilai, dan ikon', () => {
    for (const k of KONTAK) {
      expect(k.label.length).toBeGreaterThan(0)
      expect(k.nilai.length).toBeGreaterThan(0)
      expect(k.ikon.length).toBeGreaterThan(0)
    }
  })

  it('kontak yang tampil punya tautan sah', () => {
    const tampil = KONTAK.filter(k => k.tautan !== '#')
    expect(tampil.length).toBeGreaterThanOrEqual(3)
    for (const k of tampil) {
      expect(k.tautan).toMatch(/^(https:\/\/|mailto:)/)
    }
  })

  it('memuat email, GitHub, dan WhatsApp', () => {
    const label = KONTAK.filter(k => k.tautan !== '#').map(k => k.label)
    expect(label).toContain('Email')
    expect(label).toContain('GitHub')
    expect(label).toContain('WhatsApp')
  })
})
