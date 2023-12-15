import { Inter } from 'next/font/google'
import './globals.css'
import { WorkoutProvider } from '@/utils/WorkoutProvider'
 
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fitness Tracker',
  description: 'Track Your Fitness Progress',
}


const isSSR = () => typeof window === 'undefined'; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WorkoutProvider>
        {!isSSR() && {children}}
        </WorkoutProvider>
      </body>
    </html>
  )
}
