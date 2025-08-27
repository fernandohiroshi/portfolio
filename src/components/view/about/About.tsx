import Box from '../bento/Box'

const About = () => {
  return (
    <Box className="col-span-12 flex flex-col justify-evenly gap-4 md:col-span-8 lg:gap-0">
      <h2 className="mb-1 scroll-mt-24 text-xl font-medium tracking-widest md:text-2xl" id="about">
        About me:
      </h2>
      <p className="text-justify text-xs text-foreground opacity-80 lg:text-sm">
        I am a Full-Stack developer with a focus on front-end, with expertise in Next.js, React, TypeScript, and
        Node.js.
        <br />
        I run a micro-agency, Konbini Code, where I develop websites and digital solutions with a focus on design and
        visual identity for small businesses.
        <br />
        <br />
        I am pursuing a degree in Cybersecurity Management and Defense Technology, enhancing my skills in AppSec,
        Pentesting, Elastic Security, and AWS, as well as stacks like Nest.js, React Native, and MongoDB, always keeping
        up with the latest technologies.
        <br />
        With over 8 years of experience living in Japan, I bring multicultural experience and quick adaptability, and I
        also have advanced proficiency in Japanese.
      </p>
    </Box>
  )
}

export default About
