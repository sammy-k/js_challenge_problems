class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(wordList) {
    let matches = [];
    let wordToMatch = this.word.toLowerCase().split('').sort().join('');

    wordList.forEach(word => {
      if (this.word.toLowerCase() !== word.toLowerCase() && wordToMatch === word.toLowerCase().split('').sort().join('')) {
        matches.push(word);
      }
    })

    return matches;
  }
}

module.exports = Anagram;