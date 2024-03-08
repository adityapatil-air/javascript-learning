const fruits =["grape","apple","banna","mango","chikku"];
const drinks=["water","sode","wine","coke","fanta"];

// fruits.push(drinks);
// console.log(fruits);
// console.log(fruits[5][2]);
const combination=fruits.concat(drinks);
// console.log(combination);

const all=[...drinks,...fruits]
// console.log(all);

const fixed=[["hi","namasate","bonjur"],"why","kyu","ka",["bye","jau","ja"],"hello ", "brother"]
const final=fixed.flat()
console.log(final);
console.log(Array.isArray("hello"));
console.log(Array.from("hello"));