"use client";
import './globals.css';
import { RecoilRoot } from 'recoil'
// import type { Metadata } from 'next'
// export const metadata: Metadata = {
//   title: 'Course_app',
//   description: 'Course app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RecoilRoot>
    <html lang="en">
      <body>{children}</body>
    </html>
    </RecoilRoot>
  )
}
