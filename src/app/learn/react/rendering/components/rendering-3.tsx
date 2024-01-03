'use client'

import { useEffect, useState } from 'react'

import { Container } from '@/app/learn/react/rendering/components/container '
import { Child1 } from '@/app/learn/react/rendering/components/child-1 '
import { Child2 } from '@/app/learn/react/rendering/components/child-2 '
import { Child3 } from '@/app/learn/react/rendering/components/child-3 '

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
        <Child1 timer={timer} />

        <Child2 timer={timer} />
      </div>
    </div>
  )
}

export const Rendering3 = () => {
  return (
    <Container cols={2}>
      <ContainerWithState />

      <Child3 />
    </Container>
  )
}
