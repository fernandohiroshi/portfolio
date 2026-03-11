import { getTranslations } from 'next-intl/server'

import Box from '../bento/Box'

const About = async () => {
  const t = await getTranslations('About')
  const description = t('description')
  const paragraphs = description.split(/\n\s*\n/)

  return (
    <Box className="col-span-12 flex flex-col justify-center gap-4 md:col-span-8 lg:gap-0">
      <h2 className="mb-2 scroll-mt-24 text-xl font-medium tracking-widest md:text-2xl" id="about">
        {t('title')}
      </h2>
      <div className="text-justify text-xs text-foreground opacity-90 md:text-sm">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="mb-3 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </Box>
  )
}

export default About
