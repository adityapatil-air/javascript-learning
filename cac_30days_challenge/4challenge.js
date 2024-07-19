for(let i=1; i<=10;i++){
    // console.log(i);

}


for(let i=1;i<=50;i++){
    if(i%5===0){
        // console.log(i);
    }
}
let j=0
while (j<=10) {
    // console.log(j);
    j++
}

let q=10
while (q>=0) {
    // console.log(q);
    q--
}

let r=0
do {
    // console.log(r);
    r++
}while (r > 0 && r < 6);;

let n = 5; 
let result = 1;
let i = 1;

do {
    result *= i;
    i++;
} while (i <= n);

console.log(result); 


for(let i=1; i<=5;i++){
    let row="";
   for(let j=1; j<=i;j++){
    row+="*"
   }
console.log(row);
}

// a5
let txt='';
for(let i=0;i<10;i++){
    if(i===5){
        continue;
    }
    txt=txt+i;
}
console.log(txt);

let test='';
for(let i=0;i<=10;i++){
    if(i===7){
        break;
    }
    test=test+i
}
console.log(test);