'use client'

import { LearnButton } from '@/app/learn/learn-components/learn-button '
import { useState } from 'react'

type Props = {
  title: string
  count: number
  toggle: () => void
}

const Notification = (props: Props) => {
  return (
    <div
      className='mx-auto max-w-screen-sm rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8'
      role='alert'>
      <div className='flex items-center gap-4'>
        <span className='shrink-0 rounded-full bg-blue-400 p-2 text-white'>
          <svg
            className='h-4 w-4'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              clipRule='evenodd'
              d='M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z'
              fillRule='evenodd'
            />
          </svg>
        </span>

        <p className='font-medium sm:text-lg'>{props.title}</p>
      </div>

      <p className='mt-4 text-gray-500'>You won {props.count} stars!</p>

      <div className='mt-6 sm:flex sm:gap-4'>
        <button
          className='mt-2 inline-block w-full rounded-lg bg-gray-50 px-5 py-3 text-center text-sm font-semibold text-gray-500 sm:mt-0 sm:w-auto'
          onClick={props.toggle}>
          Close
        </button>
      </div>
    </div>
  )
}

const Container = () => {
  const [title, setTitle] = useState('New message!')
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const increment = () => setCount((previous) => previous + 1)
  const toggle = () => setIsVisible((previous) => !previous)

  return (
    <div>
      <div className='mx-auto mb-5 grid max-w-screen-sm grid-cols-2 gap-5'>
        <LearnButton onClick={increment}>Increment Counter</LearnButton>
        <LearnButton onClick={toggle}>Toggle</LearnButton>
      </div>

      {isVisible && <Notification title={title} count={count} toggle={toggle} />}
    </div>
  )
}

export const Props2 = () => {
  return <Container />
}
