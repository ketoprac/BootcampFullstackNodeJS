function isCharsUnique(string) {
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    let ch = string[i];
    if (obj[ch]) {
      return false;
    }
    obj[ch] = true;
  }
  return true;
}

console.log(isCharsUnique("abcdefg")); //true
console.log(isCharsUnique("abcdefga")); //false
