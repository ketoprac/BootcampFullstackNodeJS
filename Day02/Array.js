const foods = ["Soup", "Pizza", "Pasta"];
console.log(foods);

if (Array.isArray(foods)) {
  console.log("Foods is array");
}

console.log(foods[1]);

for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

// Tambah data di belakang array
foods.push("Seblak");
console.log(foods);

// Hapus data di belakang array
foods.pop();
console.log(foods);

// Tambah data di depan array
foods.unshift("Indomie");
console.log(foods);

// Hapus data di depan array
foods.shift();
console.log(foods);

// Sort data alfabet
foods.sort();
console.log(foods);

// Sort data alfabet reverse
foods.reverse();
console.log(foods);

// Menggabungkan array
const foods1 = ["Seblak", "Indomie"];
const concat = foods.concat(foods1);
console.log(concat);

// Hapus objek dari array
concat.splice(2, 1);
console.log(concat)

// Ambil data dari array
const slice = concat.slice(2, 3);
console.log(slice);


