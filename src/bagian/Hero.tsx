import { PROFIL } from '../data'
import { useBahasa } from '../bahasa'
import { Ikon } from '../ikon'

export function Hero() {
  const { t } = useBahasa()

  return (
    <section className="hero" id="atas">
      <div className="wadah hero-isi">
        <div className="lingkaran" aria-hidden="true">{PROFIL.inisial}</div>

        <div className="hero-teks">
          <div className="lencana">{t(PROFIL.peran)}</div>
          <h1>{PROFIL.nama}</h1>
          <div className="peran">{t({ id: `NPM ${PROFIL.npm} · Kelas ${PROFIL.kelas}`, en: `Student ID ${PROFIL.npm} · Class ${PROFIL.kelas}` })}</div>
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
