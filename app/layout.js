import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'IgniAI - AI-Powered IT Solutions',
  description: 'Transform your business with cutting-edge AI solutions, cloud services, and digital innovation.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0F172A] text-white">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}