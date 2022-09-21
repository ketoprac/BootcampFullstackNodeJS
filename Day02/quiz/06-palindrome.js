function isPalindrome(word) {
  const regex = /[\W_]/g;
  const lowerStr = word.toLowerCase().replace(regex, "");
  const reverseStr = lowerStr.split("").reverse().join("");

  return reverseStr === lowerStr;
}

console.log(isPalindrome("kasur ini rUsak")); //true
console.log(isPalindrome("kasur ini")); //false