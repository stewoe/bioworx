import {expect, test} from '@oclif/test'

describe('string:revcompl', () => {
  test
  .stdout()
  .command(['string:revcompl'])
  .it('runs string:revcompl', ctx => {
    expect(ctx.stdout).to.contain('Invalid command syntax: Arguments are missing')
  })

  test
  .stdout()
  .command(['string:revcompl', 'AACGT'])
  .it('runs string:revcompl AACGT', ctx => {
    expect(ctx.stdout).to.contain('ACGTT')
  })
})
