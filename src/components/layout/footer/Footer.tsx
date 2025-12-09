import Image from 'next/image'
import { PiArrowCircleUpRightLight } from 'react-icons/pi'

import { Button } from '@/components/ui/button'
import Box from '@/components/view/bento/Box'

const Footer = () => {
  return (
    <Box className="relative col-span-12 min-h-[14rem] border-none bg-gradient-to-b from-background to-neutral-300 dark:to-neutral-900">
      <div className="absolute bottom-4 left-4 flex flex-col gap-4" id="contact">
        <a
          href="https://konbinicode.com"
          target="_blank"
          className="inline-flex items-center gap-2 text-sm duration-300 ease-in-out hover:font-semibold hover:brightness-150"
        >
          <Image alt="Konbini Web" src="/imgs/logo.webp" width={32} height={32} quality={75} sizes="32px" />
          Foz do Iguaçu | Brasil.
        </a>

        <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-4">
          <a href="https://www.instagram.com/fernando_hiroshi/">
            <Button size="sm" variant="outline" className="w-20">
              Instagram
            </Button>
          </a>
          <a href="https://wa.me/5545988311915">
            <Button size="sm" variant="outline" className="w-20">
              Whatsapp
            </Button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-2 right-4">
        <a
          href="#"
          className="inline-flex opacity-80 duration-300 ease-in-out hover:-rotate-45 hover:scale-125 hover:opacity-100"
        >
          <PiArrowCircleUpRightLight className="animate-pulse text-pink-800 hover:animate-none" size={50} />
        </a>
      </div>
    </Box>
  )
}

export default Footer
