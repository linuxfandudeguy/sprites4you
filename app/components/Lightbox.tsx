"use client"

import { useState } from "react"
import Image from "next/image"
import type { Sprite } from "../types"

interface LightboxProps {
  sprite: Sprite
  onClose: () => void
}

export default function Lightbox({ sprite, onClose }: LightboxProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${window.location.origin}${sprite.imageUrl}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-pastel-yellow p-6 rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-gray-800">{sprite.name}</h2>
          <button onClick={onClose} className="text-gray-800 text-2xl">
            &times;
          </button>
        </div>
        <div className="mb-4">
          <Image
            src={sprite.imageUrl || "/placeholder.svg"}
            alt={`${sprite.name} by ${sprite.creator}`}
            width={200}
            height={200}
            className="pixelated mx-auto"
          />
        </div>
        <p className="text-center text-gray-600 mb-4">Created by: {sprite.creator}</p>
        <div className="flex justify-center space-x-4">
          <a href={sprite.imageUrl} download={`${sprite.creator}_${sprite.name}.png`} className="btn btn-primary">
            Download
          </a>
          <button onClick={copyToClipboard} className="btn btn-secondary">
            {copied ? "Copied!" : "Copy URL"}
          </button>
        </div>
      </div>
    </div>
  )
}

