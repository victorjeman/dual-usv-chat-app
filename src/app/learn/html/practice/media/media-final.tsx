export const MediaFinal = () => {
  return (
    <section id='media'>
      <h2>Media</h2>
      <a href='/'>See All</a>

      <div>
        <article>
          <header>
            <h3>Career retrospective</h3>
            <span>1:44</span>
          </header>

          <img src='' alt='A studio with microphones' />
        </article>

        <video controls width='250'>
          <source src='video.webm' type='video/webm' />
          <source src='video.mp4' type='video/mp4' />
          Download the
          <a href='video.webm'>WEBM</a>
          or
          <a href='video.mp4'>MP4</a>
          video.
        </video>
      </div>

      <ul>
        <li>
          <article>
            <h1>Once upon a time</h1>
            <img src='/' alt='Once upon a time' />
            <a href='/'>Full podcast</a>
          </article>
        </li>

        <li>
          <article>
            <h1>Something else</h1>
            <img src='/' alt='Something else' />
            <a href='/'>See full video</a>
          </article>
        </li>
      </ul>
    </section>
  )
}
