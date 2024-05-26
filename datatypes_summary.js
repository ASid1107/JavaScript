/* Data types are divided into two types :
    1.Primitive
    2.Non primitive
    
Primitive (JavaScript doesnt gives a reference to an object instead it copies the object and then makes the changes)
String, Number, Boolean, Null(Empty but not zero), undefined, Symbol,  BigInt

Non primitive (Reference) Directly allocates the reference
Array, Objects, Functions*/

// const Id = Symbol('123')
// console.log(Id);
// console.log(typeof Id);

const Atharva = function(){
    console.log('Atharva')
}
Atharva = "Oh yeah Monster on the loop"
console.log(Atharva)
console.log(typeof Atharva)

