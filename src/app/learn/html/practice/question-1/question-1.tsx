import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground'
import { Question1Play } from '@/app/learn/html/practice/question-1/question-1-play'

import designImg from './question-1.png'

export const Question1 = () => {
  return (
    <LearnSection>
      <LearnImage src={designImg} />

      <LearnPlayground>
        <Question1Play />
      </LearnPlayground>
    </LearnSection>
  )
}
