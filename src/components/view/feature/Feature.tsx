import { Button } from '@/components/ui/button'

import Box from '../bento/Box'

const Feature = () => {
  return (
    <Box className="col-span-12 flex flex-col justify-evenly md:col-span-8">
      <h1 className="text-start text-3xl font-bold md:text-3xl">
        <span className="text-pink-500">Hey!</span> Me chamo Hirøshi <br />
        Transformo <span className="text-purple-500">ideias</span> <br /> em experiências digitais.
      </h1>
      <p className="mt-4 text-start text-sm font-semibold opacity-80">
        Crio sites e apps modernos e com aquele toque underground
      </p>
      <div className="mt-6 flex items-center justify-end gap-4">
        <a href="https://github.com/fernandohiroshi" target="_blank" title="Github">
          <Button variant="outline" size="sm">
            Github
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/fernando-hiroshi/" target="_blank" title="Linkedin">
          <Button variant="outline" size="sm">
            Linkedin
          </Button>
        </a>
      </div>
    </Box>
  )
}

export default Feature
