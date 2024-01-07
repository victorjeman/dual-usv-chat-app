import { LearnContainer } from '@/app/learn/learn-components/learn-container '
import { LearnPageTitle } from '@/app/learn/learn-components/learn-page-title '
import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '

import { Rendering1 } from '@/app/learn/react/rendering/learn/rendering-1 '
import { Rendering2 } from '@/app/learn/react/rendering/learn/rendering-2 '
import { Rendering3 } from '@/app/learn/react/rendering/learn/rendering-3 '

export default function RenderingPage() {
  return (
    <>
      <LearnPageTitle> Learn with Victor - Rendering in React</LearnPageTitle>

      <LearnContainer>
        <LearnSection>
          <LearnSectionTitle>Rendering when props are passed to children</LearnSectionTitle>
          <Rendering1 />
        </LearnSection>

        <LearnSection>
          <LearnSectionTitle>Rendering when no props are passed to children</LearnSectionTitle>

          <Rendering2 />
        </LearnSection>

        <LearnSection>
          <LearnSectionTitle>Move the state down to avoid renders</LearnSectionTitle>

          <Rendering3 />
        </LearnSection>
      </LearnContainer>
    </>
  )
}
