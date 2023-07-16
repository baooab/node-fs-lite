import { readFileSync } from './read-file'

export function readJsonSync(file: string): Record<string, any> | undefined {
  const fileStr = readFileSync(file)
  return JSON.parse(fileStr)
}
