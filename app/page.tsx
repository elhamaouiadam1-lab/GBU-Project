import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { DatasetOverview } from '@/components/DatasetOverview'
import { RegressionSection } from '@/components/RegressionSection'
import { LogisticSection } from '@/components/LogisticSection'
import { ModelSelectionSection } from '@/components/ModelSelectionSection'
import { ForecastingSection } from '@/components/ForecastingSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <DatasetOverview />
      <RegressionSection />
      <LogisticSection />
      <ModelSelectionSection />
      <ForecastingSection />
      <Footer />
    </main>
  )
}
