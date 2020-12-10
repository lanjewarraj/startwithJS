const firstName = "Abhinav";
const lastName = "Roy";
let val;

//Concatenation
val = firstName+lastName; //RajRoy
val = firstName + " " + lastName; //Raj Roy

//Append
val = "Raj ";
val += "Roy";

//Escaping
val = 'I a\'m too excited ';

//Properties and Method

//length
//console.log(firstName.length);

//concat()
val = firstName.concat(lastName);

//toUpperCase()
val = firstName.toUpperCase(); //RAJ

//toLowerCase()
val = lastName.toLowerCase(); //roy

//Treat String as Array
val = firstName[2]; //a

//search index of string
val = firstName.indexOf('r'); //-1
val = firstName.indexOf('j'); //2(array index position)
val = firstName.lastIndexOf('j'); //2

//charAt()
val = firstName.charAt('0'); //R

//get last character
val = firstName.charAt(firstName.length - 1); //v

//substring
val = firstName.substring(0,4); //Abhi

//slice()
val = firstName.slice(0,4); //Abhi
val = firstName.slice(-4); //inav

//split()
const tags = "web development, Android Development, IOS Development";
val = tags.split(",");
/* output=> (3) ["web development", " Android Development", " IOS Development"]
0: "web development"
1: " Android Development"
2: " IOS Development"
length: 3__proto__: Array(0)
*/

//replace
val = tags.replace("IOS Development","Advance Development"); //web development, Android Development, Advance Development

//includes()
val = tags.includes("web"); //true
val = tags.includes("java"); //false

console.log(val);
