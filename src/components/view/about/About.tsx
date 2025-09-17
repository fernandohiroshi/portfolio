import Box from '../bento/Box'

const About = () => {
  return (
    <Box className="col-span-12 flex flex-col justify-evenly gap-4 md:col-span-8 lg:gap-0">
      <h2 className="mb-1 scroll-mt-24 text-xl font-medium tracking-widest md:text-2xl" id="about">
        About me:
      </h2>
      <p className="text-justify text-xs text-foreground opacity-80 lg:text-sm">
        Full-Stack Developer and founder of Konbini Code, creating websites with a strong focus on design, performance,
        and user experience. With 8+ years in Japan, I bring a multicultural perspective and advanced Japanese
        communication skills.
        <br />
        <br />
        Currently pursuing a degree in Cybersecurity and Defense Technology, with an emphasis on Pentesting and Red Team
        practices. I am also expanding my expertise in modern stacks (Linux, Nest.js, React Native, MongoDB, Docker, and
        AWS), seeking to integrate development and security while highlighting adaptability, fast learning, and
        proactivity.
      </p>
    </Box>
  )
}

export default About
