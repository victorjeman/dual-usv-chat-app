import styles from './demo-landing-page.module.scss'

export const DemoLandingPagePlay = () => {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        {/* BOOK */}

        <div className={styles.bgGrey}>
          <div className={styles.bookContainer}>
            <div className={styles.bookBg}></div>

            <img
              src='https://primer.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcover.63d6cb7d.png&w=1080&q=75'
              alt='The cover of a book'
              className={styles.bookImg}
            />
          </div>

          {/* QUOTE */}
          <figure className={styles.mainQuote}>
            <div className={styles.mainQuoteStars}>
              <svg aria-hidden='true' viewBox='0 0 20 20' className={styles.mainQuoteStar}>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>

              <svg aria-hidden='true' viewBox='0 0 20 20' className={styles.mainQuoteStar}>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>

              <svg aria-hidden='true' viewBox='0 0 20 20' className={styles.mainQuoteStar}>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>

              <svg aria-hidden='true' viewBox='0 0 20 20' className={styles.mainQuoteStar}>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>

              <svg aria-hidden='true' viewBox='0 0 20 20' className={styles.mainQuoteStar}>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
            </div>

            <blockquote className={styles.mainQuoteText}>
              “This method of designing icons is genius. I wish I had known this method a lot
              sooner.”
            </blockquote>

            <figcaption className={styles.mainQuoteAuthor}>
              <strong className={styles.mainQuoteAuthorLeft}>Stacey Solomon</strong>
              <span className={styles.mainQuoteAuthorRight}>, Founder at Retail Park</span>
            </figcaption>
          </figure>
        </div>

        {/* INTRO */}
        <div className={styles.intro}>
          <h1 className={styles.introHeading}>Get lost in the world of icon design.</h1>

          <p className={styles.introSubheading}>
            A book and video course that teaches you how to design your own icons from scratch.
          </p>

          <div className={styles.introBtns}>
            <a className={styles.introMainBtn} href='#'>
              Get sample chapter
            </a>

            <a className={styles.introSecondaryBtn} href='#'>
              Buy book
            </a>
          </div>
        </div>

        {/* NAVIGATION */}
        <ol role='list' className={styles.navigation}>
          <li className={styles.navigationItem}>
            <a href='#table-of-contents' className={styles.navigationLink}>
              Contents
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href='#screencasts' className={styles.navigationLink}>
              Screencasts
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href='#resources' className={styles.navigationLink}>
              Resources
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href='#pricing' className={styles.navigationLink}>
              Pricing
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href='#author' className={styles.navigationLink}>
              Author
            </a>
          </li>
        </ol>
      </header>
    </article>
  )
}
