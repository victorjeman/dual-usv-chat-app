import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '

import filmographyDesignImg from './filmography.png'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { FilmographyPlay } from '@/app/learn/html/practice/filmography/filmography-play '

export const Filmography = () => {
  return (
    <LearnSection>
      <LearnImage src={filmographyDesignImg} />

      <LearnPlayground>
        <FilmographyPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
