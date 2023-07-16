

import * as fs from '../src/index'
import os from 'node:os'
import path from 'node:path'
import assert from 'node:assert'
import { describe, it, beforeEach, afterEach } from 'vitest'

describe('pathExists()', () => {
  let TEST_DIR

  beforeEach(() => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-lite', 'path-exists')
    fs.mkdirsSync(TEST_DIR)
  })

  afterEach(() => fs.removeSync(TEST_DIR))

  it('should return false if file does not exist', () => {
    assert(!fs.pathExistsSync(path.join(TEST_DIR, 'somefile')))
  })

  it('should return true if file does exist', () => {
    const file = path.join(TEST_DIR, 'exists')
    fs.ensureFileSync(file)
    assert(fs.pathExistsSync(file))
  })
})
