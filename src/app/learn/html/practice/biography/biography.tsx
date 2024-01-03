import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '

import biographyDesignImg from './biography.png'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { BiographyPlay } from '@/app/learn/html/practice/biography/biography-play '

export const Biography = () => {
  return (
    <LearnSection>
      <LearnImage src={biographyDesignImg} />

      <LearnPlayground>
        <BiographyPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
