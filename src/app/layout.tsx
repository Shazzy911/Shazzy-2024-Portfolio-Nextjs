import type { Metadata } from 'next'
import { Maven_Pro } from 'next/font/google';
import './styles/globals.scss'
import NavBar from '@/ui/Small-Component/Navbar/NavBar'

// const inter = Inter({ subsets: ['latin'] })
const mavenPro = Maven_Pro({ subsets: ['latin'] }); // Adjust subsets as needed
export const metadata: Metadata = {
  title: 'Portfolio - Shahzaib Saleem ',
  description: 'Shahzaib Saleem. Passionate web developer with expertise in MERN (MongoDB, Express.js, React, Node.js) Stack and TypeScript. Proficient in REST APIs and adept at collaborative projects using Jira. Excellent problem-solving skills and a strong commitment to writing clean and maintainable code.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mavenPro.className}>
        
        <NavBar/>
        {children}</body>
    </html>
  )
}
