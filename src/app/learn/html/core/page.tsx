import { Elements } from '@/app/learn/html/core/elements/elements '
import { Forms } from '@/app/learn/html/core/forms/forms '
import { Semantic } from '@/app/learn/html/core/semantic/semantic '
import { Tables } from '@/app/learn/html/core/tables/tables '
import { LearnPageTitle } from '@/app/learn/learn-components/learn-page-title '

export default function CoreHtmlPage() {
  return (
    <section>
      <LearnPageTitle>Learn with Victor - HTML - Core concepts</LearnPageTitle>

      <div className='[&>*:nth-child(2n)]:bg-gray-100'>
        <Elements />

        <Tables />

        <Forms />

        <Semantic />
      </div>
    </section>
  )
}
