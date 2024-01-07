import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'
import { LearnImage } from '@/app/learn/learn-components/learn-image'

import learnImg from './overflow.png'

export const Overflow = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Overflow</LearnSectionTitle>

      <LearnImage src={learnImg} />
    </LearnSection>
  )
}
