import { Metadata } from 'next'

import Resume from '@/components/view/resume/Resume'

export const metadata: Metadata = {
  title: 'Resume - Fernando Hiroshi',
  description: 'Professional resume of Fernando Hiroshi - Full-Stack Developer and Front-End Engineer',
}

const ResumePage = () => {
  return <Resume />
}

export default ResumePage
