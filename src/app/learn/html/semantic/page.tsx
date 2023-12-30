import { Hero } from '@/app/learn/html/semantic/components/1-hero/hero-start '
import { CommentForm } from '@/app/learn/html/semantic/components/10-comment-form/comment-form '
import { Comments } from '@/app/learn/html/semantic/components/11-comments/comments '
import { TakeQuiz } from '@/app/learn/html/semantic/components/12-take-quiz/take-quiz '
import { Question1 } from '@/app/learn/html/semantic/components/13-question-1/question-1 '
import { Question2 } from '@/app/learn/html/semantic/components/14-question-2/question-2 '
import { Question3 } from '@/app/learn/html/semantic/components/15-question-3/question-3 '
import { Question4 } from '@/app/learn/html/semantic/components/16-question-4/question-4 '
import { Question5 } from '@/app/learn/html/semantic/components/17-question-5/question-5 '
import { Question6 } from '@/app/learn/html/semantic/components/18-question-6/question-6 '
import { Stats } from '@/app/learn/html/semantic/components/2-stats/stats-start '
import { Movies } from '@/app/learn/html/semantic/components/3-movies/movies '
import { Address } from '@/app/learn/html/semantic/components/4-address/address '
import { Biography } from '@/app/learn/html/semantic/components/5-biography/biography '
import { Filmography } from '@/app/learn/html/semantic/components/6-filmography/filmography '
import { Media } from '@/app/learn/html/semantic/components/7-media/media '
import { Images } from '@/app/learn/html/semantic/components/8-images/images '
import { News } from '@/app/learn/html/semantic/components/9-news/news '
import { LearnPageTitle } from '@/app/learn/learn-components/learn-page-title '

export default function SemanticHtmlPage() {
  return (
    <section>
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
    </section>
  )
}
