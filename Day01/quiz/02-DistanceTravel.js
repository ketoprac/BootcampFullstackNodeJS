/** hitung jarak antar kota
 *  dimana rumus jarak S = 1/2*a*t^2
 *  function calculateDistance(a,t),
 *  where a = accelaration in number
 *  t : time
 */

function calculateDistance(a, t) {
  if (isNaN(a) === true && isNaN(t) === true) {
    return "Input must be a number";
  } else if (a < 0 || t < 0) {
    return "Acceleration or time must be greater than or equal to zero!";
  } else {
    return `Jarak yang ditempuh adalah ${(1 / 2) * a * Math.pow(t, 2)} meter/s`;
  }
}

console.log(calculateDistance("a", "t")); //input must an number
console.log(calculateDistance(-1, 9)); //Accelaration or time must be >= 0
console.log(calculateDistance(50, 60)); //Jarak yang ditempuh adalah 90000 meter/s
