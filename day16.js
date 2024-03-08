const mySym=Symbol("key1");
const jsUser={
    name:"aditya",
    email:"aditya@gmail.com",
    age:17,
    location:"pune",
    isLogin: false,
   [ mySym]:"mykey1",


}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
console.log(typeof jsUser.age);
// console.log(typeof name);
// console.log(typeof email);

console.log(jsUser[mySym]);

jsUser.email="aditya@yellow.ai";
// Object.freeze(jsUser);
console.log(jsUser);
jsUser.greeting =function(){
    console.log(`hello jsUser,${this.name}`);
    
}
console.log(jsUser.greeting());
