import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground'
import { MoviesPlay } from '@/app/learn/html/practice/movies/movies-play'

import designImg from './movies.png'

export const Movies = () => {
  return (
    <LearnSection>
      <LearnImage src={designImg} />

      <LearnPlayground>
        <MoviesPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
