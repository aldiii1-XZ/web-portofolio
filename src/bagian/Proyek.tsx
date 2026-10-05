import { PROYEK } from '../data'
import { useBahasa } from '../bahasa'
import { Ikon } from '../ikon'

export function Proyek() {
  const { t } = useBahasa()

  return (
    <section className="bagian" id="proyek">
      <div className="wadah">
        <div className="bagian-kepala">
          <div className="garis-aksen" />
          <h2>{t({ id: 'Proyek', en: 'Projects' })}</h2>
          <p>{t({ id: 'Aplikasi yang sudah saya bangun dan uji. Yang bertanda "Buka aplikasi" bisa langsung dicoba.', en: 'Applications I have built and tested. Those marked "Open app" can be tried right away.' })}</p>
        </div>

        <div className="proyek-peti">
          {PROYEK.map(p => (
            <article
              className="proyek"
              key={p.slug}
              style={{ ['--aksen' as string]: p.aksen }}
            >
              <div className="proyek-kepala">
                <h3>{p.nama}</h3>
                <span className="proyek-jenis">{t(p.jenis)}</span>
              </div>

              <p>{t(p.deskripsi)}</p>

              <div className="tanda">
                {p.teknologi.map(tek => <span key={tek}>{tek}</span>)}
              </div>

              <div className="proyek-aksi">
                {p.live && (
                  <a className="tautan-kecil utama" href={p.live} target="_blank" rel="noreferrer">
                    {t({ id: 'Buka aplikasi', en: 'Open app' })}
                    <Ikon nama="luar" ukuran={15} />
                  </a>
                )}
                {p.repo && (
                  <a className="tautan-kecil" href={p.repo} target="_blank" rel="noreferrer">
                    <Ikon nama="github" ukuran={15} />
                    {t({ id: 'Kode sumber', en: 'Source code' })}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
