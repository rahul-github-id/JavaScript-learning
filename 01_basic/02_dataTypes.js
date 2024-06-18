'use strict' // treat JS code new version

// alert('hello') // it not work in nodejs , it is for brower

// premitive datatype
// answer: A primitive type is predefined by the language and is named by a reserved keyword.
//name are => String, Number, BigInt, Boolean, Null, Undefined, and Symbol.

// string => '' , "" , ``;
// number => 1234;
// Boolean => true , false;
// Undefined => unintaintaly assign or confuse for engine;
// null => intaintaly assign; 
// typeof => it help to find which type data store;
//--------------------------------------------------------------------

// Datatype summaries

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object*/

//------------------------------------
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3