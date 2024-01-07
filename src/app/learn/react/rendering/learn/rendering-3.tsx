'use client'

import { useEffect, useState } from 'react'

import { RenderingContainer } from '@/app/learn/react/rendering/learn/rendering-container '
import { RenderingChild1 } from '@/app/learn/react/rendering/learn/rendering-child-1 '
import { RenderingChild2 } from '@/app/learn/react/rendering/learn/rendering-child-2 '
import { RenderingChild3 } from '@/app/learn/react/rendering/learn/rendering-child-3 '

const ContainerWithState = () => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className=' border-orange-500 bg-orange-200 p-5'>
      <p className='pb-4'>Container with state</p>

      <div className='grid grid-cols-2 gap-5'>
        <RenderingChild1 timer={timer} />

        <RenderingChild2 timer={timer} />
      </div>
    </div>
  )
}

export const Rendering3 = () => {
  return (
    <RenderingContainer cols={2}>
      <ContainerWithState />

      <RenderingChild3 />
    </RenderingContainer>
  )
}
