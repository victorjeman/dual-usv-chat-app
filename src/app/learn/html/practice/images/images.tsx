import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground'
import { ImagesPlay } from '@/app/learn/html/practice/images/images-play'

import designImg from './images.png'

export const Images = () => {
  return (
    <LearnSection>
      <LearnImage src={designImg} />

      <LearnPlayground>
        <ImagesPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
