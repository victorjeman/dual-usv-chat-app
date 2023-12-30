import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { FlexWrapPlay } from '@/app/learn/css/flexbox/flex-wrap/flex-wrap-play '

import learnImg from './flex-wrap.png'

export const FlexWrap = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>flex-wrap</LearnSectionTitle>

      <LearnImage src={learnImg} />

      <LearnPlayground>
        <FlexWrapPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
