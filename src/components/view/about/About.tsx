import Box from '../bento/Box'

const About = () => {
  return (
    <Box className="col-span-12 flex flex-col justify-evenly gap-4 md:col-span-8 lg:gap-0">
      <h2 className="scroll-mt-24 text-xl font-medium tracking-widest md:text-2xl" id="about">
        About me:
      </h2>
      <p className="text-justify text-xs text-foreground opacity-80 lg:text-sm">
        Web Developer with 3 years of experience specializing in front-end technologies like Next.js, React, TypeScript,
        and Tailwind CSS. Expanding skills in React Native and back-end (Node.js, Express, PostgreSQL, MongoDB, Prisma
        ORM) to deliver scalable fullstack solutions. Founder of Konbini Code, creating modern, responsive websites from
        landing pages to micro e-commerces. I manage projects end-to-end, focusing on clean code, performance, and
        mobile-first design.
        <br />
        <br />
        With over 10 years living in Japan, I bring a multicultural perspective and strong user experience focus. Always
        curious and learning, staying up to date with the latest technologies.
      </p>
    </Box>
  )
}

export default About
