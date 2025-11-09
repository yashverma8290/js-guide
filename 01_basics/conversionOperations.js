let score = ""

console.log(typeof score)
console.log(typeof(score))


let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33abc" => 33
// "abc33" => NaN
// "100" => 100
// "" => 0
// " " => 0
// "33.44" => 33.44


let isLoogedIn = NaN

let booleanIsLoggedIn = Boolean(isLoogedIn)
console.log(booleanIsLoggedIn);

// "abc" => true
// "" => false
// 1 => true
// 0 => false
// 33 => true
// null => false
// undefined => false
// NaN => false



let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);