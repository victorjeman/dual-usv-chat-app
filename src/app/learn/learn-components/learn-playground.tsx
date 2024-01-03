type Props = {
  children: React.ReactNode
}

export const LearnPlayground = ({ children }: Props) => {
  return (
    <div className='mt-16'>
      <h3 className='mb-6 border-t-2 p-2 pt-6 text-center text-xl font-semibold tracking-tight text-slate-900'>
        [ Playground ]
      </h3>
      {children}
    </div>
  )
}
