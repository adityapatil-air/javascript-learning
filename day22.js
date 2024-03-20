function one(){
    const username="nanna"
    function two(){
        const website ="youtube";
        console.log(username);
      
    }//parent cant eat childs iceream but child can same goes here in scope two can access 1 but 1 cant
    
    // console.log(website);
// two()
}
// one()

if (true){
    const username="nanna"
    if (username==="nanna"){    
        const web=" yt"
console.log(username+web);
    }

}
function addone(num){
    return num+1
}
addone(5)

const addtwo=function(num){
return num+2
}
addtwo(5);