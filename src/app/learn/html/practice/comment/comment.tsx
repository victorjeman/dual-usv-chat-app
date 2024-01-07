import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { CommentPlay } from '@/app/learn/html/practice/comment/comment-play'

import designImg from './comment.png'

export const CommentForm = () => {
  return (
    <LearnSection>
      <LearnImage src={designImg} />

      <CommentPlay />
    </LearnSection>
  )
}
