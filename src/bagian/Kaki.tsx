import { PROFIL } from '../data'
import { useBahasa } from '../bahasa'

export function Kaki() {
  const { t } = useBahasa()
  const tahun = new Date().getFullYear()

  return (
    <footer className="kaki">
      <div className="wadah kaki-isi">
        <span>© {tahun} {PROFIL.nama}</span>
        <span>{t({ id: 'Dibangun dengan React & TypeScript.', en: 'Built with React & TypeScript.' })}</span>
      </div>
    </footer>
  )
}
