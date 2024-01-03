'use client'

import { useRenderCount } from '@uidotdev/usehooks'

import { Child } from '@/app/learn/react/rendering/components/child '

type Props = {
  timer?: number
}

export const Child1 = ({ timer }: Props) => {
  const renderCount = useRenderCount()

  return (
    <Child
      className='border-blue-500 bg-blue-200'
      name='1'
      timer={timer}
      renderCount={renderCount}></Child>
  )
}
