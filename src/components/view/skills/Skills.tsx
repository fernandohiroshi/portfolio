import { getTranslations } from 'next-intl/server'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaLinux, FaNode } from 'react-icons/fa6'
import { RiReactjsFill } from 'react-icons/ri'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { SiNestjs, SiPrisma, SiPostgresql } from 'react-icons/si'

import Box from '../bento/Box'

const skills = [
  { href: 'https://www.postgresql.org/', title: 'PostgreSQL', Icon: SiPostgresql },
  { href: 'https://www.prisma.io/', title: 'Prisma', Icon: SiPrisma },
  { href: 'https://www.typescriptlang.org/', title: 'TypeScript', Icon: BiLogoTypescript },
  { href: 'https://nodejs.org/', title: 'Node', Icon: FaNode },
  { href: 'https://nextjs.org/', title: 'Next JS', Icon: SiNextdotjs },
  { href: 'https://nestjs.com/', title: 'Nestjs', Icon: SiNestjs },
  { href: 'https://react.dev/', title: 'React', Icon: RiReactjsFill },
  { href: 'https://tailwindcss.com/', title: 'Tailwind', Icon: SiTailwindcss },
  { href: 'https://ubuntu.com/', title: 'Linux', Icon: FaLinux },
]

const Skills = async () => {
  const t = await getTranslations('Skills')

  return (
    <Box className="col-span-12 flex w-full items-center justify-center md:col-span-4">
      <div className="grid grid-cols-3 gap-10">
        {skills.map(({ href, title, Icon }) => (
          <a
            key={href}
            className="duration-500 ease-in-out hover:scale-125 hover:text-amber-500"
            href={href}
            target="_blank"
          >
            <Icon size={40} title={t(`items.${title}`)} />
          </a>
        ))}
      </div>
    </Box>
  )
}

export default Skills
