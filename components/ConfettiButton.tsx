'use client'

import { useState } from 'react'
import Confetti from 'react-confetti'
import { Button } from "@/components/ui/button"

export default function ConfettiButton() {
  const [isConfettiActive, setIsConfettiActive] = useState(false)
  const [popCount, setPopCount] = useState(0)

  const handleClick = () => {
    setIsConfettiActive(true)
    setPopCount(prevCount => prevCount + 1)
    setTimeout(() => setIsConfettiActive(false), 5000) // Confetti lasts for 5 seconds
  }

  return (
    <div className="text-center">
      <Button onClick={handleClick} variant="secondary" size="lg">
        Pop a Balloon!
      </Button>
      <p className="mt-2 text-gray-300">Balloons popped: {popCount}</p>
      {isConfettiActive && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
        />
      )}
    </div>
  )
}

