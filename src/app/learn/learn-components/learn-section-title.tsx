type Props = {
  children: React.ReactNode
}

export const LearnSectionTitle = ({ children }: Props) => {
  return <h1 className='mb-10 p-3 text-center text-3xl font-semibold'> [ {children} ]</h1>
}
