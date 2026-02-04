import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import Box from '../bento/Box'

const Animation = async () => {
  const t = await getTranslations('Media')

  return (
    <Box className="col-span-12 bg-transparent md:col-span-4">
      <Image
        src="/animation.gif"
        alt={t('animationAlt')}
        width={600}
        height={600}
        sizes="(max-width: 768px) 100vw, 400px"
        className="h-full w-full animate-pulse object-cover object-center"
        unoptimized
      />
    </Box>
  )
}

export default Animation
