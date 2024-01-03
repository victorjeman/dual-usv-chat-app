import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnResources } from '@/app/learn/learn-components/learn-resources '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { SelectorsPlay } from '@/app/learn/css/core/selectors/selectors-play '

import learnImg from './selectors.png'

const resources = [
  { title: 'Selectors | web.dev', href: 'https://web.dev/learn/css/selectors' },
  {
    title: 'Cheat Sheet 1',
    href: 'https://appletree.or.kr/quick_reference_cards/CSS/CSS%20selectors%20cheatsheet.pdf',
  },
  { title: 'Cheat Sheet 2', href: 'https://welcm.uk/downloads/CSS-Selectors-Cheatsheet.pdf' },
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
