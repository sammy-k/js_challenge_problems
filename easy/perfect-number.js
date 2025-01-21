class PerfectNumber {
   constructor(num) {
    this.num = num;

    if (this.isInvalid()) {
      throw new Error("Negative numbers cannot be a perfect number");
    }
   }

   sumOfDivisors(arr) {
    return arr.reduce((accum, num) => accum + num, 0);
   }

   classify() {
    let divisors = [];
    for (let divisor = 1; divisor < this.num; divisor += 1) {
      if (this.num % divisor === 0) {
        divisors.push(divisor);
      }
    }
    let divisorTotal = this.sumOfDivisors(divisors);

    if (divisorTotal === this.num) {
      return 'perfect';
    } else if (divisorTotal < this.num) {
      return 'deficient';
    } else {
      return 'abundant';
    }
    
   }

   static classify(num) {
    return new PerfectNumber(num).classify();
  }

  isInvalid() {
    return this.num < 1;
  }
}

module.exports = PerfectNumber;