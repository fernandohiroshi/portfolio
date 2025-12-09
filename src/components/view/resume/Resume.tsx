import Link from 'next/link'

import { Button } from '@/components/ui/button'

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
              Front-End Engineer | React &amp; Next.js | Full-Stack Developer | 日本語 (N3)
            </p>
            <div className="mt-6 space-y-3 text-sm lg:text-base">
              <div>
                <p className="flex flex-wrap items-center gap-2">
                  <strong className="mr-2">Links:</strong>
                  <a
                    href="https://www.linkedin.com/in/fernando-hiroshi"
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
                <strong>Contato:</strong>{' '}
                <a className="underline" href="mailto:contatofernandohiroshitakeda@gmail.com">
                  contatofernandohiroshitakeda@gmail.com
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">Foz do Iguaçu, Paraná, Brasil</p>
              <p>
                <strong>Idiomas:</strong> Português (Nativo), Inglês (Elementary), Japonês (Full Professional)
              </p>
            </div>
          </div>

          {/* Resumo Profissional */}
          <div>
            <h2 className="mb-6 text-xl font-semibold dark:text-white md:text-2xl">Resumo Profissional</h2>
            <div className="space-y-4">
              <p className="text-left text-sm leading-relaxed text-gray-700 dark:text-gray-300 lg:text-base">
                Desenvolvedor Full-Stack com foco em Front-End e idealizador da Konbini Code, microagência dedicada à
                criação de soluções digitais personalizadas, como landing pages, aplicações web e sites sob medida.
                Trabalho com tecnologias como React, Next.js, Tailwind CSS, TypeScript, Node.js, PostgreSQL, Prisma e
                Sanity, com deploys otimizados na Vercel.
              </p>
              <p className="text-left text-sm leading-relaxed text-gray-700 dark:text-gray-300 lg:text-base">
                Atualmente curso graduação em Segurança da Informação, aprofundando meus conhecimentos em
                cibersegurança, proteção de aplicações e defesa cibernética, aplicando gradualmente conceitos em
                projetos reais. Exploro também stacks como React Native, NestJS, Python, Shell Script, Linux, MongoDB e
                redes, além de ferramentas voltadas para cybersecurity e ethical hacking.
              </p>
              <p className="text-left text-sm leading-relaxed text-gray-700 dark:text-gray-300 lg:text-base">
                Com mais de 8 anos de vivência no Japão e experiência de mais de 6 anos no setor de turismo, desenvolvi
                habilidades interpessoais, pensamento analítico, organização e adaptabilidade. Valorizo o aprendizado
                contínuo e o uso estratégico de inteligência artificial no dia a dia.
              </p>
            </div>
          </div>

          {/* Principais Competências */}
          <div>
            <h2 className="mb-6 text-xl font-semibold dark:text-white md:text-2xl">Principais Competências</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300 lg:text-base">
              <p>
                <strong>Front-end (uso em projetos):</strong> Next.js, React.js, TypeScript, Tailwind CSS, HTML5, CSS3,
                SASS, shadcn/ui, SEO e Acessibilidade.
              </p>
              <p>
                <strong>Back-end:</strong> Node.js, PostgreSQL, Prisma ORM, Sanity CMS, REST APIs.
              </p>
              <p>
                <strong>Autenticação &amp; Infra:</strong> NextAuth, Better Auth, Clerk, Kinde Auth, Supabase, Neon
                Database, Vercel, Linux, Shell Script.
              </p>
              <p>
                <strong>Design / UX:</strong> Figma, prototipagem e experiência do usuário.
              </p>
              <p>
                <strong>Versionamento:</strong> Git, GitHub.
              </p>
              <p>
                <strong>Produtividade &amp; IA:</strong> uso estratégico de ferramentas como Cursor, Windsurf e modelos
                GPT para otimizar o desenvolvimento.
              </p>
            </div>
            <div className="mt-6 space-y-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300 lg:text-base">
              <p className="font-semibold">Em estudo / aprofundamento:</p>
              <p>
                PHP, Python, MySQL, NestJS, React Native, MongoDB, Payload CMS, Arcjet, Cybersecurity e Ethical Hacking.
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
                <p className="text-sm text-gray-600 dark:text-gray-400">Dezembro de 2023 – Presente</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 lg:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Desenvolvo soluções web modernas usando React, Next.js, TypeScript, Node.js, Prisma e PostgreSQL.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Crio landing pages, portfólios e sites corporativos, com foco em usabilidade, performance, SEO e
                    acessibilidade.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Realizo manutenção contínua e otimizações seguindo boas práticas e versionamento com Git/GitHub.
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
                  Novembro de 2021 – Novembro de 2023 | Foz do Iguaçu, PR
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 lg:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Gerenciei a recepção do hotel, treinando a equipe e atendendo clientes.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Administração de sistemas como CRM Bitrix24 e HITS para reservas e check-in/out.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Coordenei processos, resolvi problemas e elaborei relatórios em Excel.
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
                  Novembro de 2018 – Junho de 2020 | Foz do Iguaçu, PR
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 lg:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Gestão de roteiros turísticos, relacionamento com fornecedores e clientes japoneses.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    Atuei como intérprete bilíngue e coordenei stakeholders.
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
                  Curso Superior de Tecnologia (CST), Tecnologia em Segurança da Informação
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Agosto de 2025 – Setembro de 2027 (em andamento)
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  Graduação em Segurança da Informação, voltada para proteção de sistemas, dados e redes. Abrange defesa
                  cibernética, criptografia, computação forense, segurança em web, bancos de dados e dispositivos
                  móveis, além de recuperação de desastres e continuidade de negócios. Desenvolve competências em gestão
                  de TI, análise de riscos e tomada de decisões estratégicas, com prática em monitoramento, análise de
                  vulnerabilidades e ethical hacking.
                </p>
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
                  Formação Profissional, Full-Stack JavaScript Developer
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Fevereiro de 2024 – Setembro de 2025</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-base font-medium text-gray-900 dark:text-white lg:text-lg">
                  EBAC - Escola Britânica de Artes Criativas e Tecnologia
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Formação Profissional, Front-End Engineer</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Maio de 2023 – Maio de 2024</p>
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
                  NestJS para REST API com TypeORM, Autenticação JWT e Testes
                </h3>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 border-t border-gray-200 pt-8 dark:border-gray-700 sm:flex-row sm:justify-center">
            <Link href="/certifications" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full transition-all hover:scale-105">
                Ver Certificações
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
