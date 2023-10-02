
import './globals.css';

import type { Metadata } from 'next'
import RecoidContextProvider from './recoilcontextProvider';
export const metadata: Metadata = {
  title: 'Course_app',
  description: 'Course app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <RecoidContextProvider>{children}</RecoidContextProvider>
        </body>
    </html>
  )
}
