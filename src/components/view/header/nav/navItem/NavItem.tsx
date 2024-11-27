import { motion } from 'framer-motion'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import { IconType } from 'react-icons'

import { actionIconVariants, itemVariants } from '../motion'

export function NavItem({
  text,
  link,
  Icon,
  setOpen,
}: {
  text: string
  link: string
  Icon: IconType
  setOpen: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <Link href={link}>
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex w-full cursor-pointer items-center gap-2 whitespace-nowrap rounded-md p-2 text-xs font-medium transition-colors hover:text-pink-500"
      >
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>{text}</span>
      </motion.li>
    </Link>
  )
}
