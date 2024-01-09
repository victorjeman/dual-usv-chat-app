import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'

import learnImg from './semantics.png'

export const Semantics = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Semantic</LearnSectionTitle>

      <LearnImage src={learnImg} />
    </LearnSection>
  )
}
