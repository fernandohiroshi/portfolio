'use client'

import Image from 'next/image'
import { useState } from 'react'

import { certifications } from '@/lib/certifications-data'

import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export default function CertificationsPage() {
  const [open, setOpen] = useState(false)
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)

  const selectedCert = selectedSlug ? (certifications.find((cert) => cert.slug === selectedSlug) ?? null) : null

  return (
    <div className="relative flex flex-col items-center p-8">
      <h1 className="mb-6 w-full max-w-4xl text-3xl font-bold">Minhas Certificações</h1>

      <div className="grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-3">
        {certifications.map((cert) => (
          <button
            key={cert.slug}
            type="button"
            className="block h-full text-left focus:outline-none"
            title="Ver Certificado"
            onClick={() => {
              setSelectedSlug(cert.slug)
              setOpen(true)
            }}
          >
            <Card className="h-full rounded-lg border transition-all duration-200 hover:scale-95 hover:brightness-110">
              <Image
                src={cert.img}
                alt={`Certificado ${cert.slug}`}
                width={500}
                height={400}
                quality={85}
                className="object-fit h-36 w-full rounded-lg sm:h-48 md:h-56"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </Card>
          </button>
        ))}
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
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle>Certificado</DialogTitle>
          </DialogHeader>

          {selectedCert && (
            <div className="flex w-full justify-center">
              <Image
                src={selectedCert.img}
                alt={`Certificação ${selectedCert.slug}`}
                width={1600}
                height={1200}
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                className="h-auto max-h-[70vh] w-full max-w-4xl rounded-lg object-contain shadow"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
