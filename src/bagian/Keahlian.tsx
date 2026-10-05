import { KEAHLIAN } from '../data'
import { useBahasa } from '../bahasa'

export function Keahlian() {
  const { t } = useBahasa()

  return (
    <section className="bagian" id="keahlian">
      <div className="wadah">
        <div className="bagian-kepala">
          <div className="garis-aksen" />
          <h2>{t({ id: 'Keahlian', en: 'Skills' })}</h2>
          <p>{t({ id: 'Teknologi yang saya pakai sehari-hari untuk membangun aplikasi.', en: 'Technologies I use daily to build applications.' })}</p>
        </div>

        <div className="keahlian-peti">
          {KEAHLIAN.map(k => (
            <div className="kartu" key={k.judul.id}>
              <h3>{t(k.judul)}</h3>
              <ul className="daftar-tanda">
                {k.isi.map(isi => <li key={isi}>{isi}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
