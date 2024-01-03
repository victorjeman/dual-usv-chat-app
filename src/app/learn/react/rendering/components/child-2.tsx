'use client'

import { useRenderCount } from '@uidotdev/usehooks'

import { Child } from '@/app/learn/react/rendering/components/child '

type Props = {
  timer?: number
}

export const Child2 = ({ timer }: Props) => {
  const renderCount = useRenderCount()

  return (
    <Child
      className='border-yellow-500 bg-yellow-200'
      name='2'
      timer={timer}
      renderCount={renderCount}></Child>
  )
}