import { Metadata } from 'next'

import Resume from '@/components/view/resume/Resume'

export const metadata: Metadata = {
  title: 'Currículo - Fernando Hiroshi',
  description: 'Currículo profissional de Fernando Hiroshi - Desenvolvedor Full-Stack e Engenheiro Front-End',
}

const ResumePage = () => {
  return <Resume />
}

export default ResumePage
