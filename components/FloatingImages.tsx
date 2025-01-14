'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const images = [
  '/placeholder.svg?height=50&width=50',
  '/placeholder.svg?height=60&width=60',
  '/placeholder.svg?height=70&width=70',
  '/placeholder.svg?height=80&width=80',
  '/placeholder.svg?height=90&width=90',
]

export default function FloatingImages() {
  const [floatingImages, setFloatingImages] = useState<JSX.Element[]>([])

  useEffect(() => {
    const newImages = images.map((src, index) => (
      <div
        key={index}
        className="absolute animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 10 + 10}s`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      >
        <Image src={src} alt="Floating image" width={80} height={80} />
      </div>
    ))
    setFloatingImages(newImages)
  }, [])

  return <>{floatingImages}</>
}

