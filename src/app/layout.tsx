import './globals.css'
import { Raleway } from 'next/font/google'
import { Metadata } from 'next/types'
import { Toaster } from 'react-hot-toast'

import { ThemeProvider } from '@/components/theme/provider'
import Header from '@/components/view/header/Header'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://fernandohiroshi.com'),
  description:
    'Full-Stack Developer specializing in Front-end (React, Next.js, Node.js, TypeScript, Tailwind, Prisma, PostgreSQL) and founder of the micro-agency Konbini Code, creating websites and digital solutions. Pursuing a degree in Cybersecurity (Pentesting / Red Team). I also deepen my knowledge in Linux, Nest.js, React Native, MongoDB, Docker, and AWS. With 8+ years in Japan, I bring a multicultural perspective and Japanese proficiency.',
  keywords: [
    'Fernando Hiroshi',
    'Full-Stack Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Konbini Code',
    'Microagency',
    'Web Design',
    'Visual Identity',
    'Small Business',
    'AppSec',
    'Pentest',
    'Elastic Security',
    'AWS',
    'Nest.js',
    'React Native',
    'MongoDB',
    'Japan',
    'Multicultural Experience',
    'Advanced Japanese',
    'SEO',
    'Performance',
    'UX',
    'Landing Pages',
    'APIs',
    'PostgreSQL',
    'Prisma ORM',
    'Express',
    'MVC',
    'HTML',
    'CSS',
    'JavaScript',
    'VueJS',
    'Bootstrap',
    'SASS',
    'LESS',
    'Git',
    'Automation',
    'Testing',
    'Documentation',
    'Project Management',
    'Client Collaboration',
    'Modern Design',
    'Responsiveness',
    'Deploy',
    'Maintenance',
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: 'Fernando Hiroshi - Portfolio',
    description:
      'Explore my portfolio to learn about my experience as a web developer, focusing on modern design and functionality.',
    url: 'https://fernandohiroshi.com',
    siteName: 'Fernando Hiroshi',
    images: [
      {
        url: '/imgs/metadata.webp',
        width: 1200,
        height: 630,
        alt: "Overview of Fernando Hiroshi's Portfolio",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fernando Hiroshi - Portfolio',
    description: 'Web developer showcasing a portfolio that highlights the creation of modern and unique websites.',
    images: ['/imgs/metadata.webp'],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body className={`${raleway.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
