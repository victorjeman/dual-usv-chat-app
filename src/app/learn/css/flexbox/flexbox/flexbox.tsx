import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { FlexboxPlay } from '@/app/learn/css/flexbox/flexbox/flexbox-play '

import learnImg from './flexbox.png'

export const Flexbox = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>display: flexbox</LearnSectionTitle>

      <LearnImage src={learnImg} />

      <LearnPlayground>
        <FlexboxPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
