import * as fse from '../src/index'
import os from 'node:os'
import fs from 'node:fs'
import path from 'node:path'
import assert from 'node:assert'
import { describe, it, beforeEach, afterEach } from 'vitest'

describe('fs-lite', () => {
  let TEST_DIR

  beforeEach(() => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-lite', 'mkdir')
    fse.mkdirsSync(TEST_DIR)
  })

  afterEach(() => fse.removeSync(TEST_DIR))

  describe('+ mkdirsSync()', () => {
    it('should make the directory', () => {
      const dir = path.join(TEST_DIR, 'tmp-' + Date.now() + Math.random())

      assert(!fs.existsSync(dir))
      fse.mkdirsSync(dir)
      assert(fs.existsSync(dir))

    })

    it('should make the entire directory path', () => {
      const dir = path.join(TEST_DIR, 'tmp-' + Date.now() + Math.random())
      const newDir = path.join(dir, 'dfdf', 'ffff', 'aaa')

      assert(!fs.existsSync(newDir))
      fse.mkdirsSync(newDir)
      assert(fs.existsSync(newDir))

    })
  })

})
