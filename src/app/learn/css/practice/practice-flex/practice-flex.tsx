import './practice-flex.scss'

// TASK 1
// Create a grid with 2 columns and 1 row
// The columns should be 50% and 50% of the width of the grid
// The gap between the columns should be 2rem
// The space between the columns and the edge of the grid should be 1.5rem
// The columns should have a height of 200px
// The columns should have a background color of #e5e7eb

// TASK 2
// Create a grid with 3 columns and 1 row
// Keep the same styles as the previous grid

// TASK 3
// Create a grid with 4 columns and 1 row
// Keep the same styles as the previous grid

// TASK 4
// Create a grid with 2 columns and 1 row
// One column should be 2x the width of the other column

// TIPS
// https://www.hyperui.dev/components/application-ui/grids

export const PracticeFlex = () => {
  return (
    <section className='practice-flex'>
      <div className='my-grid-1'>
        <div className='item'>121212</div>
        <div className='item'>1212121212121</div>
      </div>

      <div className='my-grid-2'></div>

      <div className='my-grid-3'></div>

      <div className='my-grid-4'></div>
    </section>
  )
}
