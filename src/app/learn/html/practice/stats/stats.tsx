import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { StatsPlay } from '@/app/learn/html/practice/stats/stats-play'

import designImg from './stats.png'

export const Stats = () => {
  return (
    <LearnSection>
      <LearnImage src={designImg} />

      <StatsPlay />
    </LearnSection>
  )
}
