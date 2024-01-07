import { LearnPageTitle } from '@/app/learn/learn-components/learn-page-title '
import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '

import { Events1 } from '@/app/learn/react/events/learn/events-1 '

export default function EventsPage() {
  return (
    <>
      <LearnPageTitle>Learn with Victor - Events</LearnPageTitle>

      <LearnSection>
        <LearnSectionTitle>Events basic example</LearnSectionTitle>
        <Events1 />
      </LearnSection>
    </>
  )
}
