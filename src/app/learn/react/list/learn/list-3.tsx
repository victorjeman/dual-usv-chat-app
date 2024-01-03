import { ListThumbnail } from '@/app/learn/react/list/learn/list-thumbnail '
import { listPeople } from '@/app/learn/react/list/learn/list-people '

// It's not a good idea to use index as a key, especially if the list is dynamic
export const List3 = () => {
  const people = listPeople

  return (
    <div>
      {people.map((person, index) => (
        <ListThumbnail key={index} person={person} />
      ))}
    </div>
  )
}
