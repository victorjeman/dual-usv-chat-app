'use client'

import { useState } from 'react'

import { LearnButton } from '@/app/learn/learn-components/learn-button '

export const Events1 = () => {
  const [count, setCount] = useState(0)

  const onClickHandler = () => {
    console.log('I was clicked')
    setCount((previous) => previous + 1)
  }

  return (
    <div>
      <p>I was clicked {count} times</p>
      <LearnButton onClick={onClickHandler}>Click me</LearnButton>
    </div>
  )
}
