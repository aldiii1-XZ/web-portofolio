import { BahasaProvider } from './bahasa'
import { BilahAtas } from './bagian/BilahAtas'
import { Hero } from './bagian/Hero'
import { Tentang } from './bagian/Tentang'
import { Keahlian } from './bagian/Keahlian'
import { Proyek } from './bagian/Proyek'
import { Kontak } from './bagian/Kontak'
import { Kaki } from './bagian/Kaki'

export function App() {
  return (
    <BahasaProvider>
      <BilahAtas />
      <main>
        <Hero />
        <Tentang />
        <Keahlian />
        <Proyek />
        <Kontak />
      </main>
      <Kaki />
    </BahasaProvider>
  )
}
