import * as fse from '../src/index'
import os from 'node:os'
import fs from 'node:fs'
import path from 'node:path'
import assert from 'node:assert'
import { describe, it, beforeEach, afterEach } from 'vitest'


describe('create file', () => {
  let TEST_DIR

  beforeEach(() => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-lite', 'create-file')
    fse.emptyDirSync(TEST_DIR)
  })

  afterEach(() => fse.removeSync(TEST_DIR))

  describe('+ createFileSync', () => {
    it('should create a file', () => {
      const file = path.join(TEST_DIR, 'path/to/my/file.txt')
      fse.createFile(file)
      assert.strictEqual(fs.existsSync(file), true)
    })

    it('should do nothing', () => {
      const obj1 = {
        firstName: 'JP',
        lastName: 'Richardson'
      }

      const file = path.join(TEST_DIR, 'path/to/my/file.txt')
      fse.createFile(file, '1')
      fse.createFile(file, '2')
      assert.strictEqual(fse.readFileSync(file), '1')
    })
  })
})
