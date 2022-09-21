const object = {
  firstName: "John",
  lastName: "Doe",
  age: 15,
};
console.log(object);

const object1 = new Object({ 
  firstName: "John", 
  lastName: "Doe",
  age: 15
});
console.log(object1);

console.log(Object.keys(object));

// Freeze object (not writeable)
Object.freeze(object);

object.firstName = "Jane";
object.lastName = "Dunn";
object.age = 18;
console.log(object);

const alamat = {
  street: "Limboto 20",
  city: 'Bogor',
}

const merge = {...object1, ...alamat};

console.log(merge);