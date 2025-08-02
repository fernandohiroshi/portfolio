import Box from '../bento/Box'

const About = () => {
  return (
    <Box className="col-span-12 flex flex-col justify-evenly gap-4 md:col-span-8 lg:gap-0">
      <h2 className="scroll-mt-24 text-xl font-medium tracking-widest md:text-2xl" id="about">
        About me:
      </h2>
      <p className="text-justify text-xs text-foreground opacity-80 lg:text-sm">
        Web Developer and Front-End Engineer specialized in Next.js, React, TypeScript, and Tailwind CSS. Currently
        enhancing skills in back-end (Node.js, Nest.js, PostgreSQL, MongoDB, Prisma) to deliver fullstack solutions.
        Founder of Konbini Code, creating modern, responsive websites from landing pages to micro e-commerce stores with
        clean code, performance, and mobile-first design.
        <br />
        <br />
        Having lived over 10 years in Japan, I bring a multicultural perspective and a strong focus on user experience,
        staying up to date with the latest technologies and best practices.
      </p>
    </Box>
  )
}

export default About
