/**
 * input 4 digit integer lalu hitung jumlahnya
 */

function sumDigit(n) {
  if (n > 10000) {
    return `${n} harus lebih kecil dari 10000`;
  } else if (isNaN(n) !== true) {
    let sum = n
      .toString()
      .split('')
      .map(Number)
      .reduce((a, b) => {
          return a + b;
        }, 0);
    return sum;
  } else if (isNaN(n) === true) {
    return `${n} is not a number, try again`;
  }
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234")); //10
console.log(sumDigit(12345)); //12345 harus lebih kecil dari 10000
console.log(sumDigit("a123")); //a123 is not number, try again...
