import { existsSync, readFileSync as _readFileSync } from 'node:fs'

export function readFileSync(file: string): string | null {
  if (!existsSync(file)) {
    return null
  }

  return _readFileSync(file, { encoding: 'utf-8' })
}
