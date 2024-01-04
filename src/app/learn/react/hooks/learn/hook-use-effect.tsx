'use client'

import { useEffect, useState } from 'react'
import { Button } from '@mantine/core'

const Child = ({ counter1, counter2 }: { counter1: number; counter2: number }) => {
  const [counter1Updated, setCounter1Updated] = useState(0)

  useEffect(() => {
    setCounter1Updated((prev) => prev + 1)
  }, [counter1])

  useEffect(() => {
    console.log('counter2 updated')
  }, [counter2])

  useEffect(() => {
    console.log("I'm triggered only on first render")
  }, [])

  return (
    <div>
      <p>counter1Updated: {counter1Updated}</p>
      <p>counter2: {counter2}</p>
    </div>
  )
}

const Container = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  return (
    <div>
      <div className='mx-auto mb-5 grid max-w-screen-sm grid-cols-2 gap-5'>
        <Button onClick={() => setCounter1((prev) => prev + 1)}>Increment counter 1</Button>
        <Button onClick={() => setCounter2((prev) => prev + 1)}>Increment counter 2</Button>
      </div>

      <Child counter1={counter1} counter2={counter2} />
    </div>
  )
}

export const HookUseEffect = () => {
  return <Container />
}
