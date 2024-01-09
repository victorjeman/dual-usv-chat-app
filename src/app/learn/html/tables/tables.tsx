import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'

import learnImg from './tables.png'

export const Tables = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Tables</LearnSectionTitle>

      <LearnImage src={learnImg} />
    </LearnSection>
  )
}
