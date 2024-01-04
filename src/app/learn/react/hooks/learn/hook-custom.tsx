'use client'

import { useOs, useViewportSize } from '@mantine/hooks'

// Analyze this hook:
// https://github.com/juliencrn/usehooks-ts/blob/master/packages/usehooks-ts/src/useCounter/useCounter.ts

export const HookCustom = () => {
  const os = useOs()
  const { height, width } = useViewportSize()

  return (
    <div>
      <p>
        Your os is <b>{os}</b>
      </p>

      <p>
        Width: {width}, height: {height}
      </p>
    </div>
  )
}
