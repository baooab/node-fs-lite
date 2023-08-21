import path from 'node:path'
import { existsSync, mkdirSync, writeFileSync as _writeFileSync } from 'node:fs'

export function writeFileSync(file: string, content: string) {
  const dir = path.dirname(file)
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true })
  }

  return _writeFileSync(file, content, { encoding: 'utf-8' })
}
