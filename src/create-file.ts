import { existsSync } from 'node:fs'
import { writeFileSync } from './write-file'

export function createFileSync(file: string, content: string = '') {
  if (existsSync(file)) {
    return
  }

  return writeFileSync(file, content)
}
