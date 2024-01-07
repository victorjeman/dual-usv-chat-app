import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground'
import { MediaPlay } from '@/app/learn/html/practice/media/media-play'

import designImg from './media.png'

export const Media = () => {
  return (
    <LearnSection>
      <LearnImage src={designImg} />

      <LearnPlayground>
        <MediaPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
