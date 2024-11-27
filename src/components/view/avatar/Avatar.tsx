import Image from 'next/image'

import Box from '../bento/Box'

const Avatar = () => {
  return (
    <Box className="col-span-12 overflow-hidden p-0 md:col-span-4">
      <Image
        src="https://imgix.cosmicjs.com/6d7b94d0-760e-11ef-beb8-f3894cda4d77-avatar.jpg"
        alt="Fernando Hiroshi"
        quality={100}
        width={600}
        height={600}
        className="h-full w-full rounded-lg object-cover object-center duration-500 ease-in-out hover:scale-125"
      />
    </Box>
  )
}

export default Avatar
