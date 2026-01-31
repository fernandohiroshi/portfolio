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
            <p className="text-sm font-medium text-pink-500">Desenvolvedor Front-End | Full-Stack</p>
            <p className="mt-1 text-xs text-muted-foreground">Foz do Iguaçu - PR - Brasil</p>
          </div>

          <div className="space-y-1 text-sm">
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:contatofernandohiroshitakeda@gmail.com" className="underline-offset-2 hover:underline">
                contatofernandohiroshitakeda@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">WhatsApp:</span>{' '}
              <a href="https://wa.me/5545988311915" target="_blank" className="underline-offset-2 hover:underline">
                +55 45 98831-1915
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
            Desenvolvedor Front-End com experiência em JavaScript, React, Next.js e TypeScript, criando aplicações web
            modernas, interfaces responsivas e soluções com foco em desempenho, SEO e experiência do usuário.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Atuação complementar em Full-Stack, integrando APIs REST, autenticação e bancos de dados relacionais.
            Criador da Konbini Code e graduando em Tecnologia em Segurança da Informação, atento às boas práticas de
            segurança em aplicações web.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">Competências Técnicas</h2>
          <div className="mt-3 space-y-3 text-sm">
            <div>
              <p className="font-semibold">Front-End</p>
              <p className="text-muted-foreground">
                JavaScript, React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3, Interface responsiva (UI), ShadcnUI
              </p>
            </div>
            <div>
              <p className="font-semibold">Back-End (Complementar)</p>
              <p className="text-muted-foreground">Node.js, APIs REST, PostgreSQL, Prisma, Sanity CMS</p>
            </div>
            <div>
              <p className="font-semibold">Autenticação &amp; Segurança</p>
              <p className="text-muted-foreground">JWT, NextAuth, Clerk, Kinde Auth</p>
            </div>
            <div>
              <p className="font-semibold">Ferramentas &amp; Deploy</p>
              <p className="text-muted-foreground">Git, GitHub, Linux, Vercel, Render, Postman</p>
            </div>
            <div>
              <p className="font-semibold">Ferramentas &amp; Outras Tecnologias</p>
              <p className="text-muted-foreground">
                Stripe, Supabase, Microservices, Inteligência Artificial aplicada ao desenvolvimento (Cursor, Windsurf,
                Copilot)
              </p>
            </div>
            <div>
              <p className="font-semibold">Em Aprimoramento</p>
              <p className="text-muted-foreground">NestJS, React Native, Python, MongoDB, MySQL</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">Formação Acadêmica</h2>
          <div className="mt-3 space-y-1 text-sm">
            <p className="font-medium">Tecnologia em Segurança da Informação — UNINTER</p>
            <p className="text-muted-foreground">2025 – 2028 (em andamento)</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">Experiência Profissional</h2>
          <div className="mt-3 space-y-4 text-sm">
            <div>
              <p className="font-medium">Konbini Code — Desenvolvedor Front-End / Full-Stack</p>
              <p className="text-xs text-muted-foreground">Dez/2023 – Presente | Remoto</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>
                  Desenvolvi interfaces web com React e Next.js, melhorando performance em 35% e aumentando tempo de
                  permanência dos usuários.
                </li>
                <li>
                  Integrei APIs REST e autenticação, garantindo segurança de dados em produção e deploy contínuo via
                  Vercel.
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium">Grupo Tarobá — Recepcionista Sênior</p>
              <p className="text-xs text-muted-foreground">Nov/2021 – Dez/2023 | Foz do Iguaçu - PR</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>
                  Atendimento a mais de 50 clientes nacionais e internacionais diariamente, com índice de satisfação de
                  95%.
                </li>
                <li>
                  Organizei processos administrativos, reduzindo tempo de resposta de solicitações internas em 20%.
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium">Hotel Iguassu Holiday — Agente de Viagens</p>
              <p className="text-xs text-muted-foreground">Nov/2018 – Jun/2020 | Foz do Iguaçu - PR</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>
                  Planejamento de viagens personalizadas para clientes internacionais, aumentando reservas recorrentes
                  em 15%.
                </li>
                <li>
                  Atendimento a clientes, solucionando dúvidas e problemas de forma eficiente, garantindo feedback
                  positivo constante.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">Projetos Relevantes</h2>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href="https://viptech.store"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex flex-col gap-0.5 rounded-md border border-transparent px-1 py-1 transition-colors hover:border-border hover:bg-foreground/5"
              >
                <span className="font-medium text-foreground">VipTech Store — Plataforma de e-commerce</span>
                <span className="text-xs text-muted-foreground">
                  Next.js, React e PostgreSQL com autenticação, dashboard e pagamentos via Stripe/PayPal.
                </span>
                <span className="text-xs text-pink-500 group-hover:underline">https://viptech.store</span>
              </a>
            </li>

            <li>
              <a
                href="https://email-classifier-by-fernando-hirosh.vercel.app"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex flex-col gap-0.5 rounded-md border border-transparent px-1 py-1 transition-colors hover:border-border hover:bg-foreground/5"
              >
                <span className="font-medium text-foreground">
                  Email Classifier — Sistema inteligente de classificação de e-mails
                </span>
                <span className="text-xs text-muted-foreground">
                  Next.js + FastAPI para classificar e-mails automaticamente usando inteligência artificial, com
                  histórico em PostgreSQL.
                </span>
                <span className="text-xs text-pink-500 group-hover:underline">
                  https://email-classifier-by-fernando-hirosh.vercel.app
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://www.konbinicode.com"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex flex-col gap-0.5 rounded-md border border-transparent px-1 py-1 transition-colors hover:border-border hover:bg-foreground/5"
              >
                <span className="font-medium text-foreground">Konbini Code — Plataforma de serviços digitais</span>
                <span className="text-xs text-muted-foreground">
                  Aplicação web responsiva em Next.js e TypeScript, com internacionalização e formulários via Resend.
                </span>
                <span className="text-xs text-pink-500 group-hover:underline">https://www.konbinicode.com</span>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/fernandohiroshi/nestjs-crud"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex flex-col gap-0.5 rounded-md border border-transparent px-1 py-1 transition-colors hover:border-border hover:bg-foreground/5"
              >
                <span className="font-medium text-foreground">NestJS CRUD Backend — API REST</span>
                <span className="text-xs text-muted-foreground">
                  API REST com NestJS, PostgreSQL e TypeORM, CRUD de usuários/mensagens, JWT e testes com Jest.
                </span>
                <span className="text-xs text-pink-500 group-hover:underline">
                  https://github.com/fernandohiroshi/nestjs-crud
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">Certificações</h2>
          <div className="mt-3 space-y-1 text-sm">
            <p className="font-medium">Full-Stack JavaScript Developer — OneBitCode (200h)</p>
            <p className="font-medium">Front-End Engineer — Escola Britânica de Artes Criativas e Tecnologia (65h)</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">Cursos Udemy</h2>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            <li>NestJS for REST API with TypeORM, JWT Authentication and Testing (24h)</li>
            <li>Full-Stack SaaS Project — Next.js, TypeScript, Stripe e Prisma (24h)</li>
            <li>Next.js from Zero to Advanced — Practical Course (25h)</li>
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
            <li>Português — Nativo</li>
            <li>Japonês — Avançado (JLPT N3)</li>
            <li>Inglês — Técnico</li>
          </ul>
        </div>

        <div className="h-px w-full bg-border" />

        <div className="space-y-1 text-xs text-muted-foreground">
          <p>Certificações e comprovantes disponíveis no portfólio online.</p>
        </div>
      </section>
    </main>
  )
}
