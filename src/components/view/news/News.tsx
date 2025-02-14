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
      image: 'https://imgix.cosmicjs.com/3d281af0-808c-11ef-beb8-f3894cda4d77-onebitcode.png',
      url: 'https://onebitcode.com/',
      description:
        'Completed Fullstack course at OneBitCode, with focus on SQL, Prisma, Node.js, MongoDB, and Express.js.',
    },
    {
      image: 'https://imgix.cosmicjs.com/6b038fb0-8071-11ef-beb8-f3894cda4d77-nextjs-udemy.jpg',
      url: 'https://www.udemy.com/course/nextjs-zero-ao-avancado',
      description: 'Completed the course: Next.js 14 from zero to advanced.',
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
