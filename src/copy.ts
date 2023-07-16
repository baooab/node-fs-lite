import path from 'node:path'
import { copyFileSync, statSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs'

export function copySync(source: string, destination: string) {
  if (statSync(source).isDirectory()) {
    copyDirSync(source, destination)
  } else {
    const dir = path.dirname(destination)
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true })
    }
    copyFileSync(source, destination)
  }
}

function copyDirSync(source: string, destination: string) {
  if (existsSync(destination)) {
    rmSync(destination, { recursive: true, force: true })
  }

  mkdirSync(destination, { recursive: true })

  for (const file of readdirSync(source)) {
    const srcFile = path.resolve(source, file)
    const destFile = path.resolve(destination, file)
    copySync(srcFile, destFile)
  }
}
