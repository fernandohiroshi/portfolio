import Image from 'next/image'
import Link from 'next/link'

export default function ResumePage() {
  return (
    <main className="mx-auto my-4 min-h-screen max-w-4xl scroll-mt-24 px-4" id="resume">
      <header className="flex flex-col gap-2 py-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Resume</h1>
        <p className="max-w-2xl text-sm text-muted-foreground dark:text-muted-foreground">
          Visão geral da minha experiência profissional, formação, competências técnicas e projetos relevantes.
        </p>
      </header>

      <section className="mt-6 grid gap-6 md:grid-cols-[2fr,1.4fr]">
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Fernando Hiroshi Takeda</h2>
            <p className="text-sm font-medium text-pink-500">
              Desenvolvedor Full-Stack | Front-End | React, Next.js, TypeScript
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Foz do Iguaçu, PR – Brasil</p>
          </div>

          <div className="space-y-1 text-sm">
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:contatofernandohiroshitakeda@gmail.com" className="underline-offset-2 hover:underline">
                contatofernandohiroshitakeda@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Portfolio:</span>{' '}
              <a href="https://fernandohiroshi.com" target="_blank" className="underline-offset-2 hover:underline">
                fernandohiroshi.com
              </a>
            </p>
            <p>
              <span className="font-semibold">GitHub:</span>{' '}
              <a
                href="https://github.com/fernandohiroshi"
                target="_blank"
                className="underline-offset-2 hover:underline"
              >
                github.com/fernandohiroshi
              </a>
            </p>
            <p>
              <span className="font-semibold">LinkedIn:</span>{' '}
              <a
                href="https://linkedin.com/in/fernando-hiroshi"
                target="_blank"
                className="underline-offset-2 hover:underline"
              >
                linkedin.com/in/fernando-hiroshi
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative h-56 w-56 overflow-hidden rounded-2xl border bg-foreground/5 shadow-sm sm:h-64 sm:w-64 md:h-72 md:w-72">
            <Image
              src="/resume.webp"
              alt="Foto de Fernando Hiroshi Takeda"
              fill
              sizes="(max-width: 768px) 220px, 288px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mt-10 space-y-6">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Resumo Profissional</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Desenvolvedor Full-Stack com foco em Front-End e criador do Konbini Code, entregando soluções digitais
            personalizadas como landing pages e aplicações web escaláveis. Experiência em integração de APIs,
            microservices, arquiteturas modernas, UI responsiva, SEO otimizado e deploy em Vercel e Render.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Com mais de 8 anos vivendo no Japão (JLPT N3) e 6+ anos no setor de turismo, desenvolvo comunicação
            intercultural, pensamento analítico e adaptabilidade, aplicando estratégias com IA para aumentar eficiência
            e inovação.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">Competências Técnicas</h2>
          <div className="mt-3 space-y-3 text-sm">
            <div>
              <p className="font-semibold">Frontend</p>
              <p className="text-muted-foreground">
                React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3, UI/UX responsivo, ShadcnUI
              </p>
            </div>
            <div>
              <p className="font-semibold">Backend</p>
              <p className="text-muted-foreground">Node.js, APIs REST, PostgreSQL, Prisma, sanity, Neon database</p>
            </div>
            <div>
              <p className="font-semibold">Explorando / Aprimorando</p>
              <p className="text-muted-foreground">NestJS, React Native, Python, Shell Script, MongoDB, MySQL</p>
            </div>
            <div>
              <p className="font-semibold">Autenticação &amp; Segurança</p>
              <p className="text-muted-foreground">JWT, Clerk, Kinde Auth, NextAuth, Better Auth</p>
            </div>
            <div>
              <p className="font-semibold">DevOps &amp; Deploy</p>
              <p className="text-muted-foreground">Linux, Git, GitHub, Vercel, Render, Postman, cypress</p>
            </div>
            <div>
              <p className="font-semibold">Ferramentas &amp; Outras Tecnologias</p>
              <p className="text-muted-foreground">ImageKit, Sanity CMS, Stripe, microservices, Supabase</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">Formação Acadêmica</h2>
          <div className="mt-3 space-y-1 text-sm">
            <p className="font-medium">Tecnologia em Segurança da Informação – UNINTER (2025–2028)</p>
            <p className="text-muted-foreground">
              Graduação em andamento com foco em cibersegurança, proteção de aplicações web e análise de riscos.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">Experiência Profissional</h2>
          <div className="mt-3 space-y-4 text-sm">
            <div>
              <p className="font-medium">Konbini Code – Desenvolvedor Full-Stack | Dez 2023 – Presente | Remoto</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>Desenvolvimento de aplicações web, landing pages e microservices.</li>
                <li>Integração com APIs REST e bancos relacionais, autenticação segura.</li>
                <li>Deploy contínuo em Vercel e Render; versionamento com Git/GitHub.</li>
              </ul>
            </div>

            <div>
              <p className="font-medium">
                Grupo Tarobá – Senior Receptionist | Nov 2021 – Dez 2023 | Foz do Iguaçu, PR
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>Atendimento a clientes e organização de processos operacionais.</li>
                <li>Comunicação com clientes internacionais e suporte à equipe.</li>
              </ul>
            </div>

            <div>
              <p className="font-medium">
                Hotel Iguassu Holiday – Travel Agent | Nov 2018 – Jun 2020 | Foz do Iguaçu, PR
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>Planejamento de viagens e coordenação de fornecedores.</li>
                <li>Atendimento bilíngue e organização de demandas.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">Projetos Relevantes</h2>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href="https://www.konbinicode.com/pt"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex flex-col gap-0.5 rounded-md border border-transparent px-1 py-1 transition-colors hover:border-border hover:bg-foreground/5"
              >
                <span className="font-medium text-foreground">Konbini Code – Showcase de serviços digitais</span>
                <span className="text-xs text-muted-foreground">
                  Next.js, TypeScript, Tailwind CSS • Landing page de serviços digitais com foco em performance e
                  conversão.
                </span>
                <span className="text-xs text-pink-500 group-hover:underline">https://www.konbinicode.com/pt</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.viptech.store/"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex flex-col gap-0.5 rounded-md border border-transparent px-1 py-1 transition-colors hover:border-border hover:bg-foreground/5"
              >
                <span className="font-medium text-foreground">VIPTech Store – Microservices web application</span>
                <span className="text-xs text-muted-foreground">
                  Next.js, React, TypeScript, PostgreSQL • Aplicação web com arquitetura em microserviços.
                </span>
                <span className="text-xs text-pink-500 group-hover:underline">https://www.viptech.store/</span>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/fernandohiroshi/nestjs-crud"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex flex-col gap-0.5 rounded-md border border-transparent px-1 py-1 transition-colors hover:border-border hover:bg-foreground/5"
              >
                <span className="font-medium text-foreground">NestJS CRUD Backend (explorando)</span>
                <span className="text-xs text-muted-foreground">
                  NestJS, TypeORM, JWT • API REST com operações CRUD e autenticação.
                </span>
                <span className="text-xs text-pink-500 group-hover:underline">
                  https://github.com/fernandohiroshi/nestjs-crud
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://planc-saas.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex flex-col gap-0.5 rounded-md border border-transparent px-1 py-1 transition-colors hover:border-border hover:bg-foreground/5"
              >
                <span className="font-medium text-foreground">PlanC SaaS – Plataforma SaaS</span>
                <span className="text-xs text-muted-foreground">
                  Next.js, TypeScript, Stripe, Prisma • Aplicação SaaS full-stack com billing e autenticação.
                </span>
                <span className="text-xs text-pink-500 group-hover:underline">https://planc-saas.vercel.app/</span>
              </a>
            </li>

            <li>
              <a
                href="https://sanity-nextjs16-full-blog.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex flex-col gap-0.5 rounded-md border border-transparent px-1 py-1 transition-colors hover:border-border hover:bg-foreground/5"
              >
                <span className="font-medium text-foreground">FullStack Blog – Sanity (CMS)</span>
                <span className="text-xs text-muted-foreground">
                  Next.js, TypeScript, Sanity • Blog full-stack com CMS headless, rotas dinâmicas e interface
                  responsiva.
                </span>
                <span className="text-xs text-pink-500 group-hover:underline">
                  https://sanity-nextjs16-full-blog.vercel.app/
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://email-classifier-by-fernando-hirosh.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex flex-col gap-0.5 rounded-md border border-transparent px-1 py-1 transition-colors hover:border-border hover:bg-foreground/5"
              >
                <span className="font-medium text-foreground">Email classifier (IA)</span>
                <span className="text-xs text-muted-foreground">
                  Next.js, TypeScript, IA generativa • Classificador de e-mails com API de IA para análise de conteúdo.
                </span>
                <span className="text-xs text-pink-500 group-hover:underline">
                  https://email-classifier-by-fernando-hirosh.vercel.app/
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">Certificações</h2>
          <div className="mt-3 space-y-1 text-sm">
            <p className="font-medium">Full-Stack JavaScript Developer – OneBitCode | 200hr</p>
            <p className="text-muted-foreground">
              Formação em desenvolvimento Full-Stack com React, Next.js, Node.js, Express, PostgreSQL, TypeScript, Git e
              deploy profissional.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">Cursos Udemy</h2>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            <li>NestJS for REST API with TypeORM, JWT Authentication and Testing | 24hr</li>
            <li>Full-Stack SaaS Project – Next.js, TypeScript, Stripe, Prisma | 24hr</li>
            <li>Next.js Ecommerce – Shopping Platform From Scratch | 22hr</li>
            <li>Next.js from Zero to Advanced – Practical Course | 25hr</li>
          </ul>
        </div>

        <div className="pt-2 text-xs text-muted-foreground">
          <p>
            Para detalhes adicionais, certificados e demonstrações dos projetos, acesse o{' '}
            <Link href="/" className="underline-offset-2 hover:underline">
              portfólio completo
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mt-10 space-y-4 rounded-lg border bg-foreground/5 p-4 text-sm backdrop-blur-md">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Idiomas</h3>
          <ul className="mt-2 space-y-1">
            <li>Português (nativo)</li>
            <li>Japonês (avançado – JLPT N3)</li>
            <li>Inglês técnico</li>
          </ul>
        </div>

        <div className="h-px w-full bg-border" />

        <div className="space-y-1 text-xs text-muted-foreground">
          <p>Disponibilidade de horário.</p>
          <p>
            Pretensão salarial:{' '}
            <span className="font-medium text-foreground">
              Estágio entre R$ 1.500 e R$ 2.500 | Demais vagas a partir de R$ 4.000
            </span>
          </p>
          <p>Certificações e comprovantes disponíveis no portfólio online.</p>
          <p>Conhecimentos em ferramentas administrativas: Excel básico, ClickUp, Bitrix24, Figma (prototipagem)</p>
        </div>
      </section>
    </main>
  )
}
