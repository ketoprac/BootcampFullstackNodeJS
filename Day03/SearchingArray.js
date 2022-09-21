const code = ['java', 'oracle', 'javascript', 'python', 'sql', 'oracle'];

console.log(code.indexOf('oracle'));
console.log(code.lastIndexOf('oracle'));
console.log(code.includes('python'));

const nums = [1, 5, 18, 4, 22, 132];
const num = nums.find(e => e > 10);
console.log(num);

const result = nums.reduce((e, a) => e + a, 0);
console.log(result);