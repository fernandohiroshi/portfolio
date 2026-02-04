import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { Raleway } from 'next/font/google'
import { Metadata } from 'next/types'
import { Toaster } from 'react-hot-toast'

import Header from '@/components/layout/header/Header'
import { ThemeProvider } from '@/components/theme/provider'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://fernandohiroshi.com'),
  description:
    'Fernando Hiroshi Takeda — Front-End Engineer especializado em React e Next.js, atuando como Full-Stack Developer. Trabalho com Next.js, React.js, TypeScript, Tailwind CSS, Node.js, PostgreSQL, Prisma ORM, Sanity CMS e REST APIs, criando landing pages, portfólios e aplicações web otimizadas para performance, SEO e acessibilidade. Tenho experiência com autenticação e infraestrutura usando Next Auth, Better Auth, Clerk, Kinde Auth, Supabase, Neon Database, Vercel, Linux e Shell Script, além de uso estratégico de IA (Cursor, Windsurf, GPT) para acelerar o desenvolvimento. Atualmente estou aprofundando estudos em PHP, Python, MySQL, NestJS, React Native, MongoDB, Payload CMS, Arcjet, Cybersecurity e Ethical Hacking.',
  keywords: [
    'Fernando Hiroshi',
    'Fernando Hiroshi Takeda',
    'Front-End Engineer',
    'Full-Stack Developer',
    'React',
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'NestJS',
    'React Native',
    'PostgreSQL',
    'MongoDB',
    'Prisma',
    'Sanity',
    'Tailwind CSS',
    'Vercel',
    'Konbini Code',
    'Landing Pages',
    'Portfólios',
    'Aplicações Web',
    'SEO',
    'Acessibilidade',
    'Performance Web',
    'Web Developer',
    'Full-Stack JavaScript',
    'REST APIs',
    'Autenticação',
    'Next Auth',
    'Better Auth',
    'Clerk',
    'Kinde Auth',
    'Supabase',
    'Neon Database',
    'Sanity CMS',
    'Prisma ORM',
    'Linux',
    'Shell Script',
    'Git',
    'GitHub',
    'Figma',
    'Design UX',
    'Prototipagem',
    'Experiência do usuário',
    'IA aplicada ao desenvolvimento',
    'Cursor',
    'Windsurf',
    'GPT',
    'PHP',
    'Python',
    'MySQL',
    'Payload CMS',
    'Arcjet',
    'Cybersecurity',
    'Segurança da Informação',
    'Ethical Hacking',
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
    title: 'Fernando Hiroshi Takeda — Front-End Engineer | Next.js, React & TypeScript',
    description:
      'Front-End Engineer e Full-Stack Developer especializado em Next.js, React.js, TypeScript e Tailwind CSS. Desenvolve landing pages, portfólios e aplicações web com Node.js, PostgreSQL, Prisma ORM, Sanity CMS e REST APIs, com foco em performance, SEO, acessibilidade e segurança. Atua também com autenticação moderna (Next Auth, Better Auth, Clerk, Kinde Auth, Supabase, Neon) e uso estratégico de IA para acelerar o desenvolvimento.',
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
    title: 'Fernando Hiroshi Takeda — Front-End Engineer | Next.js, React & TypeScript',
    description:
      'Front-End Engineer e Full-Stack Developer com experiência em Next.js, React.js, TypeScript, Tailwind CSS, Node.js, PostgreSQL, Prisma ORM e Sanity CMS. Focado em performance, SEO, acessibilidade, autenticação segura e uso de IA (Cursor, Windsurf, GPT) para aumentar a produtividade em projetos web.',
    images: ['/imgs/metadata.webp'],
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning className="!scroll-smooth">
      <body className={`${raleway.className} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <Header />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
