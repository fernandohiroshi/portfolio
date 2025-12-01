import Box from '../bento/Box'

const About = () => {
  return (
    <Box className="col-span-12 flex flex-col justify-evenly gap-4 md:col-span-8 lg:gap-0">
      <h2 className="scroll-mt-24 text-xl font-medium tracking-widest md:text-2xl" id="about">
        Sobre mim:
      </h2>
      <p className="text-justify text-xs text-foreground opacity-90 md:text-sm">
        Desenvolvedor Full-Stack com foco em Front-End e idealizador da Konbini Code, criando soluções digitais
        personalizadas com Next.js, Tailwind CSS, TypeScript, Node.js e PostgreSQL, com deploys otimizados na Vercel.
        Atualmente curso Segurança da Informação, aplicando conceitos de cibersegurança em projetos reais. Experimento
        stacks como React Native, NestJS, Python, Linux e ferramentas de ethical hacking. Com vivência de 8 anos no
        Japão e 6 no turismo, desenvolvi habilidades interpessoais, adaptabilidade e pensamento analítico, sempre
        buscando aprendizado contínuo e uso estratégico de inteligência artificial.
      </p>
    </Box>
  )
}

export default About
