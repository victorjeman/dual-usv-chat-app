import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'
import { LearnImage } from '@/app/learn/learn-components/learn-image'

import learnImg from './inheritance.png'

export const Inheritance = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Inheritance</LearnSectionTitle>

      <LearnImage src={learnImg} />
    </LearnSection>
  )
}
