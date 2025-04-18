import Box from '../bento/Box'

const About = () => {
  return (
    <Box className="col-span-12 flex flex-col justify-evenly gap-4 md:col-span-8 lg:gap-0">
      <h2 className="scroll-mt-24 text-xl font-medium tracking-widest md:text-2xl" id="about">
        About me:
      </h2>
      <p className="text-justify text-xs text-foreground opacity-80 lg:text-sm">
        Web developer with 3 years of experience, specialized in front-end development with a focus on Next.js, React,
        Node.js, TypeScript, and Tailwind CSS. Currently improving skills in React Native and back-end (Express, Prisma,
        PostgreSQL, MongoDB) to offer complete web solutions.
        <br />
        <br />
        Founder of Konbini Code, a company focused on creating responsive and functional websites. Constantly studying
        and staying updated on the latest technologies. With over 10 years of experience in Japan, I bring a
        multicultural perspective and strong adaptability. My background in hospitality has honed my communication and
        problem-solving skills, aiding in the development of customized digital solutions.
      </p>
    </Box>
  )
}

export default About
