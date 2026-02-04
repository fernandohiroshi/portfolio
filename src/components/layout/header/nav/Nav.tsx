'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import { FiGithub, FiInstagram, FiLinkedin, FiMenu, FiPhone } from 'react-icons/fi'
import { IoIosCodeWorking, IoIosMail, IoIosRibbon } from 'react-icons/io'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export function Nav() {
  const [open, setOpen] = useState(false)
  const t = useTranslations('Nav')

  const navLinks = [
    { href: '/#about', label: t('links.about'), Icon: FaCircleUser },
    { href: '/projects', label: t('links.projects'), Icon: IoIosCodeWorking },
    { href: '/certifications', label: t('links.certifications'), Icon: IoIosRibbon },
    { href: '/resume', label: t('links.resume'), Icon: IoIosRibbon },
    { href: '/#contact', label: t('links.contact'), Icon: IoIosMail },
  ]

  const socialLinks = [
    {
      href: 'https://github.com/fernandohiroshi',
      label: t('social.githubAria'),
      Icon: FiGithub,
    },
    {
      href: 'https://www.linkedin.com/in/fernando-hiroshi',
      label: t('social.linkedinAria'),
      Icon: FiLinkedin,
    },
    {
      href: 'https://www.instagram.com/seu_usuario',
      label: t('social.instagramAria'),
      Icon: FiInstagram,
    },
    {
      href: 'https://wa.me/seu_numero',
      label: t('social.whatsappAria'),
      Icon: FiPhone,
    },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors"
          title={t('menuButtonTitle')}
          size="default"
          variant="outline"
        >
          <FiMenu className="h-4 w-4" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="flex flex-col gap-6">
        <SheetHeader>
          <SheetTitle>{t('menuTitle')}</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-4">
          <ul className="flex flex-col gap-2 text-sm">
            {navLinks.map(({ href, label, Icon }) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                <li className="flex w-full cursor-pointer items-center gap-2 whitespace-nowrap rounded-md p-2 text-xs font-medium transition-colors hover:text-pink-500">
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-border/40 pt-4">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{t('socialTitle')}</span>
          <div className="flex items-center gap-3 text-muted-foreground">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
