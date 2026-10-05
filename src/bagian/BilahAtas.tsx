import { MENU } from './menu'
import { Logo } from './Logo'
import { useBahasa } from '../bahasa'

export function BilahAtas() {
  const { bahasa, ganti, t } = useBahasa()

  return (
    <header className="bilah">
      <div className="wadah bilah-isi">
        <a href="#atas" className="bilah-logo" aria-label="Aldi Yonatan Rusnawan">
          <Logo tinggi={30} />
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
