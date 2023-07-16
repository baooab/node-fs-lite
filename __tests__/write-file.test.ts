import * as fse from '../src/index'
import os from 'node:os'
import fs from 'node:fs'
import path from 'node:path'
import assert from 'node:assert'
import { describe, it, beforeEach, afterEach } from 'vitest'


describe('write file', () => {
  let TEST_DIR

  beforeEach(() => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-lite', 'write-file')
    fse.emptyDirSync(TEST_DIR)
  })

  afterEach(() => fse.removeSync(TEST_DIR))

  it('should write a file', () => {
    const obj1 = {
      firstName: 'JP',
      lastName: 'Richardson'
    }

    const file = path.join(TEST_DIR, 'path/to/my/file.txt')
    fse.writeFile(file, JSON.stringify(obj1))
    const data = fs.readFileSync(file, 'utf8')
    assert.strictEqual(data, JSON.stringify(obj1))
  })

  it('should write a file', () => {
    const obj1 = {
      firstName: 'JP',
      lastName: 'Richardson'
    }

    const file = path.join(TEST_DIR, 'path/to/my/file.txt')
    fse.createFile(file)
    fse.writeFile(file, JSON.stringify(obj1))
    const data = fs.readFileSync(file, 'utf8')
    assert.strictEqual(data, JSON.stringify(obj1))
  })
})
