type Props = {
  children: React.ReactNode
  [x: string]: unknown
}

export const LearnButton = ({ children, ...rest }: Props) => (
  <button
    className='group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500'
    {...rest}>
    <span className='absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5'></span>

    <span className='relative block border border-current bg-white px-8 py-3'>{children}</span>
  </button>
)
