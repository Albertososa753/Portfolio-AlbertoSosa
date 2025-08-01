"use client"

import { useEffect, useState } from "react";

export default function TypingText({ text, delay = 0, speed = 30 }: { text: string; delay?: number; speed?: number }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }
    }, delay + currentIndex * speed)

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay, speed])

  return <span>{displayText}</span>
}
