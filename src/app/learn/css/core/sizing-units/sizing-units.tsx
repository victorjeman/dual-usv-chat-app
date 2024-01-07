import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'
import { LearnImage } from '@/app/learn/learn-components/learn-image'

import learnImg from './sizing-units.png'

export const SizingUnits = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Sizing Units</LearnSectionTitle>

      <LearnImage src={learnImg} />
    </LearnSection>
  )
}
