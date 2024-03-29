import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { theme } from '../theme'

import './globals.css'
import '@mantine/core/styles.css'

const inter = Inter({ subsets: ['latin'] })

const grotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learn Front-End with Victor Jeman',
  description: 'Learning app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
      </head>

      <body className={(inter.className, grotesk.className)}>
        <MantineProvider theme={theme}>
          <main>{children}</main>
        </MantineProvider>
      </body>
    </html>
  )
}
