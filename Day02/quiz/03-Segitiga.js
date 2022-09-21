/** buat segitiga  */ 
let s = "";
for (let i = 5; i > 0; i--) {
  for (let j = 1; j < i; j++) {
    s += j + " ";
  }
  s += "\n";
}
console.log(s);

// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

let s1 = "";
for (let i = 5; i > 0; i--) {
  for (let j = i; j > 0; j--) {
    s1 += j + " ";
  }
  s1 += "\n";
}
console.log(s1);

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  

