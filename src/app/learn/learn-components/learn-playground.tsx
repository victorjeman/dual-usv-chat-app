type Props = {
  children: React.ReactNode
}

export const LearnPlayground = ({ children }: Props) => {
  return (
    <div>
      <h3 className='font-display mb-6 bg-slate-100 p-2 text-center text-xl tracking-tight text-slate-900'>
        Playground
      </h3>
      {children}
    </div>
  )
}
