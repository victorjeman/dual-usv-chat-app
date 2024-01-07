import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'
import { LearnImage } from '@/app/learn/learn-components/learn-image'

import learnImg from './selectors.png'

export const Selectors = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Selectors</LearnSectionTitle>

      <LearnImage src={learnImg} />
    </LearnSection>
  )
}
