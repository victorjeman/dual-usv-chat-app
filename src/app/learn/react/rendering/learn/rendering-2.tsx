'use client'

import { useEffect, useState } from 'react'

import { Container } from '@/app/learn/react/rendering/learn/rendering-container '
import { Child1 } from '@/app/learn/react/rendering/learn/rendering-child-1 '
import { Child2 } from '@/app/learn/react/rendering/learn/rendering-child-2 '
import { Child3 } from '@/app/learn/react/rendering/learn/rendering-child-3 '

export const Rendering2 = () => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Container>
      <Child1 />

      <Child2 />

      <Child3 />
    </Container>
  )
}
