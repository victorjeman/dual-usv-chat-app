import { v4 as uuidv4 } from 'uuid'

import { ListThumbnail } from '@/app/learn/react/lists/learn/list-thumbnail '
import { listPeople } from '@/app/learn/react/lists/learn/list-people '

// It's not a good idea to generate the key inside the returned JSX
export const List4 = () => {
  const people = listPeople

  return (
    <div>
      {people.map((person) => (
        <ListThumbnail key={uuidv4()} person={person} />
      ))}
    </div>
  )
}
