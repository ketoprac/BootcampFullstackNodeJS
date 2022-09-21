/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start, end) {
  if (isNaN(start) === true && isNaN(end) === true) {
    return `${start} or ${end} harus dalam angka`;
  } else if (start < end) {
    const income = ((end - start) / start) * 100;
    return `Total kenaikan income ${income}%`;
  } else {
    const result = ((start - end) / start) * 100;
    const income = Math.ceil(result);
    return `Total penurunan income -${income}%`;
  }
}

console.log(getProsentase("abc", "bca")); //abc or bca harus dalam angka
console.log(getProsentase(600000.0, 750000.0)); //Total kenaikan income 25%
console.log(getProsentase(750000.0, 650000.0)); //Total penurunan income -14%
