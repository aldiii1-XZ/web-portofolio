import { PROFIL } from '../data'
import { useBahasa } from '../bahasa'

export function Tentang() {
  const { t, tl } = useBahasa()

  return (
    <section className="bagian tentang" id="tentang">
      <div className="wadah">
        <div className="bagian-kepala">
          <div className="garis-aksen" />
          <h2>{t({ id: 'Tentang saya', en: 'About me' })}</h2>
        </div>
        {tl(PROFIL.tentang).map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </section>
  )
}
