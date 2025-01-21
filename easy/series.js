class Series {
  constructor(numString) {
    this.numString = numString;
  }

  slices(numToSlice) {
    this.checkLength(numToSlice);
    
    let num = this.numString;
    let sliceArr = [];
    for (let idx = 0; idx < num.length; idx += 1) {
      let slice = [];
      let count = numToSlice;
      let countIdx = idx;
      while (count > 0) {
        if (isNaN(Number(num[countIdx]))) break;
        slice.push(Number(num[countIdx]));
        countIdx += 1;
        count -= 1;
      }
      if (slice.length === numToSlice) sliceArr.push(slice);
    }
    return sliceArr;
  }

  checkLength(length) {
    if (length > this.numString.length) {
      throw new Error("Series length can't be greater than string length");
    }
  }
}

let series = new Series('01234');
console.log(series.slices(2));

module.exports = Series;