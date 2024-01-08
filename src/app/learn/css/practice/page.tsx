import { LearnPage } from '@/app/learn/learn-components/learn-page'
import { LearnSection } from '@/app/learn/learn-components/learn-section'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'
import { PracticeFlex } from '@/app/learn/css/practice/practice-flex/practice-flex'
import { PracticeAlert } from '@/app/learn/css/practice/practice-alert/practice-alert'
import { PracticeMedia } from '@/app/learn/css/practice/practice-media/practice-media'
import { PracticePagination } from '@/app/learn/css/practice/practice-pagination/practice-pagination'
import { PracticeTeam } from '@/app/learn/css/practice/practice-team/practice-team'

export default function CssPracticePage() {
  return (
    <LearnPage title='Practice your CSS skills'>
      <LearnSection>
        <LearnSectionTitle>Practice Flex</LearnSectionTitle>
        <PracticeFlex />
      </LearnSection>

      <LearnSection>
        <LearnSectionTitle>Practice alert</LearnSectionTitle>
        <PracticeAlert />
      </LearnSection>

      <LearnSection>
        <LearnSectionTitle>Practice media</LearnSectionTitle>
        <PracticeMedia />
      </LearnSection>

      <LearnSection>
        <LearnSectionTitle>Practice pagination</LearnSectionTitle>
        <PracticePagination />
      </LearnSection>

      <LearnSection>
        <LearnSectionTitle>Practice team</LearnSectionTitle>
        <PracticeTeam />
      </LearnSection>
    </LearnPage>
  )
}
