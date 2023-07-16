import * as fse from '../src/index'
import os from 'node:os'
import fs from 'node:fs'
import path from 'node:path'
import assert from 'node:assert'
import crypto from 'node:crypto'
import { describe, it, beforeEach, afterEach } from 'vitest'


describe('+ copySync() / file', () => {
  let TEST_DIR

  
  const SIZE = 16 * 64 * 1024 + 7
  let src, dest

  beforeEach(() => {
    TEST_DIR = path.join(os.tmpdir(), 'test-fs-lite', 'copy-sync-dir')
    if (fs.existsSync(TEST_DIR)) {
      fse.removeSync(TEST_DIR)
    }
    fse.ensureDirSync(TEST_DIR)
  })

  afterEach(() => fse.removeSync(TEST_DIR))


  describe('> when src is a file', () => {
    describe('> when dest exists and is a directory', () => {
      it('should throw error', () => {
        const src = path.join(TEST_DIR, 'file.txt')
        const dest = path.join(TEST_DIR, 'dir')
        fse.ensureFileSync(src)
        fse.ensureDirSync(dest)

        try {
          fse.copySync(src, dest)
        } catch (err) {
          assert.strictEqual(err.message, `EPERM: operation not permitted, copyfile '${src}' -> '${dest}'`)
        }
      })
    })

    it('should copy the file synchronously', () => {
      const fileSrc = path.join(TEST_DIR, 'TEST_fs-extra_src')
      const fileDest = path.join(TEST_DIR, 'TEST_fs-extra_copy')

      fse.writeFileSync(fileSrc, Math.random().toString(32).slice(2))

      const srcMd5 = crypto.createHash('md5').update(fs.readFileSync(fileSrc)).digest('hex')
      let destMd5 = ''

      fse.copySync(fileSrc, fileDest)

      destMd5 = crypto.createHash('md5').update(fs.readFileSync(fileDest)).digest('hex')
      assert.strictEqual(srcMd5, destMd5)
    })

    describe('> when the destination dir does not exist', () => {
      it('should create the destination directory and copy the file', () => {
        const src = path.join(TEST_DIR, 'file.txt')
        const dest = path.join(TEST_DIR, 'this/path/does/not/exist/copied.txt')
        const data = 'did it copy?\n'

        fs.writeFileSync(src, data, 'utf8')
        
        fse.copySync(src, dest)

        const data2 = fs.readFileSync(dest, 'utf8')

        assert.strictEqual(data, data2)
      })
    })

    describe('> when src file does not have write permissions', () => {
      it('should be able to copy contents of file', () => {
        const fileSrc = path.join(TEST_DIR, 'file.txt')
        const fileDest = path.join(TEST_DIR, 'file-copy.txt')
        const data = 'did it copy?'

        fs.writeFileSync(fileSrc, data, 'utf8')
        fs.chmodSync(fileSrc, '0444')

        fse.copySync(fileSrc, fileDest)

        const data2 = fs.readFileSync(fileDest, 'utf8')

        assert.strictEqual(data, data2)
      })
    })

    describe('> when overwrite option is passed', () => {
      const srcData = 'some src data'
      let src, dest

      beforeEach(() => {
        src = path.join(TEST_DIR, 'src-file')
        dest = path.join(TEST_DIR, 'des-file')

        // source file must always exist in these cases
        fs.writeFileSync(src, srcData)
      })

      describe('> when destination file does NOT exist', () => {
        describe('> when overwrite is true', () => {
          it('should copy the file and not throw an error', () => {
            fse.copySync(src, dest)
            const destData = fs.readFileSync(dest, 'utf8')
            assert.strictEqual(srcData, destData)
          })
        })

        describe('> when overwrite is false', () => {
          it('should copy the file and not throw an error', () => {
            fse.copySync(src, dest)
            const destData = fs.readFileSync(dest, 'utf8')
            assert.strictEqual(srcData, destData)
          })
        })
      })

      describe('when destination file does exist', () => {
        let destData

        beforeEach(() => {
          destData = 'some dest data'
          fs.writeFileSync(dest, destData)
        })

        describe('> when overwrite is true', () => {
          it('should copy the file and not throw an error', () => {
            fse.copySync(src, dest)
            destData = fs.readFileSync(dest, 'utf8')
            assert.strictEqual(srcData, destData)
          })
        })
      })
       
    })
  })

  describe('> when src is a directory', () => {
    describe('> when dest exists and is a file', () => {
      it('should throw error', () => {
        const src = path.join(TEST_DIR, 'src')
        const dest = path.join(TEST_DIR, 'file.txt')
        fs.mkdirSync(src)
        fse.ensureFileSync(dest)

        try {
          fse.copySync(src, dest)
        } catch (err) {
          assert.strictEqual(err.message, `Cannot overwrite non-directory '${dest}' with directory '${src}'.`)
        }
      })
    })

    it('should copy the directory synchronously', () => {
      const FILES = 2

      src = path.join(TEST_DIR, 'src')
      dest = path.join(TEST_DIR, 'dest')

      fs.mkdirSync(src)

      for (let i = 0; i < FILES; ++i) {
        fs.writeFileSync(path.join(src, i.toString()), crypto.randomBytes(SIZE))
      }

      const subdir = path.join(src, 'subdir')

      fs.mkdirSync(subdir)

      for (let i = 0; i < FILES; ++i) {
        fs.writeFileSync(path.join(subdir, i.toString()), crypto.randomBytes(SIZE))
      }

      fse.copySync(src, dest)
      assert(fs.existsSync(dest))

      for (let i = 0; i < FILES; ++i) {
        assert(fs.existsSync(path.join(dest, i.toString())))
      }

      const destSub = path.join(dest, 'subdir')
      for (let j = 0; j < FILES; ++j) {
        assert(fs.existsSync(path.join(destSub, j.toString())))
      }
    })

    describe('> when the destination dir does not exist', () => {
      it('should create the destination directory and copy the file', () => {
        const src = path.join(TEST_DIR, 'data/')
        fs.mkdirSync(src)

        const d1 = 'file1'
        const d2 = 'file2'

        fs.writeFileSync(path.join(src, 'f1.txt'), d1)
        fs.writeFileSync(path.join(src, 'f2.txt'), d2)

        const dest = path.join(TEST_DIR, 'this/path/does/not/exist/outputDir')

        fse.copySync(src, dest)

        const o1 = fs.readFileSync(path.join(dest, 'f1.txt'), 'utf8')
        const o2 = fs.readFileSync(path.join(dest, 'f2.txt'), 'utf8')

        assert.strictEqual(d1, o1)
        assert.strictEqual(d2, o2)
      })
    })
  })
})
