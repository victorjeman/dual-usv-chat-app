import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnImage } from '@/app/learn/learn-components/learn-image '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '

import { BoxModelPlay } from '@/app/learn/css/core/box-model/box-model-play '

import learnImg from './box-model.png'
import { LearnResources } from '@/app/learn/learn-components/learn-resources '

const resources = [{ title: 'Box Model | web.dev', href: 'https://web.dev/learn/css/box-model' }]

export const BoxModel = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Box Model</LearnSectionTitle>

      <LearnImage src={learnImg} />

      <LearnPlayground>
        <BoxModelPlay />
      </LearnPlayground>

      <LearnResources resources={resources} />
    </LearnSection>
  )
}
