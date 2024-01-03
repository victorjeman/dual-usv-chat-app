'use client'

import { useState } from 'react'

const Alert = () => (
  <div role='alert'>
    <div className='rounded-t bg-red-500 px-4 py-2 font-bold text-white'>Danger</div>
    <div className='rounded-b border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700'>
      <p>Something not ideal might be happening.</p>
    </div>
  </div>
)

const Warning = () => (
  <div className='border-l-4 border-orange-500 bg-orange-100 p-4 text-orange-700' role='alert'>
    <p className='font-bold'>Be Warned</p>
    <p>Something not ideal might be happening.</p>
  </div>
)

const Info = () => (
  <div
    className='flex items-center bg-blue-500 px-4 py-3 text-sm font-bold text-white'
    role='alert'>
    <svg
      className='mr-2 h-4 w-4 fill-current'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'>
      <path d='M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z' />
    </svg>
    <p>Something happened that you should know about.</p>
  </div>
)

const Button = ({
  children,
  isActive,
  onClick,
}: {
  children: React.ReactNode
  isActive?: boolean
  onClick: (value: string) => void
}) => {
  const activeClass = isActive ? 'bg-gray-700 text-white' : 'text-gray-700'
  return (
    <button
      className={`inline-block px-4 py-2 text-sm font-medium focus:relative ${activeClass}`}
      onClick={() => onClick('info')}>
      {children}
    </button>
  )
}

const components = {
  alert: <Alert />,
  info: <Info />,
  warning: <Warning />,
  none: '',
}

export const ConditionalRendering2 = () => {
  const [component, setComponent] = useState<'alert' | 'warning' | 'info' | 'none'>('none')

  return (
    <>
      <div className='inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm'>
        <Button onClick={() => setComponent('info')} isActive={component === 'info'}>
          Show info
        </Button>
        <Button onClick={() => setComponent('warning')} isActive={component === 'warning'}>
          Show warning
        </Button>
        <Button onClick={() => setComponent('alert')} isActive={component === 'alert'}>
          Show alert
        </Button>
        <Button onClick={() => setComponent('none')} isActive={component === 'none'}>
          Hide
        </Button>
      </div>

      <div className='my-6'>{components[component]}</div>
    </>
  )
}
