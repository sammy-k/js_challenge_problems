class SumOfMultiples {
  constructor(mult1, mult2) {
    this.mult1 = mult1 || 3;
    this.mult2 = mult2 || 5;
  }

  to(num, mult1 = 3, mult2 = 5) {
    let sum = 0;
    for (let number = 1; number < num; number += 1) {
      if (number % mult1 === 0 || number % mult2 === 0) {
        sum += number;
      }
    }
    return sum;
  }

  static to(num, mult1 = 3, mult2 = 5) {
    return this.to(num, mult1, mult2);
  }

}

console.log(SumOfMultiples.to(4))

module.exports = SumOfMultiples;