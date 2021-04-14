export const DnaCompliments = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
} as Record<string, string>

export interface MostFrequentKmersOutput {
  kmers: string[];
  count: number;
}

export class BioStrings {
  public static substringCount(haystack: string, needle: string): number {
    return (haystack.match(new RegExp(needle, 'gi')) || []).length
  }

  public static mostFrequentKmers(haystack: string, cardinality: number): MostFrequentKmersOutput {
    interface  StrCnt {
      key: string;
      cnt: number;
    }
    const kmers = new Map<string,  StrCnt>()

    BioStrings.slideText(haystack, cardinality, (kmer: string) => {
      if (kmers.has(kmer) === false) {
        kmers.set(kmer, {key: kmer, cnt: 1})
      } else {
        const cntEntry = kmers.get(kmer)!
        cntEntry.cnt++
        kmers.set(kmer, cntEntry)
      }
    })

    const allKmers = [...kmers.values()]
    const max = allKmers.reduce((max, kmer) => kmer.cnt > max ? kmer.cnt : max, 0)
    const mostFrequentKmers = allKmers
      .filter(kmer => kmer.cnt === max)
      .map(kmer => kmer.key)

    return {kmers: mostFrequentKmers, count: max}
  }

  public static dnaCompliment(seq: string): string {
    let result = ''

    for (let i = 0; i < seq.length; i++) {
      result += DnaCompliments[seq.charAt(i)]
    }

    return result
  }

  public static dnaReverseCompliment(seq: string): string {
    let result = ''

    for (let i = seq.length - 1; i >= 0; i--) {
      result += DnaCompliments[seq.charAt(i)]
    }

    return result
  }

  private static slideText(text: string, windowSize: number, map: (s: string) => void): void {
    if (text.length < windowSize) return

    for (let i = 0; i <= text.length - windowSize; i++) {
      const subsEnd = Number(i) + Number(windowSize)
      map(text.substring(i, subsEnd))
    }
  }
}
