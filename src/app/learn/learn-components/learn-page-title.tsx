type Props = {
  children: React.ReactNode
}

export const LearnPageTitle = ({ children }: Props) => {
  return <h1 className='my-7 text-center text-4xl'>{children}</h1>
}
