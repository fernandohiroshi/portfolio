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
              Desenvolvedor Full-Stack | React • Next.js • Node.js | Segurança da Informação & Cibersegurança
            </p>
            <div className="mt-6 space-y-3 text-sm lg:text-base">
              <div>
                <p className="flex flex-wrap items-center gap-2">
                  <strong className="mr-2">Links:</strong>
                  <a
                    href="https://fernandohiroshi.com"
                    target="_blank"
                    className="text-blue-600 underline transition-colors hover:text-blue-800 hover:no-underline dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Site
                  </a>
                  <span>|</span>
                  <a
                    href="https://www.linkedin.com/in/fernandohiroshi"
                    target="_blank"
                    className="text-blue-600 underline transition-colors hover:text-blue-800 hover:no-underline dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    LinkedIn
                  </a>
                  <span>|</span>
                  <a
                    href="https://github.com/fernandohiroshi"
                    target="_blank"
                    className="text-blue-600 underline transition-colors hover:text-blue-800 hover:no-underline dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    GitHub
                  </a>
                  <span>|</span>
                  <a
                    href="https://instagram.com/konbini_code"
                    target="_blank"
                    className="text-blue-600 underline transition-colors hover:text-blue-800 hover:no-underline dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Instagram
                  </a>
                </p>
              </div>
              <p>
                <strong>Idiomas:</strong> Português (Nativo), Japonês (Avançado - JLPT N3), Inglês (Técnico)
              </p>
            </div>
          </div>

          {/* Resumo Profissional */}
          <div>
            <h2 className="mb-6 text-xl font-semibold dark:text-white md:text-2xl">Resumo Profissional</h2>
            <div className="space-y-4">
              <p className="text-left text-sm leading-relaxed text-gray-700 dark:text-gray-300 lg:text-base">
                Desenvolvedor Full-Stack com foco em Front-End e fundador da Konbini Code, microagência especializada em
                soluções digitais escaláveis, como landing pages, aplicações web e sistemas corporativos. Experiência
                com React, Next.js, TypeScript, Tailwind CSS, Node.js, PostgreSQL e Prisma, com deploys otimizados em
                Vercel.
              </p>
              <p className="text-left text-sm leading-relaxed text-gray-700 dark:text-gray-300 lg:text-base">
                Cursando Tecnologia em Gestão da Segurança e Defesa Cibernética, com ênfase em segurança da informação,
                aplico conceitos de proteção de aplicações baseados em OWASP Top 10 e ISO/IEC 27001. Experiência
                internacional no Japão (8 anos) com japonês avançado (JLPT N3) e mais de 6 anos no setor de turismo,
                aprimorando habilidades interpessoais, organização e adaptabilidade. Interesse em desenvolvimento web
                com foco em cibersegurança defensiva (Blue Team) e uso estratégico de IA.
              </p>
            </div>
          </div>

          {/* Experiência Profissional */}
          <div>
            <h2 className="mb-6 text-xl font-semibold dark:text-white md:text-2xl">Experiência Profissional</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Konbini Code — Full-Stack Developer
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Dezembro 2023 – Presente</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 lg:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Desenvolvimento de aplicações web modernas usando React, Next.js, TypeScript, Node.js, Prisma e
                    PostgreSQL.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Criação de landing pages, portfólios e sites corporativos focados em performance, SEO e
                    acessibilidade.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Manutenção e otimização de código com boas práticas e versionamento Git/GitHub.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Comunicação direta com clientes para alinhamento de projetos e melhorias contínuas.
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Grupo Tarobá — Recepcionista Sênior
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Novembro 2021 – Novembro 2023 | Foz do Iguaçu, PR
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 lg:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Gestão da recepção, treinamento da equipe e atendimento ao cliente.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Administração de sistemas CRM Bitrix24 e HITS para reservas e check-in/out.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Coordenação de processos operacionais e elaboração de relatórios em Excel.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Comunicação com hóspedes internacionais e otimização de operações.
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Hotel Iguassu Holiday — Agente de Viagens
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Novembro 2018 – Junho 2020 | Foz do Iguaçu, PR
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 lg:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Gestão de roteiros turísticos, relacionamento com fornecedores e clientes japoneses.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Atuação como intérprete bilíngue e coordenação de stakeholders.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Organização de processos administrativos e resolução de problemas operacionais.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Formação Acadêmica */}
          <div>
            <h2 className="mb-6 text-xl font-semibold dark:text-white md:text-2xl">Formação Acadêmica</h2>
            <div className="space-y-5">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-base font-medium text-gray-900 dark:text-white lg:text-lg">
                  UNINTER Centro Universitário Internacional
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Curso Superior de Tecnologia (CST), Gestão da Segurança e Defesa Cibernética
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Agosto 2025 – Setembro 2027 (em andamento)</p>
              </div>
            </div>
          </div>

          {/* Formação Profissional */}
          <div>
            <h2 className="mb-6 text-xl font-semibold dark:text-white md:text-2xl">Formação Profissional</h2>
            <div className="space-y-5">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-base font-medium text-gray-900 dark:text-white lg:text-lg">OneBitCode</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Formação Profissional, Full-Stack JavaScript | 200h | Certificado
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-base font-medium text-gray-900 dark:text-white lg:text-lg">
                  EBAC - Escola Britânica de Artes Criativas e Tecnologia
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Formação Profissional, Engenheiro Front-End | 65h | Certificado
                </p>
              </div>
            </div>
          </div>

          {/* Competências Técnicas */}
          <div>
            <h2 className="mb-6 text-xl font-semibold dark:text-white md:text-2xl">Competências Técnicas</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-base font-medium text-gray-900 dark:text-white">Linguagens & Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js', 'NestJS'].map((skill) => (
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
                  <h3 className="mb-2 text-base font-medium text-gray-900 dark:text-white">Banco de Dados</h3>
                  <div className="flex flex-wrap gap-2">
                    {['PostgreSQL', 'Prisma'].map((skill) => (
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
                  <h3 className="mb-2 text-base font-medium text-gray-900 dark:text-white">Ferramentas & Outras</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git/GitHub', 'Vercel', 'Tailwind CSS', 'Docker', 'Linux', 'Figma', 'shadcn', 'HTML'].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                        >
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-base font-medium text-gray-900 dark:text-white">Segurança</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Princípios OWASP Top 10', 'ISO/IEC 27001', 'JWT', 'Autenticação', 'Testes'].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-base font-medium text-gray-900 dark:text-white">Idiomas</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Português (Nativo)', 'Japonês (Avançado - JLPT N3)', 'Inglês (Técnico)'].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800 dark:bg-teal-900 dark:text-teal-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificações */}
          <div>
            <h2 className="mb-6 text-xl font-semibold dark:text-white md:text-2xl">Certificações</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white lg:text-base">
                  Next.js Ecommerce - Shopping Platform From Scratch
                </h3>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white lg:text-base">
                  Next.js do Zero ao Avançado na Prática
                </h3>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white lg:text-base">
                  SaaS - Next JS, TypeScript, Stripe, Prisma
                </h3>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white lg:text-base">
                  NestJS para REST API com Autenticação JWT e Testes
                </h3>
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
