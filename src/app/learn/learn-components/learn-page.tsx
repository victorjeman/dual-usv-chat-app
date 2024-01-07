import { LearnPageTitle } from '@/app/learn/learn-components/learn-page-title'

type Props = {
  children: React.ReactNode
  title: string
}

export const LearnPage = ({ children, title }: Props) => {
  return (
    <article>
      <LearnPageTitle>Learn with Victor - {title}</LearnPageTitle>

      <div className='[&>*:nth-child(2n)]:bg-gray-100'>{children}</div>
    </article>
  )
}
