import './globals.css'
import Navigation from '@/components/Navigation'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/SessionProvider'

export const metadata = {
  title: 'IgniAI Technologies - Empowering Youth Careers',
  description: 'Career consultancy platform for young professionals in Hyderabad',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession()
  
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <SessionProvider session={session}>
          <Navigation />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}