import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '

import heroDesignImg from './hero.png'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { HeroPlay } from '@/app/learn/html/practice/hero/hero-play '

export const Hero = () => {
  return (
    <LearnSection>
      <LearnImage src={heroDesignImg} />

      <LearnPlayground>
        <HeroPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
