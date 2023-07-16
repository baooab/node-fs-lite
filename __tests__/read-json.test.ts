import * as fse from '../src/index'
import os from 'node:os'
import path from 'node:path'
import assert from 'node:assert'
import { describe, it, beforeEach, afterEach } from 'vitest'


describe('jsonfile-integration', () => {
  let TEST_DIR

  beforeEach(() => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-lite', 'read-rson')
    fse.emptyDirSync(TEST_DIR)
  })

  afterEach(() => fse.removeSync(TEST_DIR))
  describe('+ readJSON', () => {
    it('should read a file and parse the json', done => {
      const obj1 = {
        firstName: 'JP',
        lastName: 'Richardson'
      }

      const file = path.join(TEST_DIR, 'file.json')
      fse.writeFileSync(file, JSON.stringify(obj1))
      const content = fse.readJsonSync(file)
      assert.deepStrictEqual(content, obj1)
    })

    it('should error if it cant parse the json', done => {
      const file = path.join(TEST_DIR, 'file2.json')
      fse.writeFileSync(file, '%asdfasdff444')
      try {
        fse.readJsonSync(file) 
      } catch (error) {
        assert.strictEqual(error.message, 'Unexpected token % in JSON at position 0')
      }
    })
  })

})
