export default function VideoUrlPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <video src="/autoapp.mp4" controls autoPlay loop className="max-h-[80vh] max-w-full rounded-lg shadow-lg">
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </main>
  )
}
