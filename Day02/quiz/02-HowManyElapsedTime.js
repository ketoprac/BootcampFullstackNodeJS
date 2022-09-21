/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1, year2) {
  let kabisat = [];
  for (let i = year1 + 1; i < year2; i++) {
    if (isKabisat(i)) {
      kabisat.push(i)
    }
  }
  return kabisat.length;
}

function isKabisat(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  }
  return false;
}

console.log(howManyKabisat(1997, 2021));