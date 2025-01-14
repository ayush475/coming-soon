'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 30,
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 }
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 }
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 }
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 }
        } else {
          clearInterval(timer)
          return prevTime
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 animate-fade-in-up">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <Card key={unit} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
          <CardContent className="p-4">
            <div className="text-3xl sm:text-4xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
            <div className="text-sm text-gray-300 capitalize">{unit}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

