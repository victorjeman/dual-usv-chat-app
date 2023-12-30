import { LearnSection } from '@/app/learn/learn-components/learn-section '

import './styling.css'
import './styling.scss'
import style from './styling.module.scss'

export const Styling = () => {
  return (
    <LearnSection>
      <div className='grid grid-cols-5 gap-4 text-center'>
        <div className='box'>Box 1</div>

        <div className='box-wrapper'>
          <div className='box'>Box 2</div>
        </div>

        <div className={style.box}>Box 3</div>

        <div className='box' style={{ backgroundColor: 'green' }}>
          Box 4
        </div>

        <div className='box'>Box 5</div>
      </div>
    </LearnSection>
  )
}
