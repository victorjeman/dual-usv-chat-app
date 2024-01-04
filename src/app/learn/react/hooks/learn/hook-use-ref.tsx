'use client'

import { Button, TextInput } from '@mantine/core'
import { useRef } from 'react'

interface Props {}

export const HookUseRef = ({}: Props) => {
  const ref = useRef<HTMLInputElement>(null)

  const focusInput = () => {
    ref.current?.focus()

    console.log('ref.current', ref.current)
    console.log('input', document.querySelector('.mantine-Input-input'))
  }

  return (
    <div>
      <Button onClick={focusInput} className='mb-5'>
        Focus the input
      </Button>

      <TextInput
        ref={ref}
        label='Input label'
        placeholder='Input placeholder'
        className='js-input'
      />
    </div>
  )
}
