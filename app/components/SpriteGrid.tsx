"use client"

import { useState } from "react"
import Image from "next/image"
import type { Sprite } from "../types"
import Lightbox from "./Lightbox"

interface SpriteGridProps {
  sprites: Sprite[]
}

export default function SpriteGrid({ sprites }: SpriteGridProps) {
  const [selectedSprite, setSelectedSprite] = useState<Sprite | null>(null)

  if (sprites.length === 0) {
    return null
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {sprites.map((sprite) => (
          <div
            key={sprite.id}
            className="bg-pastel-green p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedSprite(sprite)}
          >
            <Image
              src={sprite.imageUrl || "/placeholder.svg"}
              alt={`${sprite.name} by ${sprite.creator}`}
              width={64}
              height={64}
              className="pixelated"
            />
            <p className="mt-2 text-center text-gray-800 font-semibold">{sprite.name}</p>
            <p className="text-xs text-gray-600">by {sprite.creator}</p>
          </div>
        ))}
      </div>
      {selectedSprite && <Lightbox sprite={selectedSprite} onClose={() => setSelectedSprite(null)} />}
    </>
  )
}

