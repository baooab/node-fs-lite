import { rmSync } from 'node:fs'

export function removeSync(path: string) {
  return rmSync(path, { recursive: true, force: true })
}
