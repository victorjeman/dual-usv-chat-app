import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'
import { LearnImage } from '@/app/learn/learn-components/learn-image'

import learnImg from './z-index.png'

const resources = [{ title: 'Z-index | web.dev', href: 'https://web.dev/learn/css/z-index' }]

export const ZIndex = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Z-index</LearnSectionTitle>

      <LearnImage src={learnImg} />
    </LearnSection>
  )
}
