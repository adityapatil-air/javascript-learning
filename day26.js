const userIsLoggedIn=true
const temp=49;
if (temp==50) {
    console.log("temp is below 60");
} else {
    console.log("temp above 60");
}
const score=200;
if (score>100) {
    const power="fly"
    console.log(`user power${power}`);
} 

const balance=1000;
if (balance>500)console.log("safe");
// console.log("safe");

const user="username";
const card="debitcard"
const isLoggedFromgoogle=true
const isLoggedFrommail=false;

if (user && card) {
    console.log("allow to enter");
}
if(isLoggedFromgoogle||isLoggedFrommail){
    console.log("u are logged in ");
}

// switch
const month=3;
switch (month) {
    case 1:console.log("jan");
        
        break;
case 2:console.log("feb");
        
        break;
case 3:console.log("march");//if break is not there then it will print everthing below the case which is matched
        
        break;

   default:
        break;
}
// truthy falsey
const usermail=[];
if (usermail) {
    console.log("got email");
} else {
    console.log("dont have username");
}
//falsey value
// false,0,null,undefined,bigInt,-0,NaN,""

//truthy value
// "0",'falsey', " ",[],{},function(){}

if (usermail.length==0) {
    console.log("empty array");
} 
const empObj={}
if (Object.keys(empObj).length==0) {
    console.log("Object is empty");
}

//nullish coalescing (??):null defined
 let val1;
//  val1=5??10
val1=null??10
//  console.log(val1);
 val1=undefined??15
//  console.log(val1);
val1=null??10??15
console.log(val1)

//terniary operator
//conditon?true:false

const iceTeaPrice=100;
iceTeaPrice<=80?console.log("less than 80 "):console.log("more than 80")

