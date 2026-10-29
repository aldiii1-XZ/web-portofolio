import { KATEGORI, PROYEK } from '../data'
import { useBahasa } from '../bahasa'
import { Ikon } from '../ikon'

type Item = (typeof PROYEK)[number]

function KartuProyek({ p }: { p: Item }) {
  const { t } = useBahasa()

  return (
    <article
      className="proyek"
      style={{ ['--aksen' as string]: p.aksen }}
    >
      <div className="proyek-kepala">
        <h4>{p.nama}</h4>
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
  )
}

export function Proyek() {
  const { t } = useBahasa()

  return (
    <section className="bagian" id="proyek">
      <div className="wadah">
        <div className="bagian-kepala">
          <div className="garis-aksen" />
          <h2>{t({ id: 'Proyek', en: 'Projects' })}</h2>
          <p>{t({ id: 'Aplikasi yang sudah saya bangun dan uji, dikelompokkan dari yang paling sederhana sampai yang paling rumit. Yang bertanda "Buka aplikasi" bisa langsung dicoba.', en: 'Applications I have built and tested, grouped from the simplest to the most complex. Those marked "Open app" can be tried right away.' })}</p>
        </div>

        {KATEGORI.map(kat => {
          const isi = PROYEK.filter(p => p.tingkat === kat.kunci)
          if (isi.length === 0) return null

          return (
            <div className="kategori" key={kat.kunci} data-kategori={kat.kunci}>
              <div className="kategori-kepala">
                <h3 className="kategori-judul">{t(kat.judul)}</h3>
                <span className="kategori-jumlah">
                  {isi.length} {t({ id: 'proyek', en: 'projects' })}
                </span>
              </div>
              <p className="kategori-ket">{t(kat.keterangan)}</p>

              <div className="proyek-peti">
                {isi.map(p => <KartuProyek key={p.slug} p={p} />)}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
