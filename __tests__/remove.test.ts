import * as fse from '../src/index'
import os from 'node:os'
import fs from 'node:fs'
import path from 'node:path'
import assert from 'node:assert'
import { describe, it, beforeEach, afterEach } from 'vitest'

describe('removeSync', () => {
  let TEST_DIR

  beforeEach(() => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-lite', 'remove-sync')
    fse.mkdirsSync(TEST_DIR)
  })
  
  describe('remove/sync', () => {
    afterEach(() => fse.removeSync(TEST_DIR))
  
    describe('+ removeSync()', () => {
      it('should delete directories and files synchronously', () => {
        assert(fs.existsSync(TEST_DIR))
        fse.writeFileSync(path.join(TEST_DIR, 'somefile'), 'somedata')
        fse.removeSync(TEST_DIR)
        assert(!fs.existsSync(TEST_DIR))
      })
  
      it('should delete an empty directory synchronously', () => {
        assert(fs.existsSync(TEST_DIR))
        fse.removeSync(TEST_DIR)
        assert(!fs.existsSync(TEST_DIR))
      })
    })
  })
  
  describe('remove/sync', () => {

    describe('+ removeSync()', () => {
      it('should delete a file synchronously', () => {
        const file = path.join(TEST_DIR, 'file')
        fs.writeFileSync(file, 'hello')
        assert(fs.existsSync(file))
        fse.removeSync(file)
        assert(!fs.existsSync(file))
      })
    })
  })
})

