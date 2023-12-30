import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnResources } from '@/app/learn/learn-components/learn-resources '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '

import learnImg from './specificity.png'

const resources = [
  { title: 'Specificity | web.dev', href: 'https://web.dev/learn/css/specificity' },
]

export const Specificity = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Specificity</LearnSectionTitle>

      <LearnImage src={learnImg} />

      {/* <LearnPlayground>
      </LearnPlayground> */}

      <LearnResources resources={resources} />
    </LearnSection>
  )
}
