import {expect, test} from '@oclif/test'

describe('string-count', () => {
  test
  .stdout()
  .command(['string:count', 'AABBAACCAA', 'AA'])
  .it('runs string:count AABBAACCAA AA', ctx => {
    expect(ctx.stdout).to.contain('3')
  })

  test
  .stdout()
  .command(['string:count', 'AABBAACCAA'])
  .it('runs string:count AABBAACCAA', ctx => {
    expect(ctx.stdout).to.contain('Invalid command syntax')
  })
})
