const manAte=["appple","grape","bannan",'chikku'];
manAte.pop
console.log(manAte);
Array.prototype.mypop=function()
{
    if(this.length===0){
        return undefined;
    }
    else{
        const lastIndex=this.length-1;
        const popedElement=lastIndex
        this.length=lastIndex;//why here lastIndex how i wrote wos wriiten as this[last index]
        return popedElement;
    }

}
manAte.mypop();
console.log(manAte);