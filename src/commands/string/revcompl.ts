import {Command, flags} from '@oclif/command'
import {BioStrings} from '../../lib/bioworx/string/biostrings'

export default class StringRevcompl extends Command {
  static description = 'Returns reverse compliment of <sequence>'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    {name: 'sequence'},
  ]

  async run() {
    const {args} = this.parse(StringRevcompl)

    if (!args.sequence) {
      this.log('Invalid command syntax: Arguments are missing')
      return
    }

    this.log(BioStrings.dnaReverseCompliment(args.sequence))
  }
}
