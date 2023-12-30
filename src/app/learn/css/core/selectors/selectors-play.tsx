import './selectors-play.scss'

export const SelectorsPlay = () => {
  return (
    <div className='selectors grid grid-cols-3 gap-4'>
      <div className='[ element ] bg-slate-400 p-4 text-center'>first child</div>

      <div className='[ my-class element ] bg-slate-400 p-4 text-center'>
        class=&quot;my-class&quot;
      </div>

      <div className='[ element ] bg-slate-400 p-4 text-center' id='my-id'>
        id=&quot;my-id&quot;
      </div>

      <div className='[ element ] bg-slate-400 p-4 text-center' data-my-attribute>
        [my-attribute]
      </div>

      <div className='[ my-first-letter-selector element ] bg-slate-400 p-4 text-center'>
        first letter
      </div>

      <div className='[ element ] bg-slate-400 p-4 text-center'>last child</div>
    </div>
  )
}
