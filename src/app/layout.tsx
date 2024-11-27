import './globals.css'
import { Raleway } from 'next/font/google'
import { Metadata } from 'next/types'
import { Toaster } from 'react-hot-toast'

import { ThemeProvider } from '@/components/theme/provider'
import Header from '@/components/view/header/Header'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  description:
    'Fernando Hiroshi is a web developer specializing in front-end development, with over 3 years of experience creating modern and unique websites, featuring innovative design and an underground approach.',
  keywords: [
    'Fernando Hiroshi',
    'Web Developer',
    'Portfolio',
    'Front-End Development',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'JavaScript',
    'Sass',
    'Node.js',
    'Figma',
    'Development Experience',
    'Innovative Web Design',
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
        url: 'https://imgix.cosmicjs.com/06774480-7c8c-11ef-beb8-f3894cda4d77-fernandohiroshiportfolio.png',
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
    images: ['https://imgix.cosmicjs.com/06774480-7c8c-11ef-beb8-f3894cda4d77-fernandohiroshiportfolio.png'],
  },
  icons: {
    icon: 'https://imgix.cosmicjs.com/503b4b60-749f-11ef-98d9-cbcb72f3073e-logo.png',
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
