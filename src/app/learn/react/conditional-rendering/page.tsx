import { LearnPageTitle } from '@/app/learn/learn-components/learn-page-title '
import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '
import { ConditionalRendering1 } from '@/app/learn/react/conditional-rendering/components/conditional-rendering-1 '
import { ConditionalRendering2 } from '@/app/learn/react/conditional-rendering/components/conditional-rendering-2 '
import { ConditionalRendering3 } from '@/app/learn/react/conditional-rendering/components/conditional-rendering-3 '

export default function ConditionalRenderingPage() {
  return (
    <>
      <LearnPageTitle> Learn with Victor - Conditional Rendering</LearnPageTitle>

      <LearnSection>
        <LearnSectionTitle>Conditional Rendering example 1</LearnSectionTitle>
        <ConditionalRendering1 />
      </LearnSection>

      <LearnSection>
        <LearnSectionTitle>Conditional Rendering example 2</LearnSectionTitle>
        <ConditionalRendering2 />
      </LearnSection>

      <LearnSection>
        <LearnSectionTitle>Conditional Rendering for CSS classes with clsx</LearnSectionTitle>
        <ConditionalRendering3 />
      </LearnSection>
    </>
  )
}
