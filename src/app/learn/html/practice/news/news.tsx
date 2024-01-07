import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground'
import { NewsPlay } from '@/app/learn/html/practice/news/news-play'

import designImg from './news.png'

export const News = () => {
  return (
    <LearnSection>
      <LearnImage src={designImg} />

      <LearnPlayground>
        <NewsPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
