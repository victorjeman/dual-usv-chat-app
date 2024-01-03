import { LearnContainer } from '@/app/learn/learn-components/learn-container '
import { LearnPageTitle } from '@/app/learn/learn-components/learn-page-title '
import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '

import { Rendering1Play } from '@/app/learn/react/rendering/components/rendering-1-play '
import { Rendering2Play } from '@/app/learn/react/rendering/components/rendering-2-play '
import { Rendering3Play } from '@/app/learn/react/rendering/components/rendering-3-play '

export default function RenderingPage() {
  return (
    <>
      <LearnPageTitle> Learn with Victor - Rendering in React</LearnPageTitle>

      <LearnContainer>
        <LearnSection>
          <LearnSectionTitle>Rendering when props are passed to children</LearnSectionTitle>
          <Rendering1Play />
        </LearnSection>

        <LearnSection>
          <LearnSectionTitle>Rendering when no props are passed to children</LearnSectionTitle>

          <Rendering2Play />
        </LearnSection>

        <LearnSection>
          <LearnSectionTitle>Move the state down to avoid renders</LearnSectionTitle>

          <Rendering3Play />
        </LearnSection>
      </LearnContainer>
    </>
  )
}
