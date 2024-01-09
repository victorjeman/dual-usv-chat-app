import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'

import learnImg from './forms.png'

export const Forms = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Forms</LearnSectionTitle>

      <LearnImage src={learnImg} />
    </LearnSection>
  )
}
