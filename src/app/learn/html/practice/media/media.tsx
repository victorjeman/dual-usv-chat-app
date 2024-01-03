import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '

import mediaDesignImg from './media.png'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { MediaPlay } from '@/app/learn/html/practice/media/media-play '

export const Media = () => {
  return (
    <LearnSection>
      <LearnImage src={mediaDesignImg} />

      <LearnPlayground>
        <MediaPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
