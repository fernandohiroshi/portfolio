import Link from 'next/link'

import { Button } from '@/components/ui/shadcn/button'

import Box from '../bento/Box'

const Resume = () => {
  return (
    <div className="container mx-auto px-4 py-8" style={{ fontFamily: 'Arial, sans-serif' }}>
      <Box className="col-span-12 mx-auto max-w-4xl">
        <div className="space-y-10">
          {/* Page Title */}
          <div className="text-left">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">Currículo</h1>
          </div>

          {/* Header */}
          <div className="text-left dark:text-white">
            <h2 className="text-3xl font-bold md:text-4xl">Fernando Hiroshi Takeda</h2>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300 md:text-xl">
              Front-End Engineer | Full-Stack Developer | React, Next.js, TypeScript, Node.js
            </p>
            <div className="mt-6 space-y-3 text-sm lg:text-base">
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                <p>
                  <strong>Email:</strong> contatofernandohiroshitakeda@gmail.com
                </p>
                <p>
                  <strong>Telefone:</strong> (45) 9 8831-1915
                </p>
              </div>
              <div>
                <p>
                  <strong>Links:</strong>{' '}
                  <a
                    href="https://www.linkedin.com/in/fernando-hiroshi/"
                    target="_blank"
                    className="text-blue-600 underline transition-colors hover:text-blue-800 hover:no-underline dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    LinkedIn
                  </a>{' '}
                  |{' '}
                  <a
                    href="https://github.com/fernandohiroshi"
                    target="_blank"
                    className="text-blue-600 underline transition-colors hover:text-blue-800 hover:no-underline dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Github
                  </a>{' '}
                  |{' '}
                  <a
                    href="https://www.konbinicode.com/pt"
                    target="_blank"
                    className="text-blue-600 underline transition-colors hover:text-blue-800 hover:no-underline dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Konbini Code
                  </a>
                </p>
              </div>
              <p>
                <strong>Idiomas:</strong> Japonês (JLPT N3) | Inglês Técnico | Espanhol Técnico
              </p>
            </div>
          </div>

          {/* Perfil */}
          <div>
            <h2 className="mb-6 text-xl font-semibold dark:text-white md:text-2xl">Perfil</h2>
            <div className="space-y-4">
              <p className="text-left text-sm leading-relaxed text-gray-700 dark:text-gray-300 lg:text-base">
                Desenvolvedor Full-Stack e idealizador da micro agência Konbini Code, criando sites com foco em design,
                performance e experiência do usuário.
              </p>
              <p className="text-left text-sm leading-relaxed text-gray-700 dark:text-gray-300 lg:text-base">
                Cursando graduação em Segurança e Defesa Cibernética e me aprofundando em stacks modernas (React Native,
                Nest.js, MongoDB, Docker, Linux, AWS), buscando integrar desenvolvimento e segurança. Destaco
                adaptabilidade, rápida aprendizagem e proatividade.
              </p>
            </div>
          </div>

          {/* Experiência */}
          <div>
            <h2 className="mb-6 text-xl font-semibold dark:text-white md:text-2xl">Experiência</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Konbini Code</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">ago. 2023 – atual</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 lg:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Desenvolvimento de sites e soluções digitais (ecossistema JavaScript).
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Deploy em Vercel, otimização de SEO, performance e responsividade.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Colaboração com clientes na definição de funcionalidades e design.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Gestão de projetos com código limpo, escalável e documentado.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Formação */}
          <div>
            <h2 className="mb-6 text-xl font-semibold dark:text-white md:text-2xl">Formação</h2>
            <div className="space-y-5">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-base font-medium text-gray-900 dark:text-white lg:text-lg">UNINTER</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Graduação em Tecnologia de Gestão de Segurança e Defesa Cibernética
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2025–2027</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-base font-medium text-gray-900 dark:text-white lg:text-lg">OneBitCode</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full-Stack JavaScript (Node.js, PostgreSQL, Prisma, TypeScript)
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2024–2025 | 56h</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-base font-medium text-gray-900 dark:text-white lg:text-lg">EBAC</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Front-End Engineering (HTML, CSS, JS, React, VueJS, SASS, Jest, Git)
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2023–2024 | 65h</p>
              </div>
            </div>
          </div>

          {/* Certificações */}
          <div>
            <h2 className="mb-6 text-xl font-semibold dark:text-white md:text-2xl">Certificações (Udemy)</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white lg:text-base">
                  NestJS: REST API com TypeORM, JWT e Testes Automatizados
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">24h</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white lg:text-base">
                  Next.js Ecommerce 2025 – Shopping Platform From Scratch
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">22h</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="mb-6 text-xl font-semibold dark:text-white md:text-2xl">Skills</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-base font-medium text-gray-900 dark:text-white">Front-End</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'React',
                      'Next.js',
                      'TypeScript',
                      'Tailwind CSS',
                      'HTML5',
                      'JavaScript',
                      'Responsive Design',
                      'Figma',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-base font-medium text-gray-900 dark:text-white">Back-End</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'NestJS', 'Prisma', 'PostgreSQL', 'RESTful APIs', 'JWT', 'MVC'].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-base font-medium text-gray-900 dark:text-white">DevOps & Ferramentas</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Linux', 'Vercel', 'CI/CD', 'Deploy', 'Jest'].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-base font-medium text-gray-900 dark:text-white">Gestão de Projetos</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Agile', 'ClickUp', 'Planejamento', 'Colaboração'].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 border-t border-gray-200 pt-8 dark:border-gray-700 sm:flex-row sm:justify-center">
            <Link href="/certifications" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full transition-all hover:scale-105">
                📜 Ver Certificações
              </Button>
            </Link>
            <Link href="/projects" className="w-full sm:w-auto">
              <Button variant="default" size="lg" className="w-full transition-all hover:scale-105">
                🚀 Ver Projetos
              </Button>
            </Link>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default Resume
