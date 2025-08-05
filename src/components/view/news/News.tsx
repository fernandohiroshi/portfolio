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
      image: 'https://imgix.cosmicjs.com/943a8210-1c27-11f0-89bb-33da281fd3f1-Macbook-Air-viptechstore-vercel-app.png',
      url: 'https://www.viptech.store/',
      description: 'Tech e-commerce with modern web stack.',
    },
    {
      image: 'https://imgix.cosmicjs.com/ca087630-5567-11f0-ab4f-6d4320896e26-readme-img01.png',
      url: 'https://planc-saas.vercel.app/',
      description: 'Clinic micro-SaaS: scheduling & subscriptions.',
    },
    {
      image: 'https://imgix.cosmicjs.com/97b5d5e0-ae39-11ef-8a63-eb57d6c77a36-profilesite.png',
      url: 'https://www.carolinesouza.art/',
      description: 'Graphic designer portfolio.',
    },
  ]

  return (
    <Box className="col-span-12 md:col-span-6">
      <h2 className="text-center text-xl font-medium tracking-widest md:text-2xl">Latest updates</h2>
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
                    className="h-52 w-full rounded-xl object-contain object-top opacity-85 duration-300 ease-in-out hover:scale-90 hover:opacity-100"
                  />
                </div>
              </a>
              <p className="mt-4 text-center text-xs text-foreground opacity-80">
                {item.description.length > 100 ? `${item.description.slice(0, 100)}...` : item.description}
              </p>
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
