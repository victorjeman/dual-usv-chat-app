import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnResources } from '@/app/learn/learn-components/learn-resources '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { SelectorsPlay } from '@/app/learn/css/core/selectors/selectors-play '

import learnImg from './selectors.png'

const resources = [
  { title: 'Cheat Sheet', href: 'https://welcm.uk/downloads/CSS-Selectors-Cheatsheet.pdf' },
]

export const Selectors = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Selectors</LearnSectionTitle>

      <LearnImage src={learnImg} />

      <LearnPlayground>
        <SelectorsPlay />
      </LearnPlayground>

      <LearnResources resources={resources} />
    </LearnSection>
  )
}
