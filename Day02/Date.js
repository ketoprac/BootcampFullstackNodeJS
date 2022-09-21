const today = new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDay());
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

const now1 = new Date("2000-07-10");
console.log(now1);

const now = new Date(2000, 06, 10);
console.log(now);

const format = new Intl.DateTimeFormat("id-ID").format(today);
console.log(format);

console.log(today.toString());
console.log(today.toTimeString());
console.log(today.toUTCString());
console.log(today.toDateString());
console.log(today.toISOString());
console.log(today.toLocaleString());