import { LearnContainer } from '@/app/learn/learn-components/learn-container '
import { LearnPageTitle } from '@/app/learn/learn-components/learn-page-title '
import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '

import { Props1 } from '@/app/learn/react/props/learn/props-1 '
import { Props2 } from '@/app/learn/react/props/learn/props-2 '

export default function RenderingPage() {
  return (
    <>
      <LearnPageTitle> Learn with Victor - React props</LearnPageTitle>

      <LearnContainer>
        <LearnSection>
          <LearnSectionTitle>Primitives as props</LearnSectionTitle>
          <Props1 />
        </LearnSection>

        <LearnSection>
          <LearnSectionTitle>Functions as props</LearnSectionTitle>
          <Props2 />
        </LearnSection>
      </LearnContainer>
    </>
  )
}
