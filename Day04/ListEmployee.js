import Employee, {Contract} from './Employee.js';

const emp1 = new Employee('Hafiedz', 'Mada', 5000);
emp1.skill=['React', 'Javascript'];
console.log(emp1);
console.log(emp1.ToString());

const cont = new Contract('Anggi', 'Permana', 5000, [], 'Kontrak');
cont.skill = ['Ruby', 'PHP'];
cont.extra = 5000;
console.log(cont);
console.log(cont.ToString());

const list = [emp1, cont];
const total = list.reduce((sum, {salary}) => sum + salary, 0);
console.log(total);