import { LearnContainer } from '@/app/learn/learn-components/learn-container '
import { LearnPageTitle } from '@/app/learn/learn-components/learn-page-title '
import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '

import { List1 } from '@/app/learn/react/lists/learn/list-1 '
import { List2 } from '@/app/learn/react/lists/learn/list-2 '
import { List3 } from '@/app/learn/react/lists/learn/list-3 '
import { List4 } from '@/app/learn/react/lists/learn/list-4 '

export default function ListsPage() {
  return (
    <>
      <LearnPageTitle> Learn with Victor - Rendering lists</LearnPageTitle>

      <LearnContainer>
        <LearnSection>
          <LearnSectionTitle>Not great: Use the index</LearnSectionTitle>
          <List1 />
        </LearnSection>

        <LearnSection>
          <LearnSectionTitle>Best: Generate unique keys</LearnSectionTitle>
          <List2 />
        </LearnSection>

        <LearnSection>
          <LearnSectionTitle>Not so good: Use index as key</LearnSectionTitle>
          <List3 />
        </LearnSection>

        <LearnSection>
          <LearnSectionTitle>Bad: Generate "unique" keys inside the returned JSX</LearnSectionTitle>
          <List4 />
        </LearnSection>
      </LearnContainer>
    </>
  )
}
