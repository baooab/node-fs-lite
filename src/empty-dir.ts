import path from 'node:path'
import { existsSync, readdirSync, rmSync } from 'node:fs'

export function emptyDirSync(dir: string) {
  if (!existsSync(dir)) {
    return
  }

  for (const file of readdirSync(dir)) {
    rmSync(path.resolve(dir, file), { recursive: true, force: true })
  }
}
