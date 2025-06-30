'use client'

import { motion, MotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
} & MotionProps

const Box = ({ className, ...rest }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className={twMerge(
        'col-span-4 h-full min-h-[18rem] w-full rounded-lg border bg-neutral-100 p-6 dark:bg-transparent',
        className,
      )}
      {...rest}
    />
  )
}

export default Box
