import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

export default async function ResumePage() {
  const t = await getTranslations('ResumePage')

  return (
    <main className="mx-auto my-4 min-h-screen max-w-4xl scroll-mt-24 px-4" id="resume">
      <header className="flex flex-col gap-2 py-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t('header.title')}</h1>
        <p className="max-w-2xl text-sm text-muted-foreground dark:text-muted-foreground">{t('header.subtitle')}</p>
      </header>

      <section className="mt-6 grid gap-6 md:grid-cols-[2fr,1.4fr]">
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{t('profile.name')}</h2>
            <p className="text-sm font-medium text-pink-500">{t('profile.role')}</p>
            <p className="mt-1 text-xs text-muted-foreground">{t('profile.location')}</p>
          </div>

          <div className="space-y-1 text-sm">
            <p>
              <span className="font-semibold">{t('profile.contacts.emailLabel')}</span>{' '}
              <a href="mailto:contatofernandohiroshitakeda@gmail.com" className="underline-offset-2 hover:underline">
                contatofernandohiroshitakeda@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">{t('profile.contacts.whatsappLabel')}</span>{' '}
              <a href="https://wa.me/5545988311915" target="_blank" className="underline-offset-2 hover:underline">
                +55 45 98831-1915
              </a>
            </p>
            <p>
              <span className="font-semibold">{t('profile.contacts.portfolioLabel')}</span>{' '}
              <a href="https://fernandohiroshi.com" target="_blank" className="underline-offset-2 hover:underline">
                fernandohiroshi.com
              </a>
            </p>
            <p>
              <span className="font-semibold">{t('profile.contacts.githubLabel')}</span>{' '}
              <a
                href="https://github.com/fernandohiroshi"
                target="_blank"
                className="underline-offset-2 hover:underline"
              >
                github.com/fernandohiroshi
              </a>
            </p>
            <p>
              <span className="font-semibold">{t('profile.contacts.linkedinLabel')}</span>{' '}
              <a
                href="https://linkedin.com/in/fernando-hiroshi"
                target="_blank"
                className="underline-offset-2 hover:underline"
              >
                linkedin.com/in/fernando-hiroshi
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative h-56 w-56 overflow-hidden rounded-2xl border bg-foreground/5 shadow-sm sm:h-64 sm:w-64 md:h-72 md:w-72">
            <Image
              src="/resume.webp"
              alt={t('profile.photoAlt')}
              fill
              sizes="(max-width: 768px) 220px, 288px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mt-10 space-y-6">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">{t('summary.title')}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t('summary.paragraph1')}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t('summary.paragraph2')}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">{t('skills.title')}</h2>
          <div className="mt-3 space-y-3 text-sm">
            <div>
              <p className="font-semibold">{t('skills.frontend.title')}</p>
              <p className="text-muted-foreground">{t('skills.frontend.items')}</p>
            </div>
            <div>
              <p className="font-semibold">{t('skills.backend.title')}</p>
              <p className="text-muted-foreground">{t('skills.backend.items')}</p>
            </div>
            <div>
              <p className="font-semibold">{t('skills.security.title')}</p>
              <p className="text-muted-foreground">{t('skills.security.items')}</p>
            </div>
            <div>
              <p className="font-semibold">{t('skills.toolsDeploy.title')}</p>
              <p className="text-muted-foreground">{t('skills.toolsDeploy.items')}</p>
            </div>
            <div>
              <p className="font-semibold">{t('skills.other.title')}</p>
              <p className="text-muted-foreground">{t('skills.other.items')}</p>
            </div>
            <div>
              <p className="font-semibold">{t('skills.improving.title')}</p>
              <p className="text-muted-foreground">{t('skills.improving.items')}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">{t('education.title')}</h2>
          <div className="mt-3 space-y-1 text-sm">
            <p className="font-medium">{t('education.degree')}</p>
            <p className="text-muted-foreground">{t('education.period')}</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">{t('experience.title')}</h2>
          <div className="mt-3 space-y-4 text-sm">
            <div>
              <p className="font-medium">{t('experience.konbini.role')}</p>
              <p className="text-xs text-muted-foreground">{t('experience.konbini.period')}</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>{t('experience.konbini.bullets.0')}</li>
                <li>{t('experience.konbini.bullets.1')}</li>
              </ul>
            </div>

            <div>
              <p className="font-medium">{t('experience.taroba.role')}</p>
              <p className="text-xs text-muted-foreground">{t('experience.taroba.period')}</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>{t('experience.taroba.bullets.0')}</li>
                <li>{t('experience.taroba.bullets.1')}</li>
              </ul>
            </div>

            <div>
              <p className="font-medium">{t('experience.iguassu.role')}</p>
              <p className="text-xs text-muted-foreground">{t('experience.iguassu.period')}</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>{t('experience.iguassu.bullets.0')}</li>
                <li>{t('experience.iguassu.bullets.1')}</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">{t('projects.title')}</h2>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href="https://viptech.store"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex flex-col gap-0.5 rounded-md border border-transparent px-1 py-1 transition-colors hover:border-border hover:bg-foreground/5"
              >
                <span className="font-medium text-foreground">{t('projects.items.viptech.title')}</span>
                <span className="text-xs text-muted-foreground">{t('projects.items.viptech.subtitle')}</span>
                <span className="text-xs text-pink-500 group-hover:underline">https://viptech.store</span>
              </a>
            </li>

            <li>
              <a
                href="https://email-classifier-by-fernando-hirosh.vercel.app"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex flex-col gap-0.5 rounded-md border border-transparent px-1 py-1 transition-colors hover:border-border hover:bg-foreground/5"
              >
                <span className="font-medium text-foreground">{t('projects.items.emailClassifier.title')}</span>
                <span className="text-xs text-muted-foreground">{t('projects.items.emailClassifier.subtitle')}</span>
                <span className="text-xs text-pink-500 group-hover:underline">
                  https://email-classifier-by-fernando-hirosh.vercel.app
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://www.konbinicode.com"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex flex-col gap-0.5 rounded-md border border-transparent px-1 py-1 transition-colors hover:border-border hover:bg-foreground/5"
              >
                <span className="font-medium text-foreground">{t('projects.items.konbini.title')}</span>
                <span className="text-xs text-muted-foreground">{t('projects.items.konbini.subtitle')}</span>
                <span className="text-xs text-pink-500 group-hover:underline">https://www.konbinicode.com</span>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/fernandohiroshi/nestjs-crud"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex flex-col gap-0.5 rounded-md border border-transparent px-1 py-1 transition-colors hover:border-border hover:bg-foreground/5"
              >
                <span className="font-medium text-foreground">{t('projects.items.nestCrud.title')}</span>
                <span className="text-xs text-muted-foreground">{t('projects.items.nestCrud.subtitle')}</span>
                <span className="text-xs text-pink-500 group-hover:underline">
                  https://github.com/fernandohiroshi/nestjs-crud
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">{t('certifications.title')}</h2>
          <div className="mt-3 space-y-1 text-sm">
            <p className="font-medium">{t('certifications.items.0')}</p>
            <p className="font-medium">{t('certifications.items.1')}</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">{t('udemy.title')}</h2>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            <li>{t('udemy.items.0')}</li>
            <li>{t('udemy.items.1')}</li>
            <li>{t('udemy.items.2')}</li>
          </ul>
        </div>

        <div className="pt-2 text-xs text-muted-foreground">
          <p>
            {t('footerNote.prefix')}{' '}
            <Link href="/" className="underline-offset-2 hover:underline">
              {t('footerNote.linkLabel')}
            </Link>
            {t('footerNote.suffix')}
          </p>
        </div>
      </section>

      <section className="mt-10 space-y-4 rounded-lg border bg-foreground/5 p-4 text-sm backdrop-blur-md">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {t('languages.title')}
          </h3>
          <ul className="mt-2 space-y-1">
            <li>{t('languages.items.0')}</li>
            <li>{t('languages.items.1')}</li>
            <li>{t('languages.items.2')}</li>
          </ul>
        </div>

        <div className="h-px w-full bg-border" />

        <div className="space-y-1 text-xs text-muted-foreground">
          <p>{t('languages.note')}</p>
        </div>
      </section>
    </main>
  )
}
