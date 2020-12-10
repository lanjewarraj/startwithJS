/* DATA TYPES */

/* Primitive Type */

//string
const name = "Raj";
console.log(typeof name);

//number
const age = 20;
console.log(typeof age);

//boolean
const hasCompletedDiploma = true;
console.log(hasCompletedDiploma);
console.log(typeof hasCompletedDiploma);

//null
const hasCar = null;
console.log(hasCar);
console.log(typeof hasCar);

//undefined
let lastName;
console.log(typeof lastName);

//symbol
const sym = Symbol();
console.log(typeof sym);

/* Reference Type */
//array
const hobbies = ['cricket','music','movie'];
console.log(typeof hobbies);

//object literal
const student = {
  name:'raj',
  age:'20'
};
console.log(student);
console.log(typeof student);

//date
const date = new Date();
console.log(date);
console.log(typeof date);