import fse from '../src/index'
import { describe, it, expect } from 'vitest'

describe('test origin fs module', () => {
  it('has default export', () => {
    expect(fse).toBeDefined()
  })

  it('has native named export', () => {
    expect(fse.existsSync).toBeDefined()
  })
})
