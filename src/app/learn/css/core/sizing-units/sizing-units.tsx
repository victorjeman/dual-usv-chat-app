import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnResources } from '@/app/learn/learn-components/learn-resources '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '

import learnImg from './sizing-units.png'

const resources = [{ title: 'Sizing Units | web.dev', href: 'https://web.dev/learn/css/sizing' }]

export const SizingUnits = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Sizing Units</LearnSectionTitle>

      <LearnImage src={learnImg} />

      {/* <LearnPlayground>
      </LearnPlayground> */}

      <LearnResources resources={resources} />
    </LearnSection>
  )
}
