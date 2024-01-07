'use client'

import { useEffect, useState } from 'react'

import { RenderingContainer } from '@/app/learn/react/rendering/learn/rendering-container '
import { RenderingChild1 } from '@/app/learn/react/rendering/learn/rendering-child-1 '
import { RenderingChild2 } from '@/app/learn/react/rendering/learn/rendering-child-2 '
import { RenderingChild3 } from '@/app/learn/react/rendering/learn/rendering-child-3 '

export const Rendering1 = () => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <RenderingContainer>
      <RenderingChild1 timer={timer} />

      <RenderingChild2 timer={timer} />

      <RenderingChild3 />
    </RenderingContainer>
  )
}
