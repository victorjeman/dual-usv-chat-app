import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { LearnResources } from '@/app/learn/learn-components/learn-resources '

import learnImg from './forms.png'

const resources = [
  {
    title: 'Forms cheat sheet',
    href: 'https://www.codecademy.com/learn/learn-html/modules/learn-html-forms/cheatsheet',
  },
  {
    title: 'Learn HTML forms in 10+ minutes!',
    href: 'https://youtu.be/zIN54lhJtQU?si=KkVwwbnfoCxgqIK-',
  },
]

export const Forms = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Forms</LearnSectionTitle>

      <LearnImage src={learnImg} />

      <LearnResources resources={resources} />
    </LearnSection>
  )
}
