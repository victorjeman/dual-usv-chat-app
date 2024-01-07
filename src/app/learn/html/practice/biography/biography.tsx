import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground'
import { BiographyPlay } from '@/app/learn/html/practice/biography/biography-play'

import designImg from './biography.png'

export const Biography = () => {
  return (
    <LearnSection>
      <LearnImage src={designImg} />

      <LearnPlayground>
        <BiographyPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
