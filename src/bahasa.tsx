/**
 * Pengatur bahasa (Indonesia / Inggris).
 * Bahasa terpilih diingat di localStorage agar tidak perlu dipilih ulang.
 */
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'

import type { TeksDwibahasa } from './data'

export type Bahasa = 'id' | 'en'

const KUNCI = 'portofolio_bahasa'

interface KeadaanBahasa {
  bahasa: Bahasa
  ganti: (b: Bahasa) => void
  /** Mengambil teks sesuai bahasa aktif. */
  t: (teks: TeksDwibahasa) => string
  /** Mengambil daftar teks sesuai bahasa aktif. */
  tl: (teks: { id: readonly string[]; en: readonly string[] }) => readonly string[]
}

const Konteks = createContext<KeadaanBahasa | null>(null)

/** Bahasa awal: Indonesia secara bawaan; hanya preferensi tersimpan yang mengubahnya. */
function bahasaAwal(): Bahasa {
  try {
    const tersimpan = localStorage.getItem(KUNCI)
    if (tersimpan === 'id' || tersimpan === 'en') return tersimpan
  } catch { /* mode privat */ }
  // Sengaja SELALU Indonesia sebagai bawaan (bukan menebak dari peramban):
  // pembaca utama situs ini adalah dosen & perekrut Indonesia.
  return 'id'
}

export function BahasaProvider({ children }: { children: ReactNode }) {
  const [bahasa, setBahasa] = useState<Bahasa>('id')

  // Dipasang setelah komponen hidup agar aman saat dirender di server.
  useEffect(() => { setBahasa(bahasaAwal()) }, [])

  // Perbarui atribut <html lang> agar pembaca layar & mesin pencari tahu bahasanya.
  useEffect(() => { document.documentElement.lang = bahasa }, [bahasa])

  const ganti = useCallback((b: Bahasa) => {
    setBahasa(b)
    try { localStorage.setItem(KUNCI, b) } catch { /* mode privat */ }
  }, [])

  const t = useCallback((teks: TeksDwibahasa) => teks[bahasa], [bahasa])
  const tl = useCallback(
    (teks: { id: readonly string[]; en: readonly string[] }) => teks[bahasa],
    [bahasa],
  )

  return <Konteks.Provider value={{ bahasa, ganti, t, tl }}>{children}</Konteks.Provider>
}

export function useBahasa(): KeadaanBahasa {
  const k = useContext(Konteks)
  if (!k) throw new Error('useBahasa harus dipakai di dalam BahasaProvider')
  return k
}
