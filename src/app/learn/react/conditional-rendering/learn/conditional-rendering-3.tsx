'use client'

import { useState } from 'react'
import clsx from 'clsx'

const Button = ({
  children,
  isActive,
  onClick,
}: {
  children: React.ReactNode
  isActive?: boolean
  onClick: (value: string) => void
}) => {
  return (
    <button
      className={clsx('inline-block px-4 py-2 text-sm font-medium ', {
        'bg-gray-700 text-white': isActive,
        'text-gray-700': !isActive,
      })}
      onClick={() => onClick('info')}>
      {children}
    </button>
  )
}

export const ConditionalRendering3 = () => {
  const [component, setComponent] = useState<'alert' | 'warning' | 'info' | 'none'>('none')

  return (
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
  )
}
