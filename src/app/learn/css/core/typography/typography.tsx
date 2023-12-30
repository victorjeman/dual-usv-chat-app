import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnResources } from '@/app/learn/learn-components/learn-resources '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '

import learnImg from './typography.png'

const resources = [{ title: 'Typography | web.dev', href: 'https://web.dev/learn/css/typography' }]

export const Typography = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Typography</LearnSectionTitle>

      <LearnImage src={learnImg} />

      {/* <LearnPlayground>
      </LearnPlayground> */}

      <LearnResources resources={resources} />
    </LearnSection>
  )
}
