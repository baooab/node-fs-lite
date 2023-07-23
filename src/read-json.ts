import { readFileSync } from './read-file'

export function readJsonSync(file: string): Record<string, any> | null {
  const fileStr = readFileSync(file)
  return JSON.parse(fileStr)
}
