class Roman {
  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let num = this.number;
    let roman = '';

    while (num > 0) {
      if (num >= 1000) {
        roman += 'M';
        num -= 1000;
      }
      if (num >= 500) {
        roman += 
      }
    }

    return roman;

  }
}

module.exports = Roman;