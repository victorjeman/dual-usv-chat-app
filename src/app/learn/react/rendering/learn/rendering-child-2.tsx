'use client'

import { useRenderCount } from '@uidotdev/usehooks'

import { RenderingChild } from '@/app/learn/react/rendering/learn/rendering-child '

type Props = {
  timer?: number
}

export const RenderingChild2 = ({ timer }: Props) => {
  const renderCount = useRenderCount()

  return (
    <RenderingChild
      className='border-yellow-500 bg-yellow-200'
      name='2'
      timer={timer}
      renderCount={renderCount}
    />
  )
}
