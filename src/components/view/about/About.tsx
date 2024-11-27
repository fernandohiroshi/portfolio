import Box from '../bento/Box'

const About = () => {
  return (
    <Box className="col-span-12 flex flex-col justify-evenly gap-4 md:col-span-8 lg:gap-0">
      <h2 className="scroll-mt-24 text-xl font-medium tracking-widest md:text-2xl" id="about">
        About me:
      </h2>
      <p className="text-justify text-xs text-foreground opacity-80 lg:text-sm">
        Hello, I&apos;m Fernando Hiroshi, a web developer with over 3 years of experience, focused on front-end
        development with expertise in TypeScript, React, Next.js, and Tailwind CSS. I founded Konbini Web, a company
        that creates modern and unique websites with an emphasis on design and functionality.
        <br /> <br />
        With over 10 years of experience living in Japan, I bring a multicultural perspective and adaptability. I
        graduated from the Front-End Engineer course at the British School of Arts and Technology (EBAC) and continue to
        expand my knowledge, focusing on delivering innovative web solutions.
      </p>
    </Box>
  )
}

export default About
