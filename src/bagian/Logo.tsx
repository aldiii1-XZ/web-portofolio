/**
 * Logo "AYR" (inisial Aldi Yonatan Rusnawan) + garis dasar bergradasi.
 * Berkas gambarnya ada di public/logo.svg — sudah berupa vektor murni,
 * jadi bentuknya sama di semua perangkat (tidak bergantung font).
 */
export function Logo({ tinggi = 30 }: { tinggi?: number }) {
  return (
    <img
      src="/logo.svg"
      alt="Aldi Yonatan Rusnawan"
      style={{ height: tinggi, width: 'auto', display: 'block' }}
    />
  )
}
