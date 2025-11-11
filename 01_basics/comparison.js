console.log(2>1); // true
console.log(2<1); // false
console.log(2>=2); // true
console.log(2<=2); // true
console.log(2==2); // true
console.log(2!=2); // false
console.log(2==="2"); // false
console.log(2!=="2"); // true

console.log(2 == "2");   // true  → because "2" is converted to number 2
console.log(true == 1);  // true  → true is converted to 1
console.log(0 == false); // true  → false is converted to 0

console.log(2 === "2");  // false → number vs string
console.log(true === 1); // false → boolean vs number
console.log(0 === false);// false → number vs boolean
console.log(2 === 2);    // true  → both are number 2


console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(null)
