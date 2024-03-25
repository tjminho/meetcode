import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
// import ClentSideProviderTest from '@/components/clentSideProviderTest'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "MeetCoding HomePage",
    template: "%s | MeetCoding"
  },
  description: 'Next.js starter app description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClentSideProviderTest> */}
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        {/* </ClentSideProviderTest> */}
        </body>
    </html>
  )
}