for (let i = 0; i < 10; i++) {
    const element = i;
console.log(element);
    
}
for (let i = 0; i <=10; i++) {
   console.log(`outer value is ${i}`);
    for (let j = 0; j <=10; j++) {
    //  console.log(`inner loop value is ${j}`);
    // console.log(i+'*'+j+'='+i*j);  
    console.log(`${i}*${j}=${i*j}`);  
    }
}
// for (let index = 1; index <=20; index++) {
//     if (index==5) {
        
//         console.log(`detetected 5`);
//         break
        
    
//     }
//     console.log(`value of ${index}`);
// }
for (let index = 1; index <=20; index++) {
    if (index==5) {
        
        console.log(`detetected 5`);
       continue
        
    
    }
    console.log(`value of ${index}`);
}