import Image from 'next/image'

import Box from '../bento/Box'

const Animation = () => {
  return (
    <Box className="col-span-12 border-none bg-transparent md:col-span-4">
      <Image
        src="/animation.gif"
        alt="Animation Gif"
        width={600}
        height={600}
        sizes="(max-width: 768px) 100vw, 400px"
        className="h-full w-full animate-pulse object-cover object-center"
        unoptimized
      />
    </Box>
  )
}

export default Animation
