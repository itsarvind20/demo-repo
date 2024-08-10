var arr = [1,3,4,5,3]
// forEach
arr.forEach(function(val){
    return val;
})
// map
var newarr1 = arr.map((val=>{
    return val-1;
}))
console.log(newarr1);

// filter
var newarr2 = arr.filter((val)=>{
    if(val>2){
        return true;
    }
})
console.log("newarr2 : " ,newarr2);

// find
var element = newarr2.find((val)=>{
    if(val == 3){
        return val;
    }
})
console.log(element)