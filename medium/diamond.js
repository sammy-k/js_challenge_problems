class Diamond {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    const alphabet = this.alphabet;
    let letterIndex = alphabet.indexOf(letter);
    const diamond = [];

    for (let i = 0; i <= letterIndex; i++) {
      const row = ' '.repeat(letterIndex - i) + alphabet[i];
    if (i > 0) {
      diamond.push(row + ' '.repeat(2 * i - 1) + alphabet[i]);
    } else {
      diamond.push(row);
    }
  }

  for (let i = letterIndex - 1; i >= 0; i--) {
    diamond.push(diamond[i]);
  }

  return diamond.join('\n');
  }
}

console.log(Diamond.makeDiamond('A'));
console.log(Diamond.makeDiamond('C'));
console.log(Diamond.makeDiamond('E'));

module.exports = Diamond;