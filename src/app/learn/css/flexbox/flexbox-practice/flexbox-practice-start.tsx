import { LearnPlayground } from '@/app/learn/learn-components/learn-playground '
import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title '

export const FlexboxPracticeStart = () => {
  return (
    <LearnSection>
      <LearnSectionTitle>Flexbox Practice Start</LearnSectionTitle>

      <LearnPlayground>
        <section className='flexbox-practice-start'>
          {/* Practice 1 */}
          <div></div>

          {/* Practice 2 */}
          <div></div>
        </section>
      </LearnPlayground>
    </LearnSection>
  )
}
