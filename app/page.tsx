import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import CountdownTimer from '@/components/CountdownTimer'
import PersonalDetails from '@/components/PersonalDetails'
import ConfettiButton from '@/components/ConfettiButton'
import FloatingBalloons from '@/components/FloatingBalloons'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Coming Soon | Web Technology Project',
  description: 'Exciting things are on the way. Stay tuned for our Web Technology project!',
}

export default function Home() {
  return (
    <main className={`min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-4 ${poppins.variable} font-sans relative overflow-hidden`}>
      <FloatingBalloons />
      <div className="text-center z-10 max-w-4xl w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-fade-in-down">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-2">NCMT</h2>
          <h3 className="text-xl sm:text-2xl font-medium text-gray-400">Web Technology Project</h3>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-down">
          Coming Soon
        </h1>
        <CountdownTimer />
        <PersonalDetails />
        <ConfettiButton />
      </div>
    </main>
  )
}

