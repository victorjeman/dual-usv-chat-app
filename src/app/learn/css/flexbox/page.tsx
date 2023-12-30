import { Flexbox } from '@/app/learn/css/flexbox/flexbox/flexbox '
import { FlexDirection } from '@/app/learn/css/flexbox/flex-direction/flex-direction '
import { FlexWrap } from '@/app/learn/css/flexbox/flex-wrap/flex-wrap '
import { LearnPageTitle } from '@/app/learn/learn-components/learn-page-title '
import { AlignItems } from '@/app/learn/css/flexbox/align-items/align-items '
import { JustifyContent } from '@/app/learn/css/flexbox/justify-content/justify-content '

export default function LayoutPage() {
  return (
    <section>
      <LearnPageTitle>Learn with Victor - CSS - Flexbox</LearnPageTitle>

      <Flexbox />
      <FlexDirection />
      <FlexWrap />
      <AlignItems />
      <JustifyContent />
    </section>
  )
}
