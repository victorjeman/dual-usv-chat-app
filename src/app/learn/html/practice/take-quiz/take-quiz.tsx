import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { TakeQuizPlay } from '@/app/learn/html/practice/take-quiz/take-quiz-play'

import designImg from './take-quiz.png'

export const TakeQuiz = () => {
  return (
    <LearnSection>
      <LearnImage src={designImg} />

      <TakeQuizPlay />
    </LearnSection>
  )
}
