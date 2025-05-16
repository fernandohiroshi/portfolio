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
      image: 'https://imgix.cosmicjs.com/0e8d01f0-1ea3-11f0-a02d-35f96889065d-solyd.jpeg',
      url: 'https://solyd.com.br/',
      description:
        'Started the best Offensive Security specialization in Latin America, focusing on ethical hacking and pentesting.',
    },
    {
      image: 'https://imgix.cosmicjs.com/3d281af0-808c-11ef-beb8-f3894cda4d77-onebitcode.png',
      url: 'https://onebitcode.com/',
      description:
        'Completed Full Stack JavaScript specialization with practical experience in Node.js, Prisma, and databases.',
    },
    {
      image: 'https://imgix.cosmicjs.com/15ecd330-1ea3-11f0-a02d-35f96889065d-Screenshot-from-2025-04-21-08-15-05.png',
      url: 'https://ebaconline.com.br/',
      description:
        'Certified as Front-End Engineer by EBAC. Specialized in building dynamic, interfaces with React, Vue, and Sass.',
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
