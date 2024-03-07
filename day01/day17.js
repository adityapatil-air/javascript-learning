// const tinder=new Object();    silngleton
const tinderUser={}
tinderUser.id="123abc";
tinderUser.name="nanna";
tinderUser.isloggedin=false;

// console.log(tinderUser);

const regUser={
    email:"adi@gmail.com",
    fullname:{
        username:{
            firstname:"aditya",
            lastname:"patil"
        }
    }
}
console.log(regUser.fullname.username.lastname);
const obj1={1:"a", 2:"b"};
const obj2={3:"a",4:"b"};
const obj3={...obj1,...obj2}
console.log(obj3);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
