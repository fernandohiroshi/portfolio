'use client'

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import Link from 'next/link'
import React, { useRef } from 'react'

import Box from '../bento/Box'

const Card3D = () => {
  return (
    <Box className="col-span-12 p-0 md:col-span-4">
      <TiltCard />
    </Box>
  )
}

const ROTATION_RANGE = 32.5
const HALF_ROTATION_RANGE = 32.5 / 2

const TiltCard = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x)
  const ySpring = useSpring(y)

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0]

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1
    const rY = mouseX / width - HALF_ROTATION_RANGE

    x.set(rX)
    y.set(rY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      className="relative h-full w-full rounded-lg"
    >
      <Link
        href="/projects"
        title="Projects Page"
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-4 grid place-content-center rounded-xl border duration-500 ease-in-out hover:inset-10 hover:bg-black/80 hover:text-white dark:hover:bg-white/80 dark:hover:text-black"
      >
        <h2
          style={{
            transform: 'translateZ(50px)',
          }}
          className="animate-pulse text-center text-2xl font-semibold uppercase"
        >
          Projects
        </h2>
      </Link>
    </motion.div>
  )
}

export default Card3D
