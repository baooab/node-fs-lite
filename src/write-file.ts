import path from 'node:path'
import { existsSync, mkdirSync, rmSync, writeFileSync as _writeFileSync } from 'node:fs'

export function writeFileSync(file: string, content: string) {
  if (existsSync(file)) {
    rmSync(file, { recursive: true, force: true })
  }

  const dir = path.dirname(file)
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true })
  }

  return _writeFileSync(file, content, { encoding: 'utf-8' })
}
