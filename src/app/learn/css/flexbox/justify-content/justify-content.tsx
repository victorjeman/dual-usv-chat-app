import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { JustifyContentPlay } from '@/app/learn/css/flexbox/justify-content/justify-content-play '

import learnImg from './justify-content.png'

export const JustifyContent = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>justify-content</LearnSectionTitle>

      <LearnImage src={learnImg} />

      <LearnPlayground>
        <JustifyContentPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
