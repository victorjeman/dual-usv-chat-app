import { Hero } from '@/app/learn/html/practice/hero/hero '
import { CommentForm } from '@/app/learn/html/practice/comment-form/comment-form '
import { Comments } from '@/app/learn/html/practice/comments/comments '
import { TakeQuiz } from '@/app/learn/html/practice/take-quiz/take-quiz '
import { Question1 } from '@/app/learn/html/practice/question-1/question-1 '
import { Question2 } from '@/app/learn/html/practice/question-2/question-2 '
import { Question3 } from '@/app/learn/html/practice/question-3/question-3 '
import { Question4 } from '@/app/learn/html/practice/question-4/question-4 '
import { Question5 } from '@/app/learn/html/practice/question-5/question-5 '
import { Question6 } from '@/app/learn/html/practice/question-6/question-6 '
import { Stats } from '@/app/learn/html/practice/stats/stats-start '
import { Movies } from '@/app/learn/html/practice/movies/movies '
import { Address } from '@/app/learn/html/practice/address/address '
import { Biography } from '@/app/learn/html/practice/biography/biography '
import { Filmography } from '@/app/learn/html/practice/filmography/filmography '
import { Media } from '@/app/learn/html/practice/media/media '
import { Images } from '@/app/learn/html/practice/images/images '
import { News } from '@/app/learn/html/practice/news/news '
import { LearnPageTitle } from '@/app/learn/learn-components/learn-page-title '

export default function SemanticHtmlPage() {
  return (
    <main>
      <LearnPageTitle>Learn with Victor - Semantic HTML</LearnPageTitle>

      <Hero />

      <Stats />

      <Movies />

      <Address />

      <Biography />

      <Filmography />

      <Media />

      <Images />

      <News />

      <CommentForm />

      <Comments />

      <TakeQuiz />

      <Question1 />

      <Question2 />

      <Question3 />

      <Question4 />

      <Question5 />

      <Question6 />
    </main>
  )
}
