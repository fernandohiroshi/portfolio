import Box from '../bento/Box'

const About = () => {
  return (
    <Box className="col-span-12 flex flex-col justify-evenly gap-4 md:col-span-8 lg:gap-0">
      <h2 className="scroll-mt-24 text-xl font-medium tracking-widest md:text-2xl" id="about">
        About me:
      </h2>
      <p className="text-justify text-xs text-foreground opacity-80 lg:text-sm">
        Web Developer and Front-End Engineer specialized in technologies such as Next.js, React, TypeScript, and
        Tailwind CSS. Continuously refining skills in React Native and back-end development (Node.js, Nest.js,
        PostgreSQL, MongoDB, Prisma ORM) to deliver scalable and integrated fullstack solutions. Founder of Konbini
        Code, where I create modern, responsive websites ranging from landing pages to micro e-commerce stores. I manage
        projects end-to-end with a strong focus on clean code, performance optimization, and mobile-first design
        principles.
        <br />
        <br />
        With over 10 years living in Japan, I bring a multicultural perspective combined with a deep commitment to
        delivering excellent user experiences. Always curious and dedicated to continuous learning, I stay up to date
        with the latest technologies and industry best practices.
      </p>
    </Box>
  )
}

export default About
