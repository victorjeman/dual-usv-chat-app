import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'
import { LearnImage } from '@/app/learn/learn-components/learn-image'

import learnImg from './typography.png'

export const Typography = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Typography</LearnSectionTitle>

      <LearnImage src={learnImg} />
    </LearnSection>
  )
}
