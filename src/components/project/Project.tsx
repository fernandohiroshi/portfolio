'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import { projects } from '@/lib/projects-datas'

import { Lens } from '@/components/ui/aceternity/lens'
import { Button } from '@/components/ui/shadcn/button'
import Box from '@/components/view/bento/Box'

const Project = () => {
  const [hoveringIndex, setHoveringIndex] = useState<number | null>(null)

  return (
    <>
      {projects.map((p, index) => (
        <Box key={index} className="col-span-12 flex flex-col justify-evenly p-2 md:col-span-6 md:p-4">
          <Lens
            hovering={hoveringIndex === index}
            setHovering={(isHovering) => setHoveringIndex(isHovering ? index : null)}
          >
            <Image
              src={p.img}
              alt={p.name}
              width={500}
              height={500}
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
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
                {p.codeBtn && (
                  <a href={p.code}>
                    <Button variant="outline" size="sm">
                      Code
                    </Button>
                  </a>
                )}
                {p.liveBtn && (
                  <a href={p.live}>
                    <Button variant="outline" size="sm">
                      Live
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </Box>
      ))}
    </>
  )
}

export default Project
