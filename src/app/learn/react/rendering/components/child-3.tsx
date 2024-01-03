'use client'

import { useRenderCount } from '@uidotdev/usehooks'

import { Child } from '@/app/learn/react/rendering/components/child '

export const Child3 = () => {
  const renderCount = useRenderCount()

  return (
    <Child className='border-green-500 bg-green-200' name='3' renderCount={renderCount}></Child>
  )
}
