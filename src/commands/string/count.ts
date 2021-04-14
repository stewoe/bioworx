import {Command, flags} from '@oclif/command'
import {BioStrings} from '../../lib/bioworx/string/biostrings'

export default class StringCount extends Command {
  static description = 'Returns the number of appearances of <substring> in <string>'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    {name: 'string'},
    {name: 'substring'},
  ]

  async run() {
    const {args} = this.parse(StringCount)

    if (!args.string || !args.substring) {
      this.log('Invalid command syntax: Arguments are missing')
      return
    }

    this.log(BioStrings.substringCount(args.string, args.substring).toString())
  }
}
