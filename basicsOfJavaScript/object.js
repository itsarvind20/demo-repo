// object creation
var obj = {
    name : "Arvind Rawat",
    age : 12,
    abcd : (a)=>{return a}
}

// object key access
console.log(obj.name);
console.log(obj["name"])

// console.log(obj["abcd(3)"]) // cannot access function by () method
console.log(obj.abcd(4))

// object can freeze --> means it's value cannot be changed
Object.freeze(obj) 
obj.age = 25
