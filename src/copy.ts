import path from 'node:path'
import { copyFileSync, statSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs'

export function copySync(source: string, destination: string) {
  // is a dir
  if (statSync(source).isDirectory()) {
    copyDirSync(source, destination)
  // is a file
  } else {
    const dir = path.dirname(destination)
    // ensure parent dir of dest file is exists
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true })
    }
    // copy file
    copyFileSync(source, destination)
  }
}

function copyDirSync(source: string, destination: string) {
  // delete dest file/dir if exists
  if (existsSync(destination)) {
    rmSync(destination, { recursive: true, force: true })
  }

  // make dest dir
  mkdirSync(destination, { recursive: true })

  // copy files in source to dest dir
  for (const file of readdirSync(source)) {
    const srcFile = path.resolve(source, file)
    const destFile = path.resolve(destination, file)
    copySync(srcFile, destFile)
  }
}
