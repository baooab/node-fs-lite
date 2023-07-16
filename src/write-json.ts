import { writeFileSync } from "./write-file";

export function writeJsonSync(file: string, content: Record<string, any>) {
  return writeFileSync(file, JSON.stringify(content, null, 2))
}
