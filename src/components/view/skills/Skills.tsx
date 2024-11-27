import { BiLogoTypescript, BiLogoSass } from 'react-icons/bi'
import { FaLinux, FaNode } from 'react-icons/fa6'
import { RiJavascriptFill, RiReactjsFill } from 'react-icons/ri'
import { SiNextdotjs, SiTailwindcss, SiFigma } from 'react-icons/si'

import Box from '../bento/Box'

const Skills = () => {
  return (
    <Box className="col-span-12 flex w-full items-center justify-center md:col-span-4">
      <div className="grid grid-cols-3 gap-10">
        <a
          className="duration-500 ease-in-out hover:scale-125 hover:text-amber-500"
          href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
          target="_blank"
        >
          <RiJavascriptFill size={40} title="JavaScript" />
        </a>

        <a
          className="duration-500 ease-in-out hover:scale-125 hover:text-amber-500"
          href="https://react.dev/"
          target="_blank"
        >
          <RiReactjsFill size={40} title="React" />
        </a>

        <a
          className="duration-500 ease-in-out hover:scale-125 hover:text-amber-500"
          href="https://sass-lang.com/"
          target="_blank"
        >
          <BiLogoSass size={40} title="Sass" />
        </a>

        <a
          className="duration-500 ease-in-out hover:scale-125 hover:text-amber-500"
          href="https://tailwindcss.com/"
          target="_blank"
        >
          <SiTailwindcss size={40} title="Tailwind" />
        </a>

        <a
          className="duration-500 ease-in-out hover:scale-125 hover:text-amber-500"
          href="https://nextjs.org/"
          target="_blank"
        >
          <SiNextdotjs size={40} title="Next JS" />
        </a>

        <a
          className="duration-500 ease-in-out hover:scale-125 hover:text-amber-500"
          href="https://www.typescriptlang.org/"
          target="_blank"
        >
          <BiLogoTypescript size={40} title="TypeScript" />
        </a>

        <a
          className="duration-500 ease-in-out hover:scale-125 hover:text-amber-500"
          href="https://nodejs.org/"
          target="_blank"
        >
          <FaNode size={40} title="Node" />
        </a>

        <a
          className="duration-500 ease-in-out hover:scale-125 hover:text-amber-500"
          href="https://ubuntu.com/"
          target="_blank"
        >
          <FaLinux size={40} title="Linux" />
        </a>

        <a
          className="duration-500 ease-in-out hover:scale-125 hover:text-amber-500"
          href="https://www.figma.com/"
          target="_blank"
        >
          <SiFigma size={40} title="Figma" />
        </a>
      </div>
    </Box>
  )
}

export default Skills
