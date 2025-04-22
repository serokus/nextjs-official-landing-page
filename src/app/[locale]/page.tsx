import { Hero } from '@/components/hero'
import { TheAssetRevolution } from '@/components/the-asset-revolution'
import { SecureEfficientDesignedScale } from '@/components/secure-efficient-designed-scale'
import { UnlockingRWAs } from '@/components/unlocking-rwas'
import { DiscoverNexus } from '@/components/discover-nexus'
import { ThinkDifferent } from '@/components/think-different'

export default function Home() {
  return (
    <main className="relative w-full min-h-[calc(100dvh-var(--header-height))]">
      <Hero />
      <TheAssetRevolution />
      <SecureEfficientDesignedScale />
      <UnlockingRWAs />
      <ThinkDifferent />
      <DiscoverNexus />
    </main>
  )
}
