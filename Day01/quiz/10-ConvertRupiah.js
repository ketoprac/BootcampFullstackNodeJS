/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money, type) {
  if (type === "yen") {
    return `${money} ${type} = Rp.${(money * 130.12).toLocaleString("id-ID")}`;
  } else if (type === "usd") {
    return `${money} ${type} = Rp.${(money * 14382.5).toLocaleString("id-ID")}`;
  } else if (type === "euro") {
    return `${money} ${type} = Rp.${(money * 16000).toLocaleString("id-ID")}`;
  } else {
    return "No match type currency";
  }
}

console.log(convertToRupiah(1000, "yen")); //1000 yen  = Rp.130.120
console.log(convertToRupiah(100, "usd")); //100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100, "euro")); //100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100, "")); //no match type currency
