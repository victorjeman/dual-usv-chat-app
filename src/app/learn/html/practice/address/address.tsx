import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnImage } from '@/app/learn/learn-components/learn-image'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground'
import { AddressPlay } from '@/app/learn/html/practice/address/address-play'

import designImg from './address.png'

export const Address = () => {
  return (
    <LearnSection>
      <LearnImage src={designImg} />

      <LearnPlayground>
        <AddressPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
