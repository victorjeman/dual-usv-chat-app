import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { Question3Play } from '@/app/learn/html/practice/question-3/question-3-play'

import designImg from './question-3.png'

export const Question3 = () => {
  return (
    <LearnSection>
      <LearnImage src={designImg} />

      <Question3Play />
    </LearnSection>
  )
}
