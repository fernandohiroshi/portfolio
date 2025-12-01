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
    'Desenvolvedor Full-Stack com foco em Front-End e idealizador da Konbini Code. Experiência com React, Next.js, TypeScript, Tailwind CSS, Node.js, PostgreSQL e Prisma, com deploys otimizados na Vercel. Graduação em Segurança da Informação, aplicando OWASP Top 10 e ISO/IEC 27001. Vivência no Japão (8 anos) e interesse em cibersegurança defensiva (Blue Team) e uso estratégico de IA.',
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
    title: 'Fernando Hiroshi Takeda — Desenvolvedor Full-Stack',
    description:
      'Full-Stack (React, Next.js, TypeScript, Node.js, Prisma, PostgreSQL, Tailwind) com foco em performance, SEO e segurança. Idealizador da Konbini Code.',
    url: 'https://fernandohiroshi.com',
    siteName: 'Fernando Hiroshi',
    images: [
      {
        url: '/imgs/metadata.webp',
        width: 1200,
        height: 630,
        alt: 'Visão geral do portfólio de Fernando Hiroshi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fernando Hiroshi Takeda — Desenvolvedor Full-Stack',
    description:
      'Full-Stack (React, Next.js, TypeScript, Node.js, Prisma, PostgreSQL, Tailwind). Segurança da Informação: OWASP Top 10 e ISO/IEC 27001. Idealizador da Konbini Code.',
    images: ['/imgs/metadata.webp'],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="!scroll-smooth">
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
