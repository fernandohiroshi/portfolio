import Image from 'next/image'

import Box from '../bento/Box'

const Animation = () => {
  return (
    <Box className="col-span-12 border-none bg-transparent md:col-span-4">
      <Image
        src="https://imgix.cosmicjs.com/550ac4c0-7613-11ef-beb8-f3894cda4d77-animation.gif"
        alt="Animation Gif"
        width={600}
        height={600}
        className="h-full w-full animate-pulse object-cover object-center"
        unoptimized
      />
    </Box>
  )
}

export default Animation
