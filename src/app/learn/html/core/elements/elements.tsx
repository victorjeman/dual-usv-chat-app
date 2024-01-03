import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { LearnResources } from '@/app/learn/learn-components/learn-resources '

import learnImg from './elements.png'

const resources = [
  {
    title: 'Elements and Structure',
    href: 'https://www.codecademy.com/learn/learn-html/modules/learn-html-elements/cheatsheet',
  },
  {
    title: 'HTML elements reference',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
  },
]

export const Elements = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Elements and Structure</LearnSectionTitle>

      <LearnImage src={learnImg} />

      <LearnResources resources={resources} />
    </LearnSection>
  )
}
