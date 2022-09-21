const checkPermute = function (stringOne, stringTwo) {
  // if different lengths, return false
  // else sort and compare
  // (doesnt matter how it's sorted, as long as it's sorted the same way)
  let splitStr1 = stringOne.split("");
  let splitStr2 = stringTwo.split("");
  let sortStr1 = splitStr1.sort();
  let sortStr2 = splitStr2.sort();
  if (
    stringOne.length === stringTwo.length &&
    sortStr1.join("") === sortStr2.join("")
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(checkPermute("aba", "aab")); //true;
console.log(checkPermute("aba", "aaba")); //false;
console.log(checkPermute("aba", "aa")); //false;
