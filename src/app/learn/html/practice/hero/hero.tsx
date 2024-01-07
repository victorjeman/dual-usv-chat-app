import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground'
import { HeroPlay } from '@/app/learn/html/practice/hero/hero-play'

import designImg from './hero.png'

export const Hero = () => {
  return (
    <LearnSection>
      <LearnImage src={designImg} />

      <LearnPlayground>
        <HeroPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
