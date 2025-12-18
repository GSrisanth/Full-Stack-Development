console.log("Hello, World!");
console.log(42);
console.log(true);

console.log(2 + 2); // Outputs: 4
console.log("2 + 2"); // Outputs: 2 + 2
console.log("Hello, " + "World!"); // Outputs: Hello, World!
console.log("2" + "2"); // Outputs: 22, because + operation applied on strings concatenates them
console.log(2 + 2 > 5); // Outputs: false, because 2 + 2 is not greater than 5.

//Comparision Operators

console.log(5 < 6);   // true
console.log(5 > 6);   // false
console.log(5 <= 5);  // true
console.log(5 >= 10); // false

console.log(5 == 5);  // true

let a = 10,b = 20;

console.log(a + b);
console.log(a-b);
console.log(a*b);
console.log(b/a);
console.log(b%a); // Modulus operator gives remainder

// Conditional Statements

let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote");
}

let marks = 45;

if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

let grade = 82;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 75) {
  console.log("B");
} else if (grade >= 60) {
  console.log("C");
} else {
  console.log("Fail");
}


//Truthy & Falsy Values

if ("hello") {
  console.log("Runs"); // truthy
}

if (0) {
  console.log("Won't run"); //false, 0, "", null, undefined, NaN except for these all of the values are truthy

}

//Switch case

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}


//Function Creation

function greet() {
  console.log("Hello, World!");
}

greet(); // calling the function


function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // 8

//Function Parameters & Arguments

function greetme(name) {
  console.log("Hello " + name);
}

greetme("Srisanth");

function greetn(name = "Guest") {
  console.log("Hello " + name);
}

greetn(); // Hello Guest


function square(num) {
  return num * num;
}

let result = console.log(square(5)); // 25

//Function Calling Another Function

function add(a, b) {
  return a + b;
}

function calculate() {
  return add(3, 4);
}
console.log(calculate()); // 7


//Callback Functions

function greeta(name, callback){
    console.log("Hello " + name);
    callback();
}
function sayBye(){
    console.log("Bye!");
}
greeta("Srisanth", sayBye);


//Arrays in javaScript

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]); // Apple
console.log(fruits.length); // 3

//Accessing Array Elements

let colors = ["red", "green", "blue"];

console.log(colors[0]); // red
console.log(colors[2]); // blue

console.log(colors[1] = "yellow"); // updatingg value

console.log(colors.push("black")); // adding new element at the end

console.log(colors.pop()); // removes last element

console.log(colors.length); // number of elements

console.log(colors.length - 1); // index of last element

console.log(colors.unshift(1)); // adds element at the beginning

console.log(colors.shift()); // removes first element

//for loop through array

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
 // or
for (let value of colors) {
  console.log(value);
}


//Important array methoods

//map()
let squares = [1,2,3].map(x => x * x);
// [1, 4, 9]

//filter()
let evens = [1,2,3,4,5,6].filter(x => x % 2 === 0);
// [2, 4, 6]

//reduce()
let sum = [1,2,3].reduce((a,b) => a + b, 0);
// 6


//Searching in Arrays

//includes()
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // true
console.log(numbers.includes(6)); // false

//indexOf()
console.log(numbers.indexOf(4)); // 3
console.log(numbers.indexOf(6)); // -1


//Modifying Without Changing Original (IMMUTABILITY)

//slice()
let original = [1, 2, 3, 4, 5];
let newArray = original.slice(1, 4); // [2, 3, 4]

//splice()
let arr = [1, 2, 3, 4, 5];
let spliced = arr.splice(1, 2); // removes 2 elements starting from index 1
// arr is now [1, 4, 5]
// spliced is [2, 3]

//concat()
let array1 = [1, 2];
let array2 = [3, 4];
let combined = array1.concat(array2); // [1, 2, 3, 4]


//Multidimensional Arrays

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][1]); // 8




