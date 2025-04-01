"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { Howl } from "howler"

interface SoundContextType {
  playHover: () => void
  playClick: () => void
  playSuccess: () => void
  isSoundEnabled: boolean
  toggleSound: () => void
}

const SoundContext = createContext<SoundContextType>({
  playHover: () => {},
  playClick: () => {},
  playSuccess: () => {},
  isSoundEnabled: true,
  toggleSound: () => {},
})

export const useSoundContext = () => useContext(SoundContext)

export default function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true)
  const [sounds, setSounds] = useState<{
    hover: Howl | null
    click: Howl | null
    success: Howl | null
  }>({
    hover: null,
    click: null,
    success: null,
  })

  useEffect(() => {
    // Initialize sounds
    setSounds({
      hover: new Howl({
        src: ["/sounds/hover.mp3"],
        volume: 0.2,
      }),
      click: new Howl({
        src: ["/sounds/click.mp3"],
        volume: 0.3,
      }),
      success: new Howl({
        src: ["/sounds/success.mp3"],
        volume: 0.4,
      }),
    })

    // Check if sound preference is stored
    const storedPreference = localStorage.getItem("soundEnabled")
    if (storedPreference !== null) {
      setIsSoundEnabled(storedPreference === "true")
    }
  }, [])

  const playHover = () => {
    if (isSoundEnabled && sounds.hover) {
      sounds.hover.play()
    }
  }

  const playClick = () => {
    if (isSoundEnabled && sounds.click) {
      sounds.click.play()
    }
  }

  const playSuccess = () => {
    if (isSoundEnabled && sounds.success) {
      sounds.success.play()
    }
  }

  const toggleSound = () => {
    const newState = !isSoundEnabled
    setIsSoundEnabled(newState)
    localStorage.setItem("soundEnabled", String(newState))
  }

  return (
    <SoundContext.Provider
      value={{
        playHover,
        playClick,
        playSuccess,
        isSoundEnabled,
        toggleSound,
      }}
    >
      {children}
    </SoundContext.Provider>
  )
}

