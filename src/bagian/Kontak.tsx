import { KONTAK } from '../data'
import { useBahasa } from '../bahasa'
import { Ikon } from '../ikon'

export function Kontak() {
  const { t } = useBahasa()
  // Sembunyikan kontak yang tautannya belum diisi ("#").
  const tampil = KONTAK.filter(k => k.tautan && k.tautan !== '#')

  return (
    <section className="bagian" id="kontak">
      <div className="wadah">
        <div className="bagian-kepala">
          <div className="garis-aksen" />
          <h2>{t({ id: 'Kontak', en: 'Contact' })}</h2>
          <p>{t({ id: 'Terbuka untuk peluang magang, kerja, atau sekadar berdiskusi.', en: 'Open to internships, job opportunities, or just a chat.' })}</p>
        </div>

        <div className="kontak-peti">
          {tampil.map(k => (
            <a
              className="kontak"
              key={k.label}
              href={k.tautan}
              {...(k.tautan.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              <span className="kontak-ikon"><Ikon nama={k.ikon} /></span>
              <span className="kontak-ket">
                <b>{k.label}</b>
                <span>{k.nilai}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
