import { LearnPageTitle } from '@/app/learn/learn-components/learn-page-title '
import { LearnSection } from '@/app/learn/learn-components/learn-section '
import { MyComponent3 } from '@/app/learn/react/components/my-component-3 '

function MyComponent1() {
  return <div>My Component 1</div>
}

const MyComponent2 = () => {
  return <div>My Component 2</div>
}

export default function ComponentsPage() {
  return (
    <>
      <LearnPageTitle> Learn with Victor - Components in React</LearnPageTitle>

      <LearnSection>
        <MyComponent1 />
        <MyComponent2 />
        <MyComponent3 />
      </LearnSection>
    </>
  )
}
