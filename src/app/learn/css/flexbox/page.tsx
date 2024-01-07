import { LearnPage } from '@/app/learn/learn-components/learn-page'
import { Flexbox } from '@/app/learn/css/flexbox/flexbox/flexbox'
import { FlexDirection } from '@/app/learn/css/flexbox/flex-direction/flex-direction'
import { FlexWrap } from '@/app/learn/css/flexbox/flex-wrap/flex-wrap'
import { AlignItems } from '@/app/learn/css/flexbox/align-items/align-items'
import { JustifyContent } from '@/app/learn/css/flexbox/justify-content/justify-content'

export default function CssFlexboxPage() {
  return (
    <LearnPage title='CSS - Flexbox'>
      <Flexbox />
      <FlexDirection />
      <FlexWrap />
      <AlignItems />
      <JustifyContent />
    </LearnPage>
  )
}
