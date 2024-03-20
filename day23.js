const user={
    username:"nanna",
    price:"999",
    welcomeMessage:function(){
     
        // console.log(`${this.username} welcome to web`);
        // // console.log(this);
    }


}
user.welcomeMessage()
user.username="aditya";
user.welcomeMessage()
// console.log(this);//here this log will be empty because we are 
// running this in node whereas if we run it in console it will give window
// const chai=function(){
//     let usename="hitesh";
//     // console.log(this);//empty

    // const chai=()=>{
        let usename="hitesh";
    //     console.log(this);//empty
    // }
    // chai();

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(3,4));
const add = (numb1,numb2)=>(numb1+numb2)
console.log(add(3,7));

const plus=(number1,number2) =>number1+number2
console.log(plus(56,45));



///iife
(function coffee(){
    console.log("coffe is hot");
})()

