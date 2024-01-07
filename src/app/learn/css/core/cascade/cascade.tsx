import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'

import learnImg from './cascade.png'
import learnImg2 from './cascade-2.png'

export const Cascade = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>The cascade</LearnSectionTitle>

      <LearnImage src={learnImg} />

      <LearnImage src={learnImg2} />
    </LearnSection>
  )
}
