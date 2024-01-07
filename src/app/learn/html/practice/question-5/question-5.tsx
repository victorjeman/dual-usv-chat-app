import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { Question5Play } from '@/app/learn/html/practice/question-5/question-5-play'

import designImg from './question-5.png'

export const Question5 = () => {
  return (
    <LearnSection>
      <LearnImage src={designImg} />

      <Question5Play />
    </LearnSection>
  )
}
