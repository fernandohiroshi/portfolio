'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/shadcn/carousel'

import Box from '../bento/Box'

const News = () => {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

  const items = [
    {
      image: 'https://imgix.cosmicjs.com/14c7b950-1c20-11f0-89bb-33da281fd3f1-w1.png',
      url: 'https://viptechstore.vercel.app/',
      description: 'My Full-Stack E-commerce Project.',
    },
    {
      image: 'https://imgix.cosmicjs.com/dc657120-1c37-11f0-89bb-33da281fd3f1-Screenshot-from-2025-04-18-06-30-38.png',
      url: 'https://maps.app.goo.gl/f1iLCS9xPXjac7mE8',
      description: 'Trip to Embalse El Yeso - Cajón Del Maipo - Chile 🇨🇱',
    },
  ]

  return (
    <Box className="col-span-12 md:col-span-6">
      <h2 className="text-center text-xl font-medium tracking-widest md:text-2xl">Last News</h2>
      <Carousel
        plugins={[plugin.current]}
        className="flex h-full w-full flex-col justify-evenly"
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="z-10">
          {items.map((item, index) => (
            <CarouselItem key={index} className="relative">
              <a href={item.url} target="_blank">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={`Imagem ${index + 1}`}
                    width={500}
                    height={300}
                    className="h-52 w-full rounded-xl object-cover object-top duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              </a>
              <p className="mt-4 text-center text-xs text-foreground opacity-80 lg:text-sm">{item.description}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="my-2 flex justify-end gap-2 lg:scale-100">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Box>
  )
}

export default News
