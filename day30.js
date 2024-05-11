const myNums=[1,2,3,4,5,6,7,8,9,10]
// // const newNums=myNums.filter((num)=> num>4)
// // // console.log(op);

// const op=myNums.filter((num)=>{
//     return num>4
// })
// console.log(op);

// const newNums=[]
// myNums.forEach((num)=>{
//     if (num>4) {
//        newNums.push(num)
//     }
// })

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
//   const userbook= books.filter((bk)=> (bk.genre==='History')    
//   )
//   console.log(userbook);
// const userbook=books.filter((bk)=>{
//     if (bk.genre==='History') {
//       return bk.genre
//     }
// })
// console.log(userbook);

const fictionFilm=books.filter((bk)=>
      bk.genre==='Fiction'
)
// console.log(fictionFilm);


const nn=[1,2,3,4,5,6,7,8,9,10]
const opnn=nn.map((num)=>num+10)
// console.log(opnn);


const ginti=myNums
            .map((num)=>num*10)
            .map((num)=>num+1)
            .filter((num)=>num>44)
console.log(ginti);
//reduce loop
