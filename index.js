function longestHexNumber() {
  const n = 1000;
  let longestNumber = 0;

  for (let middleDigit = 0; middleDigit < 16; middleDigit++) {
    for (let length = 1; length < n; length++) {
      let hexNumber = "3";
      for (let d = 0; d < length; d++) {
        hexNumber += d.toString(16);
      }
      hexNumber += middleDigit.toString(16);

      const decimalNumber = parseInt(hexNumber, 16);

      const satisfiesCondition = Array.from(
        { length },
        (_, k) => decimalNumber % (k + 1) === k
      );

      if (
        satisfiesCondition.every(Boolean) &&
        length > longestNumber.toString(16).length
      ) {
        longestNumber = decimalNumber;
      }
    }
  }

  return longestNumber.toString(16);
}

const result = longestHexNumber();
console.log("Longest hex number:", result);
