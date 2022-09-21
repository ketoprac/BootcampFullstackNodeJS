/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


function getPeriodTimes(seconds) {
    if (isNaN(seconds) !== true) {
      const secs = Math.floor(seconds % 60);
      const mins = Math.floor((seconds % 3600) / 60);
      const hours = Math.floor((seconds % (3600 * 24)) / 3600);
      const days = Math.floor(seconds / (3600 * 24));

      return `${days} hari ${hours} jam ${mins} menit ${secs} detik` 
    } else {
      return `${seconds} is not a number`
    }
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik