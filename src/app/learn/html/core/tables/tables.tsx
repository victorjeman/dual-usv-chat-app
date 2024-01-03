import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { LearnResources } from '@/app/learn/learn-components/learn-resources '

import learnImg from './tables.png'

const resources = [
  {
    title: 'Tables cheat sheet',
    href: 'https://www.codecademy.com/learn/learn-html/modules/learn-html-tables/cheatsheet',
  },
]

export const Tables = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Tables</LearnSectionTitle>

      <LearnImage src={learnImg} />

      <LearnResources resources={resources} />
    </LearnSection>
  )
}
