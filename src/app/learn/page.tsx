import Link from 'next/link'

import { LearnPageTitle } from '@/app/learn/learn-components/learn-page-title'
import { LearnSectionTitle } from '@/app/learn/learn-components/learn-section-title'

const html = [
  {
    title: 'HTML core concepts',
    url: '/learn/html/core',
    description: 'Learn the core concepts of HTML. Elements, tables, forms and semantic HTML',
  },
  {
    title: 'Practice with HTML',
    url: '/learn/html/practice',
    description: 'Learn how to use semantic HTML',
  },
]

const css = [
  {
    title: 'CSS core concepts',
    url: '/learn/css/core',
    description: 'Learn the core concepts of CSS',
  },
  {
    title: 'CSS flexbox',
    url: '/learn/css/flexbox',
    description: 'Learn how to use flexbox',
  },
  {
    title: 'CSS grid',
    url: '/learn/css/grid',
    description: 'Learn how to use grid',
  },
  {
    title: 'Tailwind CSS',
    url: '/learn/css/tailwind',
    description: 'Learn how to use tailwind framework',
  },
]

type Props = {
  title: string
  description: string
  url: string
}

const Thumbnail = ({ title, description, url }: Props) => (
  <div className='group relative rounded-xl border border-slate-200 dark:border-slate-800'>
    <div className='absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]'></div>
    <div className='relative overflow-hidden rounded-xl p-6'>
      <svg
        aria-hidden='true'
        viewBox='0 0 32 32'
        fill='none'
        className='h-8 w-8 [--icon-background:theme(colors.white)] [--icon-foreground:theme(colors.slate.900)]'>
        <defs>
          <radialGradient
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            id=':S1:-gradient'
            gradientTransform='matrix(0 21 -21 0 12 3)'>
            <stop stopColor='#0EA5E9'></stop>
            <stop stopColor='#22D3EE' offset='.527'></stop>
            <stop stopColor='#818CF8' offset='1'></stop>
          </radialGradient>
          <radialGradient
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            id=':S1:-gradient-dark'
            gradientTransform='matrix(0 21 -21 0 16 7)'>
            <stop stopColor='#0EA5E9'></stop>
            <stop stopColor='#22D3EE' offset='.527'></stop>
            <stop stopColor='#818CF8' offset='1'></stop>
          </radialGradient>
        </defs>
        <g className='dark:hidden'>
          <circle cx='12' cy='12' r='12' fill='url(#:S1:-gradient)'></circle>
          <path
            d='m8 8 9 21 2-10 10-2L8 8Z'
            fillOpacity='0.5'
            className='fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'></path>
        </g>
        <g className='hidden dark:inline'>
          <path
            d='m4 4 10.286 24 2.285-11.429L28 14.286 4 4Z'
            fill='url(#:S1:-gradient-dark)'
            stroke='url(#:S1:-gradient-dark)'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'></path>
        </g>
      </svg>
      <h2 className='font-display mt-4 text-base text-slate-900 dark:text-white'>
        <Link href={url}>
          <span className='absolute -inset-px rounded-xl'></span>
          {title}
        </Link>
      </h2>
      <p className='mt-1 text-sm text-slate-700 dark:text-slate-400'>{description}</p>
    </div>
  </div>
)

export default function LearnMainPage() {
  return (
    <main className='mx-auto max-w-screen-md'>
      <LearnPageTitle>Learn with Victor</LearnPageTitle>

      <div className='mb-6 mt-14 border-b-2'></div>

      <LearnSectionTitle>HTML</LearnSectionTitle>

      <div className='not-prose  grid grid-cols-1 gap-6 sm:grid-cols-2'>
        {html.map((item, index) => (
          <Thumbnail {...item} key={index} />
        ))}
      </div>

      <div className='mb-6 mt-14 border-b-2'></div>

      <LearnSectionTitle>CSS</LearnSectionTitle>

      <div className='not-prose  grid grid-cols-1 gap-6 sm:grid-cols-2'>
        {css.map((item, index) => (
          <Thumbnail {...item} key={index} />
        ))}
      </div>
    </main>
  )
}
