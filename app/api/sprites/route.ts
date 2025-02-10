import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  const spritesDirectory = path.join(process.cwd(), "public", "sprites")

  try {
    const fileNames = await fs.promises.readdir(spritesDirectory)
    const spriteFiles = fileNames.filter(
      (fileName) =>
        fileName.toLowerCase().endsWith(".png") ||
        fileName.toLowerCase().endsWith(".jpg") ||
        fileName.toLowerCase().endsWith(".jpeg"),
    )

    const sprites = spriteFiles.map((fileName, index) => {
      const [creator, spriteName] = path.parse(fileName).name.split("_")
      return {
        id: index + 1,
        name: spriteName || "Unknown",
        creator: creator || "Unknown",
        imageUrl: `/sprites/${fileName}`,
      }
    })

    return NextResponse.json(sprites)
  } catch (error) {
    console.error("Error reading sprites directory:", error)
    return NextResponse.json([])
  }
}

