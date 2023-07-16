import { existsSync, readFileSync as _readFileSync } from 'node:fs'

export function readFileSync(file: string): string | undefined {
  if (!existsSync(file)) {
    return
  }

  return _readFileSync(file, { encoding: 'utf-8' })
}
