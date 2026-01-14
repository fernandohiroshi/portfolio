'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'

import { certifications } from '@/lib/certifications-data'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

export default function CertificationsPage() {
  const [open, setOpen] = useState(false)
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)

  const selectedCert = useMemo(
    () => (selectedSlug ? (certifications.find((cert) => cert.slug === selectedSlug) ?? null) : null),
    [selectedSlug],
  )

  return (
    <main className="mx-auto my-4 min-h-screen max-w-4xl scroll-mt-24 px-4" id="certifications">
      <header className="flex flex-col gap-2 py-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Minhas Certificações</h1>
        <p className="max-w-2xl text-sm text-muted-foreground dark:text-muted-foreground">
          Alguns dos cursos e formações que concluí ao longo da minha jornada como desenvolvedor.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((cert) => {
          return (
            <button
              key={cert.slug}
              type="button"
              className="group relative block h-full max-w-lg text-left outline-none transition-transform duration-200 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={() => {
                setSelectedSlug(cert.slug)
                setOpen(true)
              }}
              title="Ver certificado"
            >
              <div className="relative flex h-fit w-full flex-col overflow-hidden rounded-lg border bg-foreground/10 p-4 shadow-sm backdrop-blur-md dark:bg-muted/80">
                <div className="relative h-56 w-full overflow-hidden rounded-md sm:h-64">
                  <Image
                    src={cert.img}
                    alt={cert.slug}
                    fill
                    priority={false}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-fit transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </button>
          )
        })}
      </div>

      <Dialog
        open={open}
        onOpenChange={(nextOpen) => {
          setOpen(nextOpen)

          if (!nextOpen) {
            setSelectedSlug(null)
          }
        }}
      >
        <DialogContent className="h-[85vh] max-w-[95vw] overflow-hidden border-0 bg-background p-0 sm:h-[85vh] sm:max-w-[90vw] sm:px-4 sm:py-6 lg:max-w-[80vw]">
          {selectedCert && (
            <div className="flex h-full w-full flex-col items-center justify-center px-3 py-4 sm:px-0">
              <DialogTitle className="sr-only">{selectedCert.slug}</DialogTitle>

              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-background">
                <Image src={selectedCert.img} alt={selectedCert.slug} fill sizes="100vw" className="object-contain" />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}
