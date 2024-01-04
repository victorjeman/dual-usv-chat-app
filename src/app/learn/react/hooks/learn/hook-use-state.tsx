'use client'

import { Modal, Button } from '@mantine/core'
import { useState } from 'react'

export const HookUseState = () => {
  const [opened, setOpened] = useState(false)

  // Use an object as state when the properties of the object may change together
  const [person, setPerson] = useState({ name: 'John', age: 25 })

  const openModal = () => setOpened(true)

  const closeModal = () => setOpened(false)

  const updateThePerson = () => {
    // When using objects, you need to spread the object and then change the property you want to change
    const personUpdated = { ...person, age: person.age + 1 }
    setPerson(personUpdated)
  }

  const resetState = () => {
    // You can call multiple set functions in a row
    setPerson({ name: 'John', age: 25 })
    setOpened(false)
  }

  return (
    <div>
      <div className='mx-auto mb-6 max-w-screen-sm'>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
      </div>

      <div className='mx-auto grid max-w-screen-sm grid-cols-2 gap-6'>
        <Button onClick={openModal}>Open modal</Button>
        <Button onClick={() => resetState()}>Reset state</Button>
      </div>

      <Modal opened={opened} onClose={closeModal} title='My fancy modal'>
        <p className='mb-5'>
          My name is {person.name} and I'm {person.age} old
        </p>

        <Button color='yellow' onClick={updateThePerson}>
          Increase {person.name}'s age
        </Button>
      </Modal>
    </div>
  )
}
