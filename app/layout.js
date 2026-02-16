import './globals.css'
import Navigation from '@/components/Navigation'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/SessionProvider'

export const metadata = {
  title: 'Igni AI Technologies - IT Solutions & AI Services',
  description: 'Leading IT services company in Hyderabad specializing in AI solutions, cloud services, and digital transformation',
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