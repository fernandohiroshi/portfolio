import Project from '@/components/pages/project/Project'

export default function ProjectPage() {
  return (
    <main className="mx-auto mb-8 min-h-screen max-w-4xl scroll-mt-24 px-4" id="projects">
      <h1 className="mt-16 animate-pulse text-4xl uppercase text-purple-500">Projects</h1>
      <div className="mx-auto mt-8 grid max-w-4xl grid-flow-dense grid-cols-12 gap-4">
        <Project />
      </div>
    </main>
  )
}
