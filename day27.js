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