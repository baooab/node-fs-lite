import * as fse from '../src/index'
import os from 'node:os'
import fs from 'node:fs'
import path from 'node:path'
import assert from 'node:assert'
import { describe, it, beforeEach, afterEach } from 'vitest'

describe('+ emptyDir()', () => {
  let TEST_DIR

  beforeEach(() => {
    TEST_DIR = path.join(os.tmpdir(), 'test-fs-lite', 'empty-dir')
    if (fs.existsSync(TEST_DIR)) {
      fse.removeSync(TEST_DIR)
    }
    fse.ensureDirSync(TEST_DIR)
  })

  afterEach(() => fse.removeSync(TEST_DIR))

  describe('> when directory exists and contains items', () => {
    it('should delete all of the items', () => {
      // verify nothing
      assert.strictEqual(fs.readdirSync(TEST_DIR).length, 0)
      fse.ensureFileSync(path.join(TEST_DIR, 'some-file'))
      fse.ensureFileSync(path.join(TEST_DIR, 'some-file-2'))
      fse.ensureDirSync(path.join(TEST_DIR, 'some-dir'))
      assert.strictEqual(fs.readdirSync(TEST_DIR).length, 3)

      fse.emptyDirSync(TEST_DIR)
      assert.strictEqual(fs.readdirSync(TEST_DIR).length, 0)
    })
  })

  describe('> when directory exists and contains no items', () => {
    it('should do nothing', () => {
      assert.strictEqual(fs.readdirSync(TEST_DIR).length, 0)
      fse.emptyDirSync(TEST_DIR)
      assert.strictEqual(fs.readdirSync(TEST_DIR).length, 0)
    })
  })

  describe('> when directory does not exist', () => {
    it('should do nothing', () => {
      fse.removeSync(TEST_DIR)
      assert(!fs.existsSync(TEST_DIR))
      fse.emptyDirSync(TEST_DIR)
      assert(!fs.existsSync(TEST_DIR))
    })
  })
})
