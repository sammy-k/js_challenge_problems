class DNA {
  constructor(strand) {
      this.strand = strand;
  }

  hammingDistance(strand2) {
    function getShorterStrandLength(strand1, strand2) {
      return strand1.length < strand2.length ? strand1.length : strand2.length;
    }

    if (this.strand === strand2) return 0;
    let shorterStrandLength = getShorterStrandLength(this.strand, strand2)

    let distance = 0;
    for (let idx = 0; idx < shorterStrandLength; idx += 1) {
      if (strand2[idx] !== this.strand[idx]) {
        distance += 1;
      }
    }
    return distance;
  }
}

module.exports = DNA;