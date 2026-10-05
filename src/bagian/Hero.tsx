import { PROFIL } from '../data'
import { useBahasa } from '../bahasa'
import { Ikon } from '../ikon'

export function Hero() {
  const { t } = useBahasa()

  return (
    <section className="hero" id="atas">
      <div className="wadah hero-isi">
        {PROFIL.foto
          ? <img className="lingkaran" src={PROFIL.foto} alt={PROFIL.nama} />
          : <div className="lingkaran" aria-hidden="true">{PROFIL.inisial}</div>}

        <div className="hero-teks">
          <div className="lencana">{t(PROFIL.peran)}</div>
          <h1>{PROFIL.nama}</h1>
          <p className="tagline">{t(PROFIL.tagline)}</p>

          <div className="aksi">
            <a className="tombol tombol-utama" href="#proyek">
              {t({ id: 'Lihat proyek saya', en: 'See my projects' })}
              <Ikon nama="panah" ukuran={17} />
            </a>
            <a className="tombol tombol-garis" href="#kontak">
              {t({ id: 'Hubungi saya', en: 'Contact me' })}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
