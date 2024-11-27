'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import { Lens } from '@/components/ui/aceternity/lens'
import { Button } from '@/components/ui/shadcn/button'
import Box from '@/components/view/bento/Box'

const projects = [
  {
    img: 'https://imgix.cosmicjs.com/b1e6b4b0-80fe-11ef-9257-112b43bd2f70-Macbook-Air-konbinicode.com.png',
    name: 'Konbini Code',
    code: 'https://github.com/fernandohiroshi/konbini-code',
    live: 'https://konbinicode.com/',
  },
  {
    img: 'https://imgix.cosmicjs.com/c07f4730-80fe-11ef-9257-112b43bd2f70-Macbook-Air-fernandohiroshi.com.png',
    name: 'My Portfolio',
    code: 'https://github.com/fernandohiroshi/portfolio',
    live: 'https://fernandohiroshi.com/',
  },
]

const Project = () => {
  const [hoveringIndex, setHoveringIndex] = useState<number | null>(null)

  return (
    <>
      {projects.map((p, index) => (
        <Box key={index} className="col-span-12 flex flex-col justify-evenly md:col-span-6">
          <Lens
            hovering={hoveringIndex === index}
            setHovering={(isHovering) => setHoveringIndex(isHovering ? index : null)}
          >
            <Image
              src={p.img}
              alt="image"
              width={500}
              height={500}
              className="h-[14rem] w-full rounded-2xl object-cover"
            />
          </Lens>
          <motion.div
            animate={{
              filter: hoveringIndex === index ? 'blur(2px)' : 'blur(0px)',
            }}
            className="mt-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-base md:text-2xl">{p.name}</h2>
              <div className="flex items-center gap-4">
                <a href={p.code}>
                  <Button variant="outline" size="sm">
                    Code
                  </Button>
                </a>
                <a href={p.live}>
                  <Button variant="outline" size="sm">
                    Live
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </Box>
      ))}
    </>
  )
}

export default Project
