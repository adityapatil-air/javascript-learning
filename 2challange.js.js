//A1
let one=15;
let two=5;
console.log(`The sum is ${one+two}`);
console.log(`The diff is ${one-two}`);
console.log(`The product is ${one*two}`);
console.log(`The qouitent is ${one/two}`);
console.log(`The remainder is ${one%two}`);

//A2
one+=2;
console.log(one);
two-=2;
console.log(two);

//A3
let ask =one>two;
console.log(ask);
let ask2 =one<two;
console.log(ask2);

let ask3 =one>=two;
console.log(ask3);
let ask4 =one<=two;
console.log(ask4);

let no1=8
let no2=8
console.log(no1==no2);
console.log(no1===no2);
// == Equality Operator: Checks if values are equal, allowing type conversion.
// === Strict Equality Operator: Checks if values and types are both equal, no type conversion.

//A4
let q1=true;
let q2=false
let q3=true;
let q4=false;
console.log(q1 && q2);
console.log(q1 || q2);
console.log(q1 != q2);

//A5
let number = 2; 
let result = (number >= 0) ? "Positive" : "Negative";
console.log(result);
