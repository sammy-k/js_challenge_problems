class Scrabble {
  constructor(word) {
    this.word = word;

    this.key = {
      1: ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"],
      2: ["d", "g"],
      3: ["b", "c", "m", "p"],
      4: ["f", "h", "v", "w", "y"],
      5: ["k"],
      8: ["j", "x"],
      10: ["q", "z"],
      0: [" "]
    };
  }

  score() {
    let score = 0;
    if (typeof this.word !== 'string') return score;
    this.word.toLowerCase().split('').forEach(char => {
      Object.entries(this.key).forEach(entry => {
        if (entry[1].includes(char)) {
          score += Number(entry[0])
        }
      })
    })
    return score;
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;
