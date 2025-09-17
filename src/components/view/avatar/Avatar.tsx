import Image from 'next/image'

import Box from '../bento/Box'

const Avatar = () => {
  return (
    <Box className="col-span-12 overflow-hidden p-0 md:col-span-4">
      <Image
        src="/imgs/avatar.webp"
        alt="Fernando Hiroshi"
        quality={85}
        width={600}
        height={600}
        sizes="(max-width: 768px) 100vw, 400px"
        className="h-full w-full rounded-lg object-cover object-center duration-500 ease-in-out hover:scale-125"
        priority
      />
    </Box>
  )
}

export default Avatar
