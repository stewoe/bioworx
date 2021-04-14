import {expect, test} from '@oclif/test'

describe('string:kmer', () => {
  test
  .stdout()
  .command(['string:kmer'])
  .it('runs string:kmer', ctx => {
    expect(ctx.stdout).to.contain('Invalid command syntax: Arguments are missing')
  })

  test
  .stdout()
  .command(['string:kmer', 'AAABBBCCCBBBJJJBBJJJ', '3'])
  .it('runs string:kmer AAABBBCCCBBBJJJBBJJJ 3', ctx => {
    expect(ctx.stdout).to.contain('BBB')
  })
})
