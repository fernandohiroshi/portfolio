import Box from '../bento/Box'

const About = () => {
  return (
    <Box className="col-span-12 flex flex-col justify-evenly gap-4 md:col-span-8 lg:gap-0">
      <h2 className="mb-1 scroll-mt-24 text-xl font-medium tracking-widest" id="about">
        About me:
      </h2>
      <p className="text-justify text-xs text-foreground opacity-80 lg:text-sm">
        • Full-Stack Developer with a focus on Front-End and founder of Konbini Code, a micro-agency specializing in
        scalable digital solutions such as landing pages, web applications, and enterprise systems. Experienced with
        Next.js, TypeScript, Tailwind CSS, Node.js, PostgreSQL, and Prisma, with optimized deployments on Vercel.
        <br /> <br />• Currently pursuing a degree in Cybersecurity and Defense Management Technology, with an emphasis
        on information security, applying application protection concepts based on the OWASP Top 10 and ISO/IEC 27001
        standards. International experience in Japan (8 years) with advanced Japanese proficiency (JLPT N3) and over 6
        years in the tourism industry, enhancing interpersonal, organizational, and adaptability skills. Interested in
        web development with a focus on defensive cybersecurity (Blue Team) and the strategic use of AI.
      </p>
    </Box>
  )
}

export default About
