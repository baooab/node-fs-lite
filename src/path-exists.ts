import { existsSync } from 'node:fs'

export function pathExistsSync(path: string) {
  return existsSync(path)
}
