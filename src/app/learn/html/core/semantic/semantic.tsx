import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { LearnResources } from '@/app/learn/learn-components/learn-resources '

import learnImg from './semantic.png'

const resources = [
  {
    title: 'Semantic HTML',
    href: 'https://www.codecademy.com/learn/learn-html/modules/learn-semantic-html/cheatsheet',
  },
  {
    title: 'Why & When to Use Semantic HTML Elements over Divs',
    href: 'https://www.youtube.com/watch?v=bOUhq46fd5g',
  },
]

export const Semantic = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Semantic</LearnSectionTitle>

      <LearnImage src={learnImg} />

      <LearnResources resources={resources} />
    </LearnSection>
  )
}
