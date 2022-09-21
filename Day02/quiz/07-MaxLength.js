function maxWordLength(params) {
  const strSplit = params.split(" ");
  let word = "";
  for (let i = 0; i < strSplit.length; i++) {
    if (word.length < strSplit[i].length) {
      word = strSplit[i];
    }
  }
  return word;
}

console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp
