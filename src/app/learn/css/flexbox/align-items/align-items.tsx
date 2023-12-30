import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { AlignItemsPlay } from '@/app/learn/css/flexbox/align-items/align-items-play '

import learnImg from './align-items.png'

export const AlignItems = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>align-items</LearnSectionTitle>

      <LearnImage src={learnImg} />

      <LearnPlayground>
        <AlignItemsPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
