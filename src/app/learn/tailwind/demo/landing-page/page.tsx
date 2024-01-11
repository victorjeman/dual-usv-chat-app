// SECTION 1

// className 1: flex items-center justify-center gap-6 bg-slate-400 py-2
const Nav = ({ children }: { children: React.ReactNode }) => (
  <ul className='1 flex h-16 items-center justify-center gap-6 bg-slate-400'>{children}</ul>
)

// className: inline-block border-2 px-4 py-2 text-gray-900
const NavAnchor = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a className='1 rounded-3xl border-2 p-2 hover:text-red-700' href={href}>
    {children}
  </a>
)

// SECTION 2

// className 1: bg-green-200 py-14
const Jobs = ({ children }: { children: React.ReactNode }) => (
  <section className='1 bg-green-200 py-14'>{children}</section>
)

// className 1: mx-auto w-full max-w-screen-md px-5
const JobsContainer = ({ children }: { children: React.ReactNode }) => (
  <div className='mx-auto max-w-screen-md px-5'>{children}</div>
)

// className 1: text-center
// className 2: mx-auto text-2xl font-bold
// className 3: mt-1 text-lg text-black/50
const JobsIntro = () => (
  <div className='1 text-center'>
    <h2 className='2 text-2xl font-bold'>Thousands of dreams jobs available now</h2>

    <p className='3 mt-1 text-lg text-black/80'>Browse some featured jobs</p>
  </div>
)

// className 1:
const JobsGrid = ({ children }: { children: React.ReactNode }) => (
  <div className='1 mt-10 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 '>{children}</div>
)

// className 1: flex flex-col items-center justify-between rounded-2xl border border-transparent bg-white px-5 py-8 transition-all
// className 2: text-lg text-black
// className 3: text-sm
const JobsThumbnail = () => (
  <div className='1 flex h-40 flex-col items-center justify-center rounded-md bg-white p-4 text-center transition-all hover:bg-red-900/50'>
    <h3 className='2 '>Designs and Art</h3>
    <h4 className='3 text-sm'>653 open positions</h4>
  </div>
)

// className 1: mt-8 flex justify-center
// className 2: inline-flex justify-center rounded-full border border-yellow-200 bg-yellow-200 px-8 py-3 text-black hover:border-black
const JobsBrowse = () => (
  <div className='1 '>
    <a className='2 ' href='/#'>
      Browse more Categories
    </a>
  </div>
)

export default function TailwindDemoChatPage() {
  return (
    <>
      <header>
        <Nav>
          <li>
            <NavAnchor href='#'>Item 1</NavAnchor>
          </li>

          <li>
            <NavAnchor href='#'>Item 2</NavAnchor>
          </li>

          <li>
            <NavAnchor href='#'>Item 3</NavAnchor>
          </li>

          <li>
            <NavAnchor href='#'>Item 4</NavAnchor>
          </li>
        </Nav>
      </header>

      <Jobs>
        <JobsContainer>
          <JobsIntro />

          <JobsGrid>
            <JobsThumbnail />
            <JobsThumbnail />
            <JobsThumbnail />
            <JobsThumbnail />
            <JobsThumbnail />
            <JobsThumbnail />
          </JobsGrid>

          <JobsBrowse />
        </JobsContainer>
      </Jobs>

      <article className='c-card m-4 cursor-pointer'>
        <header className='c-card__header'>
          <img
            src='https://via.placeholder.com/350x200'
            className='c-card__image'
            alt='Card Image'
          />
        </header>

        <div className='c-card__body'>
          <h2 className='c-card__title'>Card</h2>
          <p className='c-card__subtitle'>initial component</p>
          <p className='c-card__intro'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <footer className='c-card__footer'>Footer</footer>
      </article>
    </>
  )
}
