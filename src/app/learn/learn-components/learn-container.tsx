type Props = {
  children: React.ReactNode
}

export const LearnContainer = ({ children }: Props) => {
  return <div className='[&>*:nth-child(2n)]:bg-gray-100'>{children}</div>
}
