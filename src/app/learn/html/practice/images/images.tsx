import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '

import imagesDesignImg from './images.png'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { ImagesPlay } from '@/app/learn/html/practice/images/images-play '

export const Images = () => {
  return (
    <LearnSection>
      <LearnImage src={imagesDesignImg} />

      <LearnPlayground>
        <ImagesPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
