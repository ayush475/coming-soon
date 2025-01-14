'use client'

import { useEffect, useState, useCallback } from 'react'

const balloonColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FED766', '#2AB7CA', '#F0B67F']

interface Balloon {
  id: number
  color: string
  x: number
  y: number
  size: number
  speed: number
}

export default function FloatingBalloons() {
  const [balloons, setBalloons] = useState<Balloon[]>([])

  const createBalloons = useCallback(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 15,
      speed: Math.random() * 1 + 0.5,
    }))
  }, [])

  useEffect(() => {
    setBalloons(createBalloons())

    const animateBalloons = () => {
      setBalloons(prevBalloons =>
        prevBalloons.map(balloon => ({
          ...balloon,
          y: (balloon.y - balloon.speed * 0.1 + 100) % 100,
          x: (balloon.x + Math.sin(balloon.y * 0.1) * 0.2 + 100) % 100,
        }))
      )
    }

    const intervalId = setInterval(animateBalloons, 50)
    return () => clearInterval(intervalId)
  }, [createBalloons])

  return (
    <>
      {balloons.map(balloon => (
        <div
          key={balloon.id}
          className="absolute transition-all duration-500 ease-in-out"
          style={{
            left: `${balloon.x}%`,
            top: `${balloon.y}%`,
            opacity: 0.7,
          }}
        >
          <svg
            width={balloon.size}
            height={balloon.size * 1.2}
            viewBox="0 0 50 60"
            fill={balloon.color}
          >
            <path d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 60L20 50H30L25 60Z" />
          </svg>
        </div>
      ))}
    </>
  )
}

