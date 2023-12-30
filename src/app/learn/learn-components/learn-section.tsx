type Props = {
  children: React.ReactNode
}

export const LearnSection = ({ children }: Props) => {
  return (
    <section className='mx-6 mb-20 border-4 border-slate-100 p-6'>
      <div className='mx-auto max-w-screen-md'>{children}</div>
    </section>
  )
}
