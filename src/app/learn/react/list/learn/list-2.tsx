'use client'

import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ListThumbnail } from '@/app/learn/react/list/learn/list-thumbnail '
import { listPeople } from '@/app/learn/react/list/learn/list-people '
import { Person, PersonWithKey } from '@/app/learn/react/list/learn/list-types '

// Imagine this is an API call that takes a while to return
const getPeopleFromAPI = async () => {
  return listPeople
}

// It's best to create a unique key for each item in the list
// It's important to generate the keys outside the returned JSX
const createPeopleWithKeys = (people: Person[]) => {
  return people.map((person) => ({ ...person, key: uuidv4() }))
}

export const List2 = () => {
  const [people, setPeople] = useState<PersonWithKey[] | []>([])

  useEffect(() => {
    ;(async () => {
      const peopleFromAPI = await getPeopleFromAPI()
      const peopleWithKeys = createPeopleWithKeys(peopleFromAPI)
      setPeople(peopleWithKeys)
    })()
  }, [])

  return (
    <div>
      {people.map((person) => (
        <ListThumbnail key={person.email} person={person} />
      ))}
    </div>
  )
}
