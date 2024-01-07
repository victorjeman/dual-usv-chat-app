'use client'

import clsx from 'clsx'

export const RenderingChild = ({
  className,
  timer,
  name,
  renderCount,
}: {
  className: string
  timer?: number
  name: string
  renderCount: number
}) => (
  <div
    className={clsx(
      'flex flex-col items-start justify-center border-2 px-5 py-10 opacity-75',
      className,
    )}
    suppressHydrationWarning={true}>
    <p>
      <strong>Child {name}</strong>
    </p>

    {timer ? (
      <p>
        <strong>timer prop</strong>: {timer}
      </p>
    ) : null}

    <p suppressHydrationWarning={true}>
      <strong>rendered</strong>: {renderCount}
    </p>
  </div>
)
