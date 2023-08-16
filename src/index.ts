import { readJsonSync } from './read-json'
import { writeJsonSync } from './write-json'
import { createFileSync } from './create-file'
import { writeFileSync } from './write-file'
import { readFileSync } from './read-file'
import { mkdirsSync } from './mkdirs'
import { emptyDirSync } from './empty-dir'
import { pathExistsSync } from './path-exists'
import { copySync } from './copy'
import { moveSync } from './move'
import { removeSync } from './remove'

import { toAsync } from './_utils'

const readJson = toAsync(readJsonSync)
const writeJson = toAsync(writeJsonSync)
const createFile = toAsync(createFileSync)
const writeFile = toAsync(writeFileSync)
const readFile = toAsync(readFileSync)
const mkdirs = toAsync(mkdirsSync)
const emptyDir = toAsync(emptyDirSync)
const pathExists = toAsync(pathExistsSync)
const copy = toAsync(copySync)
const move = toAsync(moveSync)
const remove = toAsync(removeSync)

// alias
const mkdirp = mkdirs
const ensureDir = mkdirs
const ensureFile = createFile
const rimraf = remove
const ncp = copy
const mkdirpSync = mkdirsSync
const ensureDirSync = mkdirsSync
const ensureFileSync = createFileSync
const rimrafSync = removeSync
const ncpSync = copySync

export * from 'node:fs'
export { default } from 'node:fs'

export {
  // async methods
  readJson,
  writeJson,
  createFile,
  writeFile,
  readFile,
  mkdirs,
  emptyDir,
  pathExists,
  copy,
  move,
  remove,
  // async methods
  readJsonSync,
  writeJsonSync,
  createFileSync,
  writeFileSync,
  readFileSync,
  mkdirsSync,
  emptyDirSync,
  pathExistsSync,
  copySync,
  moveSync,
  removeSync,
  // alias
  mkdirp,
  mkdirpSync,
  rimraf,
  rimrafSync,
  ncp,
  ncpSync,
  ensureDir,
  ensureDirSync,
  ensureFile,
  ensureFileSync
}
