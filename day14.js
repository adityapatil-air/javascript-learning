const myArr = ["apple", "banna","chikkiu","dragon","egg"];

const hero = ['nagraj', 'asgar', 'ram'];
const myArr2=new Array(1,2,3,4)

// console.log(myArr[1]);
myArr.push(6)
// console.log(myArr);
myArr.pop()
// console.log(myArr);
myArr.shift()
const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof myArr);
// console.log(typeof newArr);
// console.log(typeof hero);

// In the provided code:

// myArr is an array containing numbers [0, 1, 2, 3, 4, 5].
// hero is an array containing strings ['nagraj', 'asgar', 'ram'].
// myArr2 is also an array initialized with the Array constructor [1, 2, 3, 4].
// So, yes, arrays are a data type in JavaScript. In the given code, myArr, hero, and myArr2 are examples of arrays.

// When you print the type using typeof, it will return 'object' for arrays because arrays are a specialized type of object in JavaScript. So, typeof myArr, typeof hero, and typeof myArr2 will all return 'object'.

// newArr is a string because you used the join() method on myArr, which returns a string by joining all the elements of the array with commas (,). So, typeof newArr will return 'string'.
console.log(myArr);
const new1 = myArr.slice(1,3);
console.log(new1);

const new2=myArr.splice(1,3);
console.log(new2);
    

