import { BiLogoTypescript } from 'react-icons/bi'
import { FaLinux, FaNode } from 'react-icons/fa6'
import { RiReactjsFill } from 'react-icons/ri'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { SiNestjs, SiPrisma, SiPostgresql } from 'react-icons/si'

import Box from '../bento/Box'

const Skills = () => {
  return (
    <Box className="col-span-12 flex w-full items-center justify-center md:col-span-4">
      <div className="grid grid-cols-3 gap-10">
        <a
          className="duration-500 ease-in-out hover:scale-125 hover:text-amber-500"
          href="https://www.postgresql.org/"
          target="_blank"
        >
          <SiPostgresql size={40} title="PostgreSQL" />
        </a>
        <a
          className="duration-500 ease-in-out hover:scale-125 hover:text-amber-500"
          href="https://www.prisma.io/"
          target="_blank"
        >
          <SiPrisma size={40} title="Prisma" />
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
          href="https://nextjs.org/"
          target="_blank"
        >
          <SiNextdotjs size={40} title="Next JS" />
        </a>
        <a
          className="duration-500 ease-in-out hover:scale-125 hover:text-amber-500"
          href="https://nestjs.com/"
          target="_blank"
        >
          <SiNestjs size={40} title="Nest.js" />
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
          href="https://tailwindcss.com/"
          target="_blank"
        >
          <SiTailwindcss size={40} title="Tailwind" />
        </a>
        <a
          className="duration-500 ease-in-out hover:scale-125 hover:text-amber-500"
          href="https://ubuntu.com/"
          target="_blank"
        >
          <FaLinux size={40} title="Linux" />
        </a>
      </div>
    </Box>
  )
}

export default Skills
