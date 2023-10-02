
import './globals.css';

import type { Metadata } from 'next'
import RecoidContextProvider from './recoilcontextProvider';
import Navbar from '@/components/Navabar';
import InitAdmin from '@/components/Initadmin';
import InitUser from '@/components/Inituser';

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
        <RecoidContextProvider><Navbar /> <InitUser /> <InitAdmin/>{children}</RecoidContextProvider>
        </body>
    </html>
  )
}
