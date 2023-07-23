import { writeFileSync } from "./write-file";

export function writeJsonSync(file: string, object: Record<string, any>) {
  return writeFileSync(file, JSON.stringify(object, null, 2))
}
