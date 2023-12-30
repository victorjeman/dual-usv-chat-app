import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { FlexDirectionPlay } from '@/app/learn/css/flexbox/flex-direction/flex-direction-play '

import learnImg from './flex-direction.png'

export const FlexDirection = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>flexbox-direction</LearnSectionTitle>

      <LearnImage src={learnImg} />

      <LearnPlayground>
        <FlexDirectionPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
