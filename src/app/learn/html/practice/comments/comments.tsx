import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground'
import { CommentsPlay } from '@/app/learn/html/practice/comments/comments-play'

import designImg from './comments.png'

export const Comments = () => {
  return (
    <LearnSection>
      <LearnImage src={designImg} />

      <LearnPlayground>
        <CommentsPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
