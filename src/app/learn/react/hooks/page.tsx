import { LearnContainer } from '@/app/learn/learn-components/learn-container '
import { LearnPageTitle } from '@/app/learn/learn-components/learn-page-title '
import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { HookCustom } from '@/app/learn/react/hooks/learn/hook-custom '

import { HookUseEffect } from '@/app/learn/react/hooks/learn/hook-use-effect '
import { HookUseRef } from '@/app/learn/react/hooks/learn/hook-use-ref '
import { HookUseState } from '@/app/learn/react/hooks/learn/hook-use-state '

export default function ListsPage() {
  return (
    <>
      <LearnPageTitle> Learn with Victor - Built-in React Hooks</LearnPageTitle>

      <LearnContainer>
        <LearnSection>
          <LearnSectionTitle>useState</LearnSectionTitle>
          <HookUseState />
        </LearnSection>

        <LearnSection>
          <LearnSectionTitle>useEffect</LearnSectionTitle>
          <HookUseEffect />
        </LearnSection>

        <LearnSection>
          <LearnSectionTitle>useRef</LearnSectionTitle>
          <HookUseRef />
        </LearnSection>

        <LearnSection>
          <LearnSectionTitle>Custom hooks</LearnSectionTitle>
          <HookCustom />
        </LearnSection>
      </LearnContainer>
    </>
  )
}
