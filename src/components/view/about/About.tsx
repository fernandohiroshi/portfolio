import Box from '../bento/Box'

const About = () => {
  return (
    <Box className="col-span-12 flex flex-col justify-evenly gap-4 md:col-span-8 lg:gap-0">
      <h2 className="scroll-mt-24 text-xl font-medium tracking-widest md:text-2xl" id="about">
        About me:
      </h2>
      <p className="text-justify text-xs text-foreground opacity-80 lg:text-sm">
        I&apos;m Fernando Hiroshi, a web developer with 2+ years of experience specializing in front-end development
        with TypeScript, Next.js, and Tailwind CSS. I founded Konbini Web, a company focused on creating modern,
        functional websites with a strong design emphasis.
        <br />
        <br />
        Having lived in Japan for over 10 years, I bring a multicultural perspective and adaptability. I graduated from
        the Front-End Engineer course at EBAC and am currently enhancing my back-end skills with Node.js, SQL, and
        Prisma to deliver even more comprehensive web solutions.
      </p>
    </Box>
  )
}

export default About
