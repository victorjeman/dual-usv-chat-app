import { ListThumbnail } from '@/app/learn/react/lists/learn/list-thumbnail '
import { listPeople } from '@/app/learn/react/lists/learn/list-people '

// Using the email could work if we are sure that the email is unique
export const List1 = () => {
  const people = listPeople

  return (
    <div>
      {people.map((person) => (
        <ListThumbnail key={person.email} person={person} />
      ))}
    </div>
  )
}
