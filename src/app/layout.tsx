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
    'Full-Stack Developer with a Front-End focus and founder of Konbini Code. Experienced with React, Next.js, TypeScript, Tailwind CSS, Node.js, PostgreSQL, and Prisma, with optimized deployments on Vercel. Currently pursuing a degree in Cybersecurity and Defense Management Technology, applying OWASP Top 10 and ISO/IEC 27001. International experience in Japan (8 years) and interest in defensive cybersecurity (Blue Team) and the strategic use of AI.',
  keywords: [
    'Fernando Hiroshi',
    'Fernando Hiroshi Takeda',
    'Full-Stack Developer',
    'Front-End',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'Prisma',
    'Tailwind CSS',
    'Vercel',
    'Konbini Code',
    'OWASP Top 10',
    'ISO/IEC 27001',
    'Cybersecurity',
    'Information Security',
    'Blue Team',
    'JWT',
    'Authentication',
    'REST APIs',
    'SEO',
    'Performance',
    'Accessibility',
    'Web Projects',
    'Landing Pages',
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
    title: 'Fernando Hiroshi Takeda — Full-Stack Developer',
    description:
      'Full-Stack Developer (React, Next.js, TypeScript, Node.js, Prisma, PostgreSQL, Tailwind) focused on performance, SEO, and security. Founder of Konbini Code.',
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
    title: 'Fernando Hiroshi Takeda — Full-Stack Developer',
    description:
      'Full-Stack (React, Next.js, TypeScript, Node.js, Prisma, PostgreSQL, Tailwind). Information Security: OWASP Top 10 and ISO/IEC 27001. Founder of Konbini Code.',
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
