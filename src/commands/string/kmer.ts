import {Command, flags} from '@oclif/command'
import {BioStrings} from '../../lib/bioworx/string/biostrings'

export default class StringKmer extends Command {
  static description = 'Returns the most frequent k-mer of <string>'

  static flags = {
    help: flags.help({char: 'h'}),
    simple: flags.boolean({char: 's'}),
  }

  static args = [
    {name: 'string'},
    {name: 'cardinality'},
  ]

  async run() {
    const {args, flags} = this.parse(StringKmer)

    if (!args.string || !args.cardinality) {
      this.log('Invalid command syntax: Arguments are missing')
      return
    }

    const result = BioStrings.mostFrequentKmers(args.string, args.cardinality)
    if (flags.simple === true) {
      this.log(result.kmers.join(','))
    } else {
      this.log(`k-mer count: ${result.count}`)
      this.log(`k-mer(s): ${result.kmers.join(',')}`)
    }
  }
}
