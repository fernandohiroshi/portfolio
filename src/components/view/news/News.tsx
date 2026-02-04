'use client'

import Autoplay from 'embla-carousel-autoplay'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import * as React from 'react'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import Box from '../bento/Box'

const News = () => {
  const t = useTranslations('News')
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

  const items = [
    {
      image: '/projects/nestjs.webp',
      url: 'https://github.com/fernandohiroshi/nestjs-crud',
      description: t('items.nestjsCrud'),
    },
    {
      image: '/projects/viptechstore.webp',
      url: 'https://www.viptech.store/',
      description: t('items.viptechStore'),
    },
  ]

  return (
    <Box className="col-span-12 md:col-span-6">
      <Carousel plugins={[plugin.current]} className="flex h-full w-full flex-col justify-evenly">
        <CarouselContent className="z-10">
          {items.map((item, index) => (
            <CarouselItem key={index} className="relative">
              <a href={item.url} target="_blank">
                <div className="relative overflow-hidden rounded-xl">
                  <div className="relative h-52 w-full">
                    <Image
                      src={item.image}
                      alt={item.description}
                      fill
                      quality={85}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="rounded-xl object-contain object-center opacity-85 duration-300 ease-in-out hover:scale-90 hover:opacity-100"
                    />
                  </div>
                </div>
              </a>
              <p className="mt-4 text-center text-sm text-foreground opacity-80">
                {item.description.length > 100 ? `${item.description.slice(0, 100)}...` : item.description}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 pt-2 lg:scale-100">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Box>
  )
}

export default News
