//A1
let no=10

if (no>0) {
    console.log("positive");
} else if (no<0) {
    console.log("negvative");
}
else if(no=0){
    console.log("zero");
}

let age=19
if (age>=18) {
    console.log("eligilbe to vote");
} else  {
    console.log("not able to vote");
}

//A2
let a,b,c;
a=7;
b=8;
c=9;
if (a>b && a>c) {
    console.log("a greatet");
}
else if(b>a && b>c){
    console.log("b graetest");
}
else if(c>a && c>b){
    console.log("c graetest");
}

//A3
function day(whichDay){
    switch (whichDay) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("tueday");
            break;
        case 3:
            console.log("wedday");
            break;
        case 4:
            console.log("thruday");
            break;
        case 5:
            console.log("friday");
            break;
        case 6:
            console.log("satday");
            break;
        case 7:
            console.log("sunday");
            break;
    
        default:
            console.log("enter btw 1 to 7");  
    
            break;
    }
}
day(1);


let score = 82;

function grade(score) {
    let grade;
    if (score > 90) {
        grade = 'A';
    } else if (score > 80) {
        grade = 'B';
    } else if (score > 70) {
        grade = 'C';
    } else if (score > 60) {
        grade = 'D';
    } else if (score < 35) {
        grade = 'F';
    }

    switch (grade) {
        case 'A':
            console.log("A grade");
            break;
        case 'B':
            console.log("B grade");
            break;
        case 'C':
            console.log("C grade");
            break;
        case 'D':
            console.log("D grade");
            break;
        case 'F':
            console.log("F grade");
            break;
        default:
            console.log("No grade");
            break;
    }
}

grade(score); 

//A4
let number=2;
let result=(number%2 ===0 )?"even":"odd";
console.log(result);


let year =2000;
let isWithinRange = year > 999 && year < 10000;

if(isWithinRange){
if ( (year%4 ===0 )&& (year!=100) ||  (year%400 ===0)) {
    console.log("Year is leap Year");
} else{
    console.log("Not a leap Year ")}}
    else{
        console.log("enter valid 4 digit year");
    }
