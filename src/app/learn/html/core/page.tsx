import { LearnPageTitle } from '@/app/learn/learn-components/learn-page-title'
import { LearnPage } from '@/app/learn/learn-components/learn-page'
import { Elements } from '@/app/learn/html/core/elements/elements'
import { Forms } from '@/app/learn/html/core/forms/forms'
import { Semantics } from '@/app/learn/html/core/semantics/semantics'
import { Tables } from '@/app/learn/html/core/tables/tables'

export default function CoreHtmlPage() {
  return (
    <LearnPage title='HTML - Core concepts'>
      <Elements />

      <Tables />

      <Forms />

      <Semantics />
    </LearnPage>
  )
}
