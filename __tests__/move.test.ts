
import * as fse from '../src/index'
import os from 'node:os'
import fs from 'node:fs'
import path from 'node:path'
import assert from 'node:assert'
import { describe, it, beforeEach, afterEach } from 'vitest'

describe('moveSync()', () => {
  let TEST_DIR

  beforeEach(() => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-lite', 'move-sync')
    fse.emptyDirSync(TEST_DIR)

    fse.createFileSync(path.join(TEST_DIR, 'a-file'), 'sonic the hedgehog\n')
    fse.createFileSync(path.join(TEST_DIR, 'a-folder/another-file'), 'tails\n')
    fse.createFileSync(path.join(TEST_DIR, 'a-folder/another-folder/file3'), 'knuckles\n')
  })

  afterEach(() => fse.removeSync(TEST_DIR))

  it('should error if src and dest are the same and src does not exist', () => {
    const src = `${TEST_DIR}/non-existent`
    const dest = src
    assert.throws(() => fse.moveSync(src, dest))
  })

  it('should rename a file on the same device', () => {
    const src = path.resolve(TEST_DIR, 'a-file')
    const dest = path.resolve(TEST_DIR, 'a-file-dest')

    fse.moveSync(src, dest)

    const contents = fse.readFileSync(dest)
    const expected = /^sonic the hedgehog\r?\n$/
    assert(contents.match(expected))
  })

  it('should not overwrite the destination by default', () => {
    const src = `${TEST_DIR}/a-file`
    const dest = `${TEST_DIR}/a-folder/another-file`

    // verify file exists already
    assert(fs.existsSync(dest))

    try {
      fse.moveSync(src, dest)
    } catch (err) {
      assert.strictEqual(err.message, 'dest already exists.')
    }
  })

  it('should not overwrite if overwrite = false', () => {
    const src = `${TEST_DIR}/a-file`
    const dest = `${TEST_DIR}/a-folder/another-file`

    // verify file exists already
    assert(fs.existsSync(dest))

    try {
      fse.moveSync(src, dest)
    } catch (err) {
      assert.strictEqual(err.message, 'dest already exists.')
    }
  })

  it('should overwrite file if overwrite = true', () => {
    const src = `${TEST_DIR}/a-file`
    const dest = `${TEST_DIR}/a-folder/another-file`

    // verify file exists already
    assert(fs.existsSync(dest))

    fse.moveSync(src, dest)

    const contents = fs.readFileSync(dest, 'utf8')
    const expected = /^sonic the hedgehog\r?\n$/
    assert.ok(contents.match(expected))
  })

  it('should create directory structure by default', () => {
    const src = `${TEST_DIR}/a-file`
    const dest = `${TEST_DIR}/does/not/exist/a-file-dest`

    // verify dest directory does not exist
    assert(!fs.existsSync(path.dirname(dest)))

    fse.moveSync(src, dest)

    const contents = fs.readFileSync(dest, 'utf8')
    const expected = /^sonic the hedgehog\r?\n$/
    assert(contents.match(expected))
  })

  it('should work across devices', () => {
    const src = `${TEST_DIR}/a-file`
    const dest = `${TEST_DIR}/a-file-dest`


    fse.moveSync(src, dest)

    const contents = fs.readFileSync(dest, 'utf8')
    const expected = /^sonic the hedgehog\r?\n$/
    assert(contents.match(expected))
  })

  it('should move folders', () => {
    const src = `${TEST_DIR}/a-folder`
    const dest = `${TEST_DIR}/a-folder-dest`

    // verify it doesn't exist
    assert(!fs.existsSync(dest))

    fse.moveSync(src, dest)

    const contents = fs.readFileSync(dest + '/another-file', 'utf8')
    const expected = /^tails\r?\n$/
    assert(contents.match(expected))
  })


  describe('> when trying to move a file into its parent subdirectory', () => {
    it('should move successfully', () => {
      const src = `${TEST_DIR}/a-file`
      const dest = `${TEST_DIR}/dest/a-file-dest`

      fse.moveSync(src, dest)

      const contents = fs.readFileSync(dest, 'utf8')
      const expected = /^sonic the hedgehog\r?\n$/
      assert(contents.match(expected))
    })
  })
})
