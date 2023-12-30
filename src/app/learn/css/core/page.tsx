import { Styling } from '@/app/learn/css/core/styling/styling '
import { BoxModel } from '@/app/learn/css/core/box-model/box-model '
import { Selectors } from '@/app/learn/css/core/selectors/selectors '
import { LearnPageTitle } from '@/app/learn/learn-components/learn-page-title '
import { Spacing } from '@/app/learn/css/core/spacing/spacing '
import { Cascade } from '@/app/learn/css/core/cascade/cascade '
import { Specificity } from '@/app/learn/css/core/specificity/specificity '
import { Inheritance } from '@/app/learn/css/core/inheritance/inheritance '
import { Color } from '@/app/learn/css/core/color/color '
import { SizingUnits } from '@/app/learn/css/core/sizing-units/sizing-units '
import { ZIndex } from '@/app/learn/css/core/z-index/z-index '
import { Overflow } from '@/app/learn/css/core/overflow/overflow '
import { Typography } from '@/app/learn/css/core/typography/typography '

export default function CoreCssPage() {
  return (
    <section>
      <LearnPageTitle>Learn with Victor - CSS - Core concepts</LearnPageTitle>

      <Styling />

      <BoxModel />

      <Selectors />

      <Cascade />

      <Specificity />

      <Inheritance />

      <Color />

      <SizingUnits />

      <Spacing />

      <ZIndex />

      <Overflow />

      <Typography />
    </section>
  )
}
