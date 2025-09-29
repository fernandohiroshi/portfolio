'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FiZoomIn, FiX } from 'react-icons/fi'

import Box from '@/components/view/bento/Box'

export default function UPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <main className="mx-auto my-4 min-h-screen max-w-4xl scroll-mt-24 px-4">
        <div className="mx-auto mt-8 grid max-w-4xl grid-flow-dense grid-cols-12 gap-4">
          <Box className="col-span-12 flex flex-col p-4 md:col-span-6">
            <div
              className="group relative h-[16rem] w-full cursor-pointer overflow-hidden rounded-lg"
              onClick={openModal}
            >
              <Image
                src="/imgs/u9n4i2n8t3&r.webp"
                alt="Desempenho da faculdade"
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transition-all duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50">
                <div className="flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:opacity-100">
                  <FiZoomIn className="h-5 w-5" />
                  <span className="font-medium">Ver</span>
                </div>
              </div>
            </div>

            {/* Texto descritivo */}
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">Desempenho da faculdade</p>
          </Box>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 duration-200 animate-in fade-in"
          onClick={closeModal}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-white duration-200 animate-in zoom-in-95 dark:bg-neutral-900"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            >
              <FiX className="h-6 w-6" />
            </button>

            {/* Modal Image */}
            <div className="relative h-[80vh] w-[80vw]">
              <Image
                src="/imgs/u9n4i2n8t3&r.webp"
                alt="Performance Oculta - Visualização Ampliada"
                fill
                quality={95}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
