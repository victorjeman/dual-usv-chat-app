import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { Question6Play } from '@/app/learn/html/practice/question-6/question-6-play'

import designImg from './question-6.png'

export const Question6 = () => {
  return (
    <LearnSection>
      <LearnImage src={designImg} />

      <Question6Play />
    </LearnSection>
  )
}
