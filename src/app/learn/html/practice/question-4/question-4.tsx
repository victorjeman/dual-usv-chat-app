import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { Question4Play } from '@/app/learn/html/practice/question-4/question-4-play'

import designImg from './question-4.png'

export const Question4 = () => {
  return (
    <LearnSection>
      <LearnImage src={designImg} />

      <Question4Play />
    </LearnSection>
  )
}
