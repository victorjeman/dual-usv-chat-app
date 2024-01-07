import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'
import { LearnImage } from '@/app/learn/learn-components/learn-image'

import learnImg from './spacing.png'

export const Spacing = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Spacing</LearnSectionTitle>

      <LearnImage src={learnImg} />
    </LearnSection>
  )
}
