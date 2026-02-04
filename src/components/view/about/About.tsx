import { getTranslations } from 'next-intl/server'

import Box from '../bento/Box'

const About = async () => {
  const t = await getTranslations('About')

  return (
    <Box className="col-span-12 flex flex-col justify-center gap-4 md:col-span-8 lg:gap-0">
      <h2 className="mb-2 scroll-mt-24 text-xl font-medium tracking-widest md:text-2xl" id="about">
        {t('title')}
      </h2>
      <p className="text-justify text-xs text-foreground opacity-90 md:text-sm">{t('description')}</p>
    </Box>
  )
}

export default About
