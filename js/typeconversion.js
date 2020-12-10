let val;

/* Converting to String */
//Number to String
val = 312;
val = String(val);

//Boolean to String
val = true;
val = String(val);

//Date to String
val = new Date();
val = String(val);

//Array to String
val = [1,2,3];
val = String(val);
//toString()
val = 5;
val = val.toString();

/* Converting to Number */
//String to Number
val = "5";
val = Number(val);

//Boolean to Number
val = false; //return 0
val = true; //return 1
val = Number(val);

//null to Number
val = null;
val = Number(val);

val = "hello";
val = Number(val);
//output -> NaN =>(Not a Number)

//Array to Number
val = [1,2,3];
val = Number(val);
//output -> NaN =>(Not a Number)

val = parseInt("100.30");
//for decimal value
val = parseFloat("100.33");


// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));


/* Type Coversion */
const val1 = "10"; //or String(10)
const val2 = 20;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);

