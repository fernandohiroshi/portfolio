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
      image: '/projects/restaurante.webp',
      url: 'https://konbinicoderestaurante.vercel.app/',
      description: 'Modern and responsive restaurant website.',
    },
    {
      image: '/projects/academia.webp',
      url: 'https://konbinicodeacademia.vercel.app/',
      description: 'Platform for promoting fitness services.',
    },
    {
      image: '/projects/pousada.webp',
      url: 'https://konbinicodepousada.vercel.app/',
      description: 'Website for showcasing accommodations.',
    },
    {
      image: '/projects/jornalismo.webp',
      url: 'https://konbinicodejornalismo.vercel.app/',
      description: 'Personalized news and articles portal.',
    },
    {
      image: '/projects/tattoo.webp',
      url: 'https://konbinicodetattoo.vercel.app/',
      description: 'Portfolio for tattoo studio.',
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
              <p className="mt-4 text-center text-sm text-foreground opacity-80">
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
