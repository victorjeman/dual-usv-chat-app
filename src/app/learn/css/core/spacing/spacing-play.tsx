export const SpacingPlay = () => {
  return (
    <div className='spacing-play'>
      {/* margin for spacing elements  */}
      <div className='ex-1'>
        <div className='element'>1</div>
        <div className='element'>2</div>
        <div className='element'>3</div>
      </div>

      {/* negative margin */}
      <div className='ex-2'>
        <div className='element'>1</div>
        <div className='element'>2</div>
      </div>

      {/* padding for content */}
      <div className='ex-3'>
        <div>child</div>
      </div>

      {/* positioning */}
      <div className='ex-4'>
        <div className='child child-1'>absolute</div>
        <div className='child child-2'>relative</div>
      </div>

      {/* grid and flexbox */}
      <div className='ex-5'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  )
}
