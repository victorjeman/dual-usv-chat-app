import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnResources } from '@/app/learn/learn-components/learn-resources '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '

import learnImg from './inheritance.png'

const resources = [
  { title: 'Inheritance | web.dev', href: 'https://web.dev/learn/css/inheritance' },
]

export const Inheritance = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Inheritance</LearnSectionTitle>

      <LearnImage src={learnImg} />

      {/* <LearnPlayground>
      </LearnPlayground> */}

      <LearnResources resources={resources} />
    </LearnSection>
  )
}
