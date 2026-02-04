import { getTranslations } from 'next-intl/server'

import { Button } from '@/components/ui/button'

import Box from '../bento/Box'

const Feature = async () => {
  const t = await getTranslations('Feature')

  return (
    <Box className="col-span-12 flex flex-col justify-evenly md:col-span-8">
      <h1 className="text-start text-3xl font-bold md:text-3xl">
        <span className="text-pink-500">{t('hey')}</span> {t('line1')} <br />
        {t('line2Prefix')} <span className="text-purple-500">{t('ideas')}</span> <br /> {t('line3')}
      </h1>
      <p className="mt-4 text-start text-sm font-semibold opacity-80">{t('subtitle')}</p>
      <div className="mt-6 flex items-center justify-end gap-4">
        <a href="https://github.com/fernandohiroshi" target="_blank" title={t('githubTitle')}>
          <Button variant="outline" size="sm">
            {t('githubLabel')}
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/fernando-hiroshi/" target="_blank" title={t('linkedinTitle')}>
          <Button variant="outline" size="sm">
            {t('linkedinLabel')}
          </Button>
        </a>
      </div>
    </Box>
  )
}

export default Feature
