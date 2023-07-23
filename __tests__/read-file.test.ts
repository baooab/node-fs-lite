import * as fse from '../src/index'
import os from 'node:os'
import path from 'node:path'
import assert from 'node:assert'
import { describe, it, beforeEach, afterEach } from 'vitest'


describe('read-file', () => {
  let TEST_DIR

  beforeEach(() => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-lite', 'read-file')
    fse.emptyDirSync(TEST_DIR)
  })

  afterEach(() => fse.removeSync(TEST_DIR))
  describe('+ readFile', () => {
    it('should read a file and parse the json', done => {
      const obj1 = {
        firstName: 'JP',
        lastName: 'Richardson'
      }

      const file = path.join(TEST_DIR, 'file.txt')
      fse.writeFileSync(file, JSON.stringify(obj1))
      const content = fse.readFileSync(file)
      assert.deepStrictEqual(content, JSON.stringify(obj1))
    })

    it('should error if it cant read the file', done => {
      const file = path.join(TEST_DIR, 'file2.json')
      assert.strictEqual(fse.readFileSync(file) , null)
    })
  })

})
