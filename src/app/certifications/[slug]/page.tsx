import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/shadcn/button'
import { certifications } from '@/lib/certifications-data'

type Props = {
  params: {
    slug: string
  }
}

export default async function CertificationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const cert = certifications.find((c) => c.slug === slug)

  if (!cert) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
      <div className="mb-8 flex w-full justify-center">
        <Image
          src={cert.img}
          alt="Certificado"
          width={1600}
          height={1200}
          className="h-auto max-h-[60vh] w-full max-w-2xl rounded-lg object-contain shadow sm:max-h-[70vh] sm:max-w-3xl md:max-w-4xl"
          priority
        />
      </div>
      <div className="flex w-full max-w-2xl justify-center">
        <Link href="/certifications" passHref legacyBehavior>
          <Button asChild variant="outline" size="sm">
            <a className="flex items-center gap-1">← Voltar para certificados</a>
          </Button>
        </Link>
      </div>
    </div>
  )
}
