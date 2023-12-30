import Link from 'next/link'

type Props = {
  resources: { title: string; href: string }[]
}

export const LearnResources = ({ resources }: Props) => {
  return (
    <footer className='mt-12  p-3'>
      <h3 className='font-display mb-6 bg-slate-100 p-2 text-center text-xl tracking-tight text-slate-900'>
        Learning Resources
      </h3>

      <ul>
        {resources.map((resource, index) => (
          <Link
            key={index}
            href={resource.href}
            target='_blank'
            className='group my-2 inline-flex text-base font-medium text-blue-600 hover:text-blue-900'>
            {resource.title}
            <span aria-hidden='true' className='ml-2'>
              →
            </span>
          </Link>
        ))}
      </ul>
    </footer>
  )
}
