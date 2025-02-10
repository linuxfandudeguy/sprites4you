"use client"

import { useState, useEffect } from "react"
import SpriteGrid from "./components/SpriteGrid"
import Pagination from "./components/Pagination"
import ErrorMessage from "./components/ErrorMessage"
import type { Sprite } from "./types"

const SPRITES_PER_PAGE = 24

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const [sprites, setSprites] = useState<Sprite[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadSprites = async () => {
      try {
        const response = await fetch("/api/sprites")
        if (!response.ok) {
          throw new Error("Failed to fetch sprites")
        }
        const spriteList: Sprite[] = await response.json()
        setSprites(spriteList)
      } catch (error) {
        console.error("Error loading sprites:", error)
        setSprites([])
      } finally {
        setIsLoading(false)
      }
    }

    loadSprites()
  }, [])

  const totalPages = Math.ceil(sprites.length / SPRITES_PER_PAGE)
  const currentSprites = sprites.slice((currentPage - 1) * SPRITES_PER_PAGE, currentPage * SPRITES_PER_PAGE)

  if (isLoading) {
    return <div className="text-center">Loading...</div>
  }

  if (sprites.length === 0) {
    return <ErrorMessage message="There are currently no sprites available." />
  }

  return (
    <div className="space-y-8">
      <SpriteGrid sprites={currentSprites} />
      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
    </div>
  )
}

