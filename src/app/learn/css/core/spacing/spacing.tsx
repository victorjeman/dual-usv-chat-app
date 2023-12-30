import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnResources } from '@/app/learn/learn-components/learn-resources '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { SpacingPlay } from '@/app/learn/css/core/spacing/spacing-play '

import learnImg from './spacing.png'

const resources = [{ title: 'Spacing | web.dev', href: 'https://web.dev/learn/css/spacing' }]

export const Spacing = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Spacing</LearnSectionTitle>

      <LearnImage src={learnImg} />

      <LearnPlayground>
        <SpacingPlay />
      </LearnPlayground>

      <LearnResources resources={resources} />
    </LearnSection>
  )
}
