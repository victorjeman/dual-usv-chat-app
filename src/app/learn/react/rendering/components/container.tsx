import clsx from 'clsx'

type Props = { children: React.ReactNode; cols?: number }

export const Container = ({ children, cols = 3 }: Props) => {
  const colsCls = cols === 3 ? 'grid-cols-3' : 'grid-cols-2'

  return (
    <div className='bg container mx-auto  border-2 border-gray-500 bg-gray-200 p-6 text-center opacity-75'>
      <p className='mb-5'>Container</p>

      <div className={clsx('grid gap-5', colsCls)}>{children}</div>
    </div>
  )
}
