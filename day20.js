function cartPrice(...num1){
    return num1
    
}
console.log(cartPrice (100,200,3000));
const user ={
    username:"nanna",
        price:199

}
function handleObj(anyobject){
console.log(`usernameis ${anyobject.username}and price is ${anyobject.price}`);
}
handleObj(user)
handleObj({
username:"sam",
price:399
})
const newArr=[100,500,698,565];

function getArr(secvalue){
    return secvalue[2]

}
console.log(getArr(newArr));

const myNewArray=[200,400,100,600]
function returnSecValue(getArray){
    return getArray[1]
}
console.log(returnSecValue(myNewArray));