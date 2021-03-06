import {expect, test} from '@oclif/test'

describe('string:startingpos', () => {
  test
  .stdout()
  .command(['string:startingpos'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['string:startingpos', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
