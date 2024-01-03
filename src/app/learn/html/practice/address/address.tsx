import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '

import addressDesignImg from './address.png'
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { AddressPlay } from '@/app/learn/html/practice/address/address-play '

export const Address = () => {
  return (
    <LearnSection>
      <LearnImage src={addressDesignImg} />

      <LearnPlayground>
        <AddressPlay />
      </LearnPlayground>
    </LearnSection>
  )
}
