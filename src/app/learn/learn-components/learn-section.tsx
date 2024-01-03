type Props = {
  children: React.ReactNode
}

export const LearnSection = ({ children }: Props) => {
  return (
    <section className='p-x-6 border-b-2 border-gray-200 py-20'>
      <div className='mx-auto max-w-screen-lg'>{children}</div>
    </section>
  )
}
