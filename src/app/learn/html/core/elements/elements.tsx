import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'

import learnImg from './elements.png'

export const Elements = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Elements and Structure</LearnSectionTitle>

      <LearnImage src={learnImg} />
    </LearnSection>
  )
}
