import Box from '../bento/Box'

const About = () => {
  return (
    <Box className="col-span-12 flex flex-col justify-evenly gap-4 md:col-span-8 lg:gap-0">
      <h2 className="mb-1 scroll-mt-24 text-xl font-medium tracking-widest md:text-2xl" id="about">
        About me:
      </h2>
      <p className="text-justify text-xs text-foreground opacity-80 lg:text-sm">
        Full-Stack Developer specializing in Front-end (React, Next.js, Node.js, TypeScript, Tailwind, Prisma,
        PostgreSQL) and founder of the micro-agency Konbini Code, creating websites and digital solutions.
        <br />
        <br />
        Pursuing a degree in Cybersecurity (Pentesting / Red Team). I also deepen my knowledge in Linux, Nest.js, React
        Native, MongoDB, Docker, and AWS.
        <br />
        <br />
        With 8+ years in Japan, I bring a multicultural perspective and Japanese proficiency.
      </p>
    </Box>
  )
}

export default About
