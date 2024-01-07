import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground'
import { BoxModelPlay } from '@/app/learn/css/core/box-model/box-model-play'

import learnImg from './box-model.png'

export const BoxModel = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Box Model</LearnSectionTitle>

      <LearnImage src={learnImg} />

      <LearnPlayground>
        <BoxModelPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
