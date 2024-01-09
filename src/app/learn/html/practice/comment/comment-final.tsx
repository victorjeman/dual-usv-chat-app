export const CommentFinal = () => {
  return (
    <section id='comment'>
      <h2>Leave a comment</h2>
      <p>
        Your opinion matters. What’s your opinion about Leonardo DiCaprio’s career? What role did
        you like the most?
      </p>

      <form action='post'>
        <fieldset>
          <label htmlFor='comment'>Your comment</label>
          <textarea name='comment' id='comment' cols={30} rows={10}></textarea>
          <span> max. 500 characters</span>
        </fieldset>

        <button type='submit'>Leave a comment</button>
      </form>
    </section>
  )
}
