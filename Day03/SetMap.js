const mySet = new Set();

mySet.add("John");
mySet.add("John");
mySet.add("Doe");
console.log(mySet);

const mySet1 = new Set(['John', 'William', 'Doe']);
console.log(mySet1);

const myObj = new Map();
myObj.set(1, "Indomie");
myObj.set("2", "Sedaap");
myObj.set(3, "Sarimi");
console.log(myObj);

const myObj1 = new Map([
  [1, 'Indomie'],
  ['Dua', 'Sedaap'],
  [2, 'Sarimi']
])
console.log(myObj1);
