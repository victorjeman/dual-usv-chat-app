import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'
import { LearnImage } from '@/app/learn/learn-components/learn-image'

import learnImg from './specificity.png'

export const Specificity = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Specificity</LearnSectionTitle>

      <LearnImage src={learnImg} />
    </LearnSection>
  )
}
