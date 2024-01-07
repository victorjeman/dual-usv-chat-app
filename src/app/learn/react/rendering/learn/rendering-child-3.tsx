'use client'

import { useRenderCount } from '@uidotdev/usehooks'

import { RenderingChild } from '@/app/learn/react/rendering/learn/rendering-child '

export const RenderingChild3 = () => {
  const renderCount = useRenderCount()

  return (
    <RenderingChild className='border-green-500 bg-green-200' name='3' renderCount={renderCount} />
  )
}
