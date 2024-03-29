import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground'
import { StylingPlay } from '@/app/learn/css/core/styling/styling-play'

import learnImg from './styling.png'

export const Styling = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Styling</LearnSectionTitle>

      <LearnImage src={learnImg} />

      <LearnPlayground>
        <StylingPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
