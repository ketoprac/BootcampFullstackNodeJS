function showPrimeNumber(n) {
  const prime = [];
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }

  let row = 1;
  let result = '';

  for (let i = 0; i < prime.length; i++) {
    if(row == 5) {
      row = 1;
      result += prime[i] + '\n';
    } else {
      result += prime[i] + ' ';
      row++
    }
  }
  return result;
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(showPrimeNumber(100));
/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */
