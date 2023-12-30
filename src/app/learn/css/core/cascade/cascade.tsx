import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '

import learnImg from './cascade.png'
import learnImg2 from './cascade-2.png'
import { LearnResources } from '@/app/learn/learn-components/learn-resources '

const resources = [
  { title: 'The cascade | web.dev', href: 'https://web.dev/learn/css/the-cascade' },
]

export const Cascade = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>The cascade</LearnSectionTitle>

      <LearnImage src={learnImg} />

      <LearnImage src={learnImg2} />

      <LearnResources resources={resources} />
    </LearnSection>
  )
}
