import * as fse from '../src/index'
import os from 'node:os'
import fs from 'node:fs'
import path from 'node:path'
import assert from 'node:assert'
import { describe, it, beforeEach, afterEach } from 'vitest'


describe('jsonfile-integration', () => {
  let TEST_DIR

  beforeEach(() => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-lite', 'json')
    fse.emptyDirSync(TEST_DIR)
  })

  afterEach(() => fse.removeSync(TEST_DIR))

  describe('+ writeJsonSync / spaces', () => {
    it('should read a file and parse the json', () => {
      const obj1 = {
        firstName: 'JP',
        lastName: 'Richardson'
      }

      const file = path.join(TEST_DIR, 'file.json')
      fse.writeJsonSync(file, obj1)
      const data = fs.readFileSync(file, 'utf8')
      assert.strictEqual(data, JSON.stringify(obj1, null, 2))
    })
  })

  describe('+ writeJsonSync / EOL', () => {
    it('should read a file and parse the json', () => {
      const obj1 = {
        firstName: 'JP',
        lastName: 'Richardson'
      }

      const file = path.join(TEST_DIR, 'file.json')
      fse.writeJsonSync(file, obj1)
      const data = fs.readFileSync(file, 'utf8')
      assert.strictEqual(
        data,
        JSON.stringify(obj1, null, 2)
      )
    })
  })
})
