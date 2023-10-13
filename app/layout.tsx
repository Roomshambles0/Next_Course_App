import './globals.css';
import AuthContext from './context/AuthContext';
import type { Metadata } from 'next'
import RecoidContextProvider from './context/recoilcontextProvider';
import Navbar from '@/components/Navabar';
import InitUser from '@/components/Inituser';
import InitAdmin from '@/components/Initadmin';


export const metadata: Metadata = {
  title: 'Course_app',
  description: 'Course app',
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 

{
 
  return (
    <html lang="en">
      <body>
        <AuthContext>
        <RecoidContextProvider>
          <Navbar/>
           <InitUser/>
          <InitAdmin/> 
          {children}
          </RecoidContextProvider>
        </AuthContext>
        </body>
    </html>
  )
}
