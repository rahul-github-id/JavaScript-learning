// const name = "hitesh"
// const repoCount = 50

// // console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));

// ============================================================================

// Define a string variable 
let A = 'Geeks for Geeks';

// Use the slice() method to extract a substring
let b = A.slice(0, 5);
let c = A.slice(6, 9);
let d = A.slice(10);

// Output the value of variable
console.log(b);
console.log(c);
console.log(d);

// --------------------------------------------------------------- node 01_basic/05_stringMethod
// Define a string variable
let str1 = "Mind, Power, Soul";

// Use the substring() method to extract a substring 
let part1 = str1.substring(6, 11);

// Output the value of variable
console.log(part1);

// -----------------------------------------------------
let gfg = 'GFG    ';
let geeks = 'stands-for-GeeksforGeeks';

// Storing new object of string
// with removed white spaces
let newGfg = gfg.trim();

// Old length
console.log(gfg.length);

// New length
console.log(newGfg.length)
// ----------------------------------------------------
// Define a string variable 'str'
let str = "Mind, Power, Power, Soul";

// Use the replaceAll() method to replace all occurrences
//of "Power" with "Space" in the string 'str'
let part = str.replaceAll("Power", "Space");

// Output the resulting string after replacement
console.log(part);

