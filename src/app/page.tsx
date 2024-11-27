import About from '@/components/view/about/About'
import Animation from '@/components/view/animation/Animation'
import Avatar from '@/components/view/avatar/Avatar'
import Card3D from '@/components/view/card3d/Card3D'
import Feature from '@/components/view/feature/Feature'
import Footer from '@/components/view/footer/Footer'
import Form from '@/components/view/form/Form'
import Languages from '@/components/view/languages/Languages'
import News from '@/components/view/news/News'
import Skills from '@/components/view/skills/Skills'

export default function Home() {
  return (
    <main className="mb-8 min-h-screen scroll-mt-24 px-4" id="home">
      <div className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4">
        <Feature />
        <Avatar />
        <Animation />
        <About />
        <Skills />
        <Card3D />
        <Languages />
        <News />
        <Form />
        <Footer />
      </div>
      <p className="mt-8 text-center text-xs opacity-80 lg:text-sm">
        © {`${new Date().getFullYear()}`} Fernando Hiroshi. All rights reserved.
      </p>
    </main>
  )
}
