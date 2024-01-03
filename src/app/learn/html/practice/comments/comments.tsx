import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '

import commentsDesignImg from './comments.png'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { CommentsPlay } from '@/app/learn/html/practice/comments/comments-play '

export const Comments = () => {
  return (
    <LearnSection>
      <LearnImage src={commentsDesignImg} />

      <LearnPlayground>
        <CommentsPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
