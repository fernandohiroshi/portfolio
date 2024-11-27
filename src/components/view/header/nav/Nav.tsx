'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import { FiChevronDown } from 'react-icons/fi'
import { IoIosCodeWorking, IoIosMail } from 'react-icons/io'

import { Button } from '@/components/ui/shadcn/button'

import { iconVariants, wrapperVariants } from './motion'
import { NavItem } from './navItem/NavItem'

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav animate={open ? 'open' : 'closed'} className="relative">
      <Button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors"
        title="Navigation Menu"
        size="default"
        variant="outline"
      >
        <span className="text-sm font-medium">Menu</span>
        <motion.span variants={iconVariants}>
          <FiChevronDown />
        </motion.span>
      </Button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: 'top', translateX: '-33%' }}
        className="absolute left-0 top-[120%] z-50 flex w-32 flex-col gap-2 overflow-hidden rounded-lg bg-secondary p-2 text-primary shadow-xl"
      >
        <NavItem link="/#about" setOpen={setOpen} Icon={FaCircleUser} text="About" />
        <NavItem link="/projects" setOpen={setOpen} Icon={IoIosCodeWorking} text="Projects" />
        <NavItem link="/#contact" setOpen={setOpen} Icon={IoIosMail} text="Contact" />
      </motion.ul>
    </motion.nav>
  )
}
