import { Button } from '@/components/ui/shadcn/button'

import Box from '../bento/Box'

const Feature = () => {
  return (
    <Box className="col-span-12 flex flex-col justify-evenly md:col-span-8">
      <h1 className="text-start text-2xl font-semibold md:text-4xl">
        <span className="text-pink-500">Hello,</span> my name is Hirøshi <br />
        <span className="text-purple-500">How</span> are you?
      </h1>
      <a href="https://konbini-code.vercel.app/pt" target="_blank" className="text-start text-xs opacity-80 lg:text-sm">
        I create modern websites with unique designs and underground!
      </a>
      <div className="flex items-center justify-end gap-4">
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
