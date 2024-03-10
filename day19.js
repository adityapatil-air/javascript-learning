
function myname()
{
// console.log("a");
// console.log("d");
// console.log("i");
// console.log("t");
// console.log("y");
// console.log("a");
};
myname();
//type 1
// function addTwoNumber(number1,number2)
// {
//  console.log(number1+number2);
//  }
// addTwoNumber(3,5)

//type 2
function addTwoNumber(number1,number2)
{
let outcome=number1+number2;
return outcome;
}

const outcome=addTwoNumber(2,4);
console.log(outcome);  

function logInMeg(username){
   return `${username}just logged in `;
}
console.log(logInMeg("nanna"));
