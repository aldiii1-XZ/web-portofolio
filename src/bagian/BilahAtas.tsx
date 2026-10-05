import { PROFIL } from '../data'
import { useBahasa } from '../bahasa'

/** Menu bagian halaman — dipakai bilah atas & footer. */
export const MENU = [
  { id: 'tentang', id_: 'Tentang', en: 'About' },
  { id: 'keahlian', id_: 'Keahlian', en: 'Skills' },
  { id: 'proyek', id_: 'Proyek', en: 'Projects' },
  { id: 'kontak', id_: 'Kontak', en: 'Contact' },
] as const

export function BilahAtas() {
  const { bahasa, ganti, t } = useBahasa()

  return (
    <header className="bilah">
      <div className="wadah bilah-isi">
        <a href="#atas" className="bilah-nama">
          {PROFIL.panggilan}
          <span>.</span>
        </a>
        <nav className="bilah-nav">
          {MENU.map(m => (
            <a key={m.id} href={`#${m.id}`}>{bahasa === 'id' ? m.id_ : m.en}</a>
          ))}
          <div className="tombol-bahasa" role="group" aria-label={t({ id: 'Pilih bahasa', en: 'Choose language' })}>
            <button
              type="button"
              className={bahasa === 'id' ? 'aktif' : ''}
              aria-pressed={bahasa === 'id'}
              onClick={() => ganti('id')}
            >
              ID
            </button>
            <button
              type="button"
              className={bahasa === 'en' ? 'aktif' : ''}
              aria-pressed={bahasa === 'en'}
              onClick={() => ganti('en')}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
