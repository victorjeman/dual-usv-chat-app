import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground'
import { FilmographyPlay } from '@/app/learn/html/practice/filmography/filmography-play'

import designImg from './filmography.png'

export const Filmography = () => {
  return (
    <LearnSection>
      <LearnImage src={designImg} />

      <LearnPlayground>
        <FilmographyPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
