'use client'

import Image from 'next/image'
import Link from 'next/link'

import { certifications } from '@/lib/certifications-data'

import { Card } from '@/components/ui/shadcn/card'

export default function CertificationsPage() {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="mb-6 w-full max-w-4xl text-3xl font-bold">My Certifications</h1>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {certifications.map((cert) => (
          <Link
            key={cert.slug}
            href={`/certifications/${cert.slug}`}
            className="block h-full"
            title="View Certification"
          >
            <Card className="h-full rounded-lg border transition-all duration-200 hover:scale-95 hover:brightness-110">
              <Image
                src={cert.img}
                alt={`Certificado ${cert.slug}`}
                width={500}
                height={400}
                quality={85}
                className="h-36 w-full rounded-lg object-cover sm:h-48 md:h-56"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
