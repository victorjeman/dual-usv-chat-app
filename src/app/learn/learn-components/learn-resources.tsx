import Link from 'next/link'

type Props = {
  resources: { title: string; href: string }[]
}

export const LearnResources = ({ resources }: Props) => {
  return (
    <footer className='mt-16 p-3'>
      <h3 className='mb-6 border-t-2 p-2 pt-6 text-center text-xl font-semibold tracking-tight text-slate-900'>
        [ Learning Resources ]
      </h3>

      <ul>
        {resources.map((resource, index) => (
          <li key={index} className='list-disc'>
            <Link
              href={resource.href}
              target='_blank'
              className='group my-2 inline-flex text-base font-medium text-blue-600 hover:text-blue-900'>
              {resource.title}
              <span aria-hidden='true' className='ml-2'>
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
