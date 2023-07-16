import { copySync } from './copy'
import { removeSync } from './remove'

export function moveSync(source: string, destination: string) {
  copySync(source, destination)
  return removeSync(source)
}
