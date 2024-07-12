const promiseOne= new Promise(function(resolve,reject){
setTimeout(function(){
    console.log('async tast is complete');
    resolve()

},1000)
});