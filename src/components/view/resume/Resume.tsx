import Link from 'next/link'

import { Button } from '@/components/ui/shadcn/button'

import Box from '../bento/Box'

const Resume = () => {
  return (
    <div className="container mx-auto px-4 py-8" style={{ fontFamily: 'Arial, sans-serif' }}>
      <Box className="col-span-12 mx-auto max-w-4xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center dark:text-white">
            <h1 className="text-3xl font-bold md:text-4xl">Fernando Hiroshi Takeda</h1>
            <p className="mt-2 text-lg md:text-xl">
              Front-End Engineer | Full-Stack Developer | React, Next.js, TypeScript, Node.js
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <strong>Contato:</strong> contatofernandohiroshitakeda@gmail.com | (45) 9 8831-1915
              </p>
              <p>
                <strong>Links:</strong>{' '}
                <a
                  href="https://www.linkedin.com/in/fernando-hiroshi/"
                  target="_blank"
                  className="underline hover:no-underline"
                >
                  LinkedIn
                </a>{' '}
                |{' '}
                <a href="https://github.com/fernandohiroshi" target="_blank" className="underline hover:no-underline">
                  Github
                </a>{' '}
                |{' '}
                <a href="https://www.konbinicode.com/pt" target="_blank" className="underline hover:no-underline">
                  Konbini Code
                </a>
              </p>
              <p>
                <strong>Idiomas:</strong> Japonês (JLPT N3) | Inglês Técnico | Espanhol Técnico
              </p>
            </div>
          </div>

          {/* Perfil */}
          <div>
            <h2 className="mb-4 text-xl font-semibold dark:text-white md:text-2xl">Perfil</h2>
            <p className="text-justify text-sm dark:text-white lg:text-base">
              Desenvolvedor Full-Stack e idealizador da micro agência Konbini Code, criando sites com foco em design,
              performance e experiência do usuário.
            </p>
            <br />
            <p className="text-justify text-sm dark:text-white lg:text-base">
              Cursando graduação em Segurança e Defesa Cibernética e me aprofundando em stacks modernas (React Native,
              Nest.js, MongoDB, Docker, Linux, AWS), buscando integrar desenvolvimento e segurança. Destaco
              adaptabilidade, rápida aprendizagem e proatividade.
            </p>
          </div>

          {/* Experiência */}
          <div>
            <h2 className="mb-4 text-xl font-semibold dark:text-white md:text-2xl">Experiência</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium dark:text-white">Konbini Code | ago. 2023 – atual</h3>
                <ul className="mt-2 space-y-1 text-sm dark:text-white lg:text-base">
                  <li>• Desenvolvimento de sites e soluções digitais (ecossistema JavaScript).</li>
                  <li>• Deploy em Vercel, otimização de SEO, performance e responsividade.</li>
                  <li>• Colaboração com clientes na definição de funcionalidades e design.</li>
                  <li>• Gestão de projetos com código limpo, escalável e documentado.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Formação */}
          <div>
            <h2 className="mb-4 text-xl font-semibold dark:text-white md:text-2xl">Formação</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-base font-medium dark:text-white lg:text-lg">
                  UNINTER | Graduação em Tecnologia de Gestão de Segurança e Defesa Cibernética | 2025–2027
                </h3>
              </div>
              <div>
                <h3 className="text-base font-medium dark:text-white lg:text-lg">
                  OneBitCode | Full-Stack JavaScript (Node.js, PostgreSQL, Prisma, TypeScript) | 2024–2025 | 56h
                </h3>
              </div>
              <div>
                <h3 className="text-base font-medium dark:text-white lg:text-lg">
                  EBAC | Front-End Engineering (HTML, CSS, JS, React, VueJS, SASS, Jest, Git) | 2023–2024 | 65h
                </h3>
              </div>
            </div>
          </div>

          {/* Certificações */}
          <div>
            <h2 className="mb-4 text-xl font-semibold dark:text-white md:text-2xl">Certificações (Udemy)</h2>
            <ul className="space-y-1 text-sm dark:text-white lg:text-base">
              <li>• NestJS: REST API com TypeORM, JWT e Testes Automatizados | 24h</li>
              <li>• Next.js do Zero ao Avançado na Prática 2025 | 25h</li>
              <li>• Next.js Ecommerce 2025 – Shopping Platform From Scratch | 22h</li>
              <li>• Projeto FullStack SaaS – Next.js, TypeScript, Stripe, Prisma | 24h</li>
            </ul>
            <div className="mt-4 flex text-center">
              <Link href="/certifications">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white hover:bg-black hover:text-white dark:border-black dark:hover:bg-white dark:hover:text-black"
                >
                  Ver Todas as Certificações
                </Button>
              </Link>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="mb-4 text-xl font-semibold dark:text-white md:text-2xl">Skills</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-base font-medium dark:text-white">Front-End:</h3>
                <p className="text-sm dark:text-white lg:text-base">
                  React, Next.js, TypeScript, Tailwind CSS, HTML5, JavaScript, Responsive Design, Figma
                </p>
              </div>
              <div>
                <h3 className="text-base font-medium dark:text-white">Back-End:</h3>
                <p className="text-sm dark:text-white lg:text-base">
                  Node.js, NestJS, Prisma, PostgreSQL, RESTful APIs, Autenticação e Autorização, MVC
                </p>
              </div>
              <div>
                <h3 className="text-base font-medium dark:text-white">DevOps & Ferramentas:</h3>
                <p className="text-sm dark:text-white lg:text-base">Git, Linux, Vercel, CI/CD, Deploy, Testes (Jest)</p>
              </div>
              <div>
                <h3 className="text-base font-medium dark:text-white">Gestão de Projetos:</h3>
                <p className="text-sm dark:text-white lg:text-base">
                  Agile, ClickUp, Planejamento e Colaboração com Clientes
                </p>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default Resume
