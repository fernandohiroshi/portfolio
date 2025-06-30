'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { ThemeToggle } from '@/components/theme/ThemeToggle'

import { Nav } from './nav/Nav'

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className="sticky top-0 z-50 mx-auto flex max-w-4xl scroll-mt-24 items-center justify-between bg-background/80 px-4 py-4 backdrop-blur-2xl lg:px-0"
    >
      <Link href="/#home" title="Logo">
        <Image
          src="https://imgix.cosmicjs.com/503b4b60-749f-11ef-98d9-cbcb72f3073e-logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="duration-500 ease-in-out hover:scale-125 hover:brightness-125"
        />
      </Link>
      <div className="flex items-center gap-2">
        <Nav />
        <ThemeToggle />
      </div>
    </motion.header>
  )
}

export default Header
