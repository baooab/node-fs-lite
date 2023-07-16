import { mkdirSync, existsSync } from 'node:fs'

export function mkdirsSync(dir: string) {
  if (existsSync(dir)) {
    return
  }

  return mkdirSync(dir, { recursive: true })
}
