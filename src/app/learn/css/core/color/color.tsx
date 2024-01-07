import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'
import { LearnImage } from '@/app/learn/learn-components/learn-image'

import learnImg from './color.png'

export const Color = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Color</LearnSectionTitle>

      <LearnImage src={learnImg} />
    </LearnSection>
  )
}
