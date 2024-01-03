import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { Question2Play } from '@/app/learn/html/practice/question-2/question-2-play '

import question2DesignImg from './question-2.png'

export const Question2 = () => {
  return (
    <LearnSection>
      <LearnImage src={question2DesignImg} />

      <LearnPlayground>
        <Question2Play />
      </LearnPlayground>
    </LearnSection>
  )
}
