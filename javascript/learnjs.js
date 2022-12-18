//console.log("Hello World");

/* Data Types */
// undefined, null, boolean, number, string, object

// var myName = "John";
// myName = 8

// let ourName = "freecodecamp";
// const pi = 3.14;
// console.log(myName);
// console.log(ourName);



// var a;
// var b = 2;

// console.log(a);

// a = 7;
// console.log(a);

// myNameLength = myName.length;
// console.log(myNameLength);


// myNameFirstLetter = myName[0];
// console.log(myNameFirstLetter);


// function wordBlank(myNoun, myAdjective, myVerb, myAdverb) {
//     var result = "";
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store.";
//     return result;
// }


// console.log(wordBlank("dog", "big", "ran", "quickly"));
// console.log(wordBlank("cat", "small", "walked", "slowly"));


// var myArray = [1, 2, 3, 4, 5];

// myArray.push(6);
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// myArray.shift();
// console.log(myArray);
// myArray.unshift(0);
// console.log(myArray);



// var myList = [["apple", 2], ["banana", 3], ["orange", 1]];

// Functions
// function myReusableFunction() {
//     console.log("Hello World");
// }

// myReusableFunction();


// function myFunction(a, b) {
//     console.log(a + b);
// }

// myFunction(2, 3);


// Global Scope

// var myGlobal = 10;


// function functionScope() {
//     var output = "";
//     if (myGlobal > 5) {
//         var output = "myGlobal is greater than 5";
//     }
//     console.log(output);
// }

// function functionScope2() {
//     var output = "";
//     if (myGlobal > 5) {
//         let output = "myGlobal is greater than 5";
//     }
//     console.log(output);
// }

// // Prints
// functionScope();
// // Does not print
// functionScope2();

// Local Scope

// function myLocalScope() {
//     var myVar = 5;
//     console.log(myVar);
// }
// myLocalScope();

// console.log(myVar);


// Global vs Local Scope in Functions

// Global
// var outerWear = "T-Shirt";

// function myOutfit() {
//     // Local
//     var outerWear = "sweater";
//     return outerWear;
// }
// console.log(myOutfit());


// Return a Value from a Function with Return
// function minusSeven(num) {
//     return num - 7;
// }

// console.log(minusSeven(10));

// function timesFive(num) {
//     return num * 5;
// }

// console.log(timesFive(5));


// Understanding Undefined Value returned from a Function

// var sum = 0;
// function addThree() {
//     sum = sum + 3;
//     // return sum;
// }
// console.log(addThree());


// function addFive() {
//     sum += 5;
// }


// Assignment with a Returned Value

// var changed = 0;

// function change(num) {
//     return (num + 5) / 3;
// }

// changed = change(10);


// var processed = 0;

// function processArg(num) {
//     return (num + 3) / 5;
// }

// processed = processArg(7);
// console.log(processed);


// Stand in Line
// function nextInLine(arr, item) {
//     arr.push(item);
//     return arr.shift();
// }


// var testArr = [1, 2, 3, 4, 5];

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));


// Boolean Values

// function welcomeToBooleans() {
//     return true;
// }

// console.log(welcomeToBooleans());

// Use Conditional Logic with If Statements

// function trueOrFalse(wasThatTrue) {
//     if (wasThatTrue) {
//         return "Yes, that was true";
//     }
//     return "No, that was false";
// }

// function testTrueOrFalse(val) {
//     if (val) {
//         return "Yes";
//     }
//     return "No";
// }

// console.log(trueOrFalse(true));
// console.log(testTrueOrFalse(false));


// Comparison with the Equality Operator
// function testEqual(val) {
//     if (val == 12) {
//         return "Equal";
//     }
//     return "Not Equal";
// }


// console.log(testEqual(10));


// Comparison with the Strict Equality Operator
// function testStrict(val) {
//     if (val === 7) {
//         return "Equal";
//     }
//     return "Not Equal";
// }

// console.log(testStrict(10));

/*
    3 == 3 true
    3 == '3' true

    3 === 3 true
    3 === '3' false
*/


// Practice comparing different values
// function compareEquality(a, b) {

//     // This returns Not Equal
//     // if (a === b) {
//     //     return "Equal";
//     // }
//     // return "Not Equal";

//     // This returns Equal
//     if (a == b) {
//         return "Equal";
//     }
//     return "Not Equal";
// }

// console.log(compareEquality(10, "10"));

// Comparison with the Inequality Operator

// function testNotEqual(val) {
//     if (val != 99) {
//         return "Not Equal";
//     }
//     return "Equal";
// }

// console.log(testNotEqual(10));


// Comparison with the Strict Inequality Operator
// function testStrictNotEqual(val) {
//     if (val !== 17) {
//         return "Not Equal";
//     }
//     return "Equal";
// }

// console.log(testStrictNotEqual(10));

// Comparison with the Greater Than Operator

// function testGreaterThan(val) {
//     if (val > 100) {
//         return "Over 100";
//     }
//     if (val > 10) {
//         return "Over 10";
//     }
//     return "10 or Under";
// }

// console.log(testGreaterThan(10));

// Comparison with the Greater Than Or Equal To Operator

// function testGreaterOrEqual(val) {
//     if (val >= 20) {
//         return "20 or Over";
//     }
//     if (val >= 10) {
//         return "10 or Over";
//     }
//     return "Less than 10";
// }

// console.log(testGreaterOrEqual(10));


// Comparison with the Less Than Operator

// function testLessThan(val) {
//     if (val < 25) {
//         return "Under 25";
//     }
//     if (val < 55) {
//         return "Under 55";
//     }
//     return "55 or Over";
// }

// console.log(testLessThan(10));


// Comparison with the Less Than Or Equal To Operator

// function testLessOrEqual(val) {
//     if (val <= 12) {
//         return "Smaller Than or Equal to 12";
//     }
//     if (val <= 24) {
//         return "Smaller Than or Equal to 24";
//     }
//     return "More Than 24";
// }

// console.log(testLessOrEqual(10));


// Comparisons with the Logical And Operator

// function testLogicalAnd(val) {
//     if (val <= 50 && val >= 25) {
//         return "Yes";
//     }
//     return "No";
// }

// console.log(testLogicalAnd(10));


// Comparisons with the Logical Or Operator

// function testLogicalOr(val) {
//     if (val < 10 || val > 20) {
//         return "Outside";
//     }
//     return "Inside";
// }

// console.log(testLogicalOr(9));

// Introducing Else Statements

// function testElse(val) {
//     var result = "";
//     if (val > 5) {
//         result = "Bigger than 5";
//     } else {
//         result = "5 or Smaller";
//     }
//     return result;
// }

// console.log(testElse(4));


// Introducing Else If Statements

// function testElseIf(val) {
//     if (val > 10) {
//         return "Greater than 10";
//     } else if (val < 5) {
//         return "Smaller than 5";
//     } else {
//         return "Between 5 and 10";
//     }
// }

// console.log(testElseIf(7));


// Logical Order in If Else Statements


// Order is important in if, else if statements.
// function orderMyLogic(val) {
//     if (val < 5) {
//         return "Less than 5";
//     } else if (val < 10) {
//         return "Less than 10";
//     } else {
//         return "Greater than or equal to 10";
//     }
// }

// console.log(orderMyLogic(7));

// Chaining If Else Statements

// function testSize(num) {
//     if (num < 5) {
//         return "Tiny";
//     } else if (num < 10) {
//         return "Small";
//     } else if (num < 15) {
//         return "Medium";
//     } else if (num < 20) {
//         return "Large";
//     } else {
//         return "Huge";
//     }
// }

// console.log(testSize(7));


// Golf Code

// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//     if (strokes == 1) {
//         return names[0];
//     } else if (strokes <= par - 2) {   
//         return names[1];
//     }
//     else if (strokes == par - 1) {
//         return names[2];
//     }
//     else if (strokes == par) {
//         return names[3];
//     }
//     else if (strokes == par + 1) {
//         return names[4];
//     }
//     else if (strokes == par + 2) {
//         return names[5];
//     }
//     else if (strokes >= par + 3) {
//         return names[6];
//     }

//     return "Change Me";
// }

// console.log(golfScore(2, 3));


// Selecting from Many Options with Switch Statements

// function caseInSwitch(val) {
//     var answer = "";
//     switch (val) {
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         case 3:
//             answer = "gamma";
//             break;
//         case 4:
//             answer = "delta";
//             break;
//     }
//     return answer;
// }

// console.log(caseInSwitch(1));
// console.log(caseInSwitch(2));

// Adding a Default Option in Switch Statements

// function switchOfStuff(val) {
//     var answer = "";
//     switch (val) {
//         case "a":
//             answer = "apple";
//             break;
//         case "b":
//             answer = "bird";
//             break;
//         case "c":
//             answer = "cat";
//             break;
//         default:
//             answer = "stuff";
//             break;
//     }
//     return answer;
// }

// console.log(switchOfStuff("a"));
// console.log(switchOfStuff(5))


// Multiple Identical Options in Switch Statements

// function sequentualSize(val){
//     var answer = "";
//     switch (val) {
//         case 1:
//         case 2:
//         case 3:
//             answer = "Low";
//             break;
//         case 4:
//         case 5:
//         case 6:
//             answer = "Mid";
//             break;
//         case 7:
//         case 8:
//         case 9:
//             answer = "High";
//             break;
//     }
//     return answer;
// }

// console.log(sequentualSize(8));


// Replacing If Else Chains with Switch

// function chainToSwitch(val) {
//     var answer = "";
//     switch (val) {
//         case "bob":
//             answer = "Marley";
//             break;
//         case 42:
//             answer = "The Answer";
//             break;
//         case 1:
//             answer = "There is no #1";
//             break;
//         case 99:
//             answer = "Missed me by this much!";
//             break;
//         case 7:
//             answer = "Ate Nine";
//             break;
//     }
//     return answer;
// }

// console.log(chainToSwitch(7));

// Returning Boolean Values from Functions

// function isLess(a, b) {
//     // if(a < b){
//     //     return true;
//     // }else{
//     //     return a > b;
//     // }
//     return a < b;
// }

// console.log(isLess(10, 15));


// Return Early Pattern for Functions

// function abTest(a, b) {
//     if (a < 0 || b < 0) {
//         return undefined;
//     }
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// console.log(abTest(2, 2));


// Counting Cards

// var count = 0;

// function cc(card) {
//     var count = 0;
//     switch (card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             count--;
//             break;
//     }
//     var holdbet = "Hold";
//     if (count > 0) {
//         holdbet = "Bet";
//     }
//     return count + " " + holdbet;
// }

// console.log(cc(2));


// Build JavaScript Objects

// var myDog = {
//     "name": "Quincy",
//     "legs": 3,
//     "tails": 2,
//     "friends": ["everything!"]
// };

// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };


// Accessing Object Properties with Dot Notation

// var testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
// };


// var hatValue = testObj.hat;
// var shirtValue = testObj.shirt;

// console.log(hatValue);

// Accessing Object Properties with Bracket Notation

// var testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
// };

// var entreeValue = testObj["an entree"];
// var drinkValue = testObj["the drink"];


// Accessing Object Properties with Variables

// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
// };

// var playerNumber = 16;
// var player = testObj[playerNumber];

// console.log(player);


// Updating Object Properties

// var myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };

// myDog.name = "Happy Coder";


// Add New Properties to a JavaScript Object

// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };

// // myDog.bark = "woof";
// myDog["bark"] = "woof";

// console.log(myDog);


// Delete Properties from a JavaScript Object

// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
// };

// delete myDog.tails;

// console.log(myDog);


// Using Objects for Lookups
// Replace the switch with lookup

// function phoneticLookup(val) {
//     var result = "";

//     var lookup = {
//         "alpha": "Adams",
//         "bravo": "Boston",
//         "charlie": "Chicago",
//         "delta": "Denver",
//         "echo": "Easy",
//         "foxtrot": "Frank"
//     };

//     // switch (val) {
//     //     case "alpha":
//     //         result = "Adams";
//     //         break;
//     //     case "bravo":
//     //         result = "Boston";
//     //         break;
//     //     case "charlie":
//     //         result = "Chicago";
//     //         break;
//     //     case "delta":
//     //         result = "Denver";
//     //         break;
//     //     case "echo":
//     //         result = "Easy";
//     //         break;
//     //     case "foxtrot":
//     //         result = "Frank";
//     //         break;
//     // }


//     result = lookup[val];

//     return result;
// }

// console.log(phoneticLookup("charlie"));


// Testing Objects for Properties

// var myObj = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"
// };


// function checkObj(checkProp) {
//     myObj.hasOwnProperty(checkProp) ? console.log(myObj[checkProp]) : console.log("Not Found");
//     // if(myObj.hasOwnProperty(checkProp)){
//     //     return myObj[checkProp];
//     // }else{
//     //     return "Not Found";
//     // }
//  }

// console.log(checkObj("gift"));

// Manipulating Complex Objects

// var myMusic = [{
//         "artist": "Billy Joel",
//         "title": 'Piano Man',
//         "release_year": 1973,
//         "format": [
//             "CD",
//             "8T",
//             "LP"
//         ],
//         "gold": true

//     },
//     {
//         "artist": "Beau Carnes",
//         "title": "Cereal Man",
//         "release_year": 2003,
//         "format": [
//             "Youtube",
            
//         ],
//         "gold": true
//     }
// ];


// Accessing Nested Objects

// var myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// }

// var gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);


// Accessing Nested Arrays

// var myPlants = [{
//         type: "flowers",
//         list: [
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];

// var secondTree = myPlants[0].list[1];
// console.log(secondTree);

// Record Collection

// var collection = {
//     "2548": {
//         "album": "Slippery When Wet",
//         "artist": "Bon Jovi",
//         "tracks": [
//             "Let It Rock",
//             "You Give Love a Bad Name"
//         ]
//     },
//     "2468": {
//         "album": "1999",
//         "artist": "Prince",
//         "tracks": [
//             "1999",
//             "Little Red Corvette"
//         ]
//     },
//     "1245": {

//         "artist": "Robert Palmer",
//         "tracks": []
//     },
//     "5439": {
//         "album": "ABBA Gold"
//     }
// };

// var collectionCopy = JSON.parse(JSON.stringify(collection));

// function updateRecords(id, prop, value) {

//     if (value === "") {
//         delete collection[id][prop];
//     } else if (prop === "tracks") {
//         collection[id][prop] = collection[id][prop] || [];
//         collection[id][prop].push(value);
//     } else {
//         collection[id][prop] = value;
//     }

//     return collection;
// }

// console.log(updateRecords(5439, "artist", "ABBA"));

// Iterate with JavaScript While Loops

// var myArray = [];

// var i = 0;
// while (i < 5) {
//     myArray.push(i);
//     i++;
// }

// console.log(myArray);

// Iterate with JavaScript For Loops

// var myArray = [];

// for (var i = 1; i < 6; i++) {
//     myArray.push(i);
// }

// console.log(myArray);


// Iterate Odd Numbers With a For Loop

// var myArray = [];

// for (var i = 1; i < 10; i += 2) {
//     myArray.push(i);
// }

// console.log(myArray);


// Count Backwards With a For Loop

// var myArray = [];

// for (var i = 9; i > 0; i -= 2) {
//     myArray.push(i);
// }

// console.log(myArray);


// Iterate Through an Array with a For Loop

// var myArr = [2, 3, 4, 5, 6];

// var total = 0;
// for (var i = 0; i < myArr.length; i++) {

//     total += myArr[i];
// }

// console.log(total);


// Nesting For Loops

// function multiplyAll(arr) {
//     var product = 1;
//     // Only change code below this line
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr[i].length; j++) {
//             product *= arr[i][j];
//         }
//     }
//     // Only change code above this line
//     return product;
// }

// var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

// console.log(product);


// Iterate with JavaScript Do...While Loops

// var myArray = [];
// var i = 10;

// do {
//     myArray.push(i);
//     i++;
// } while (i < 5);

// console.log(i, myArray);


// Replace Loops using Recursion

// function sum(arr, n) {
//     // Only change code below this line
//     if (n <= 0) {
//         return 0;
//     } else {
//         return sum(arr, n - 1) + arr[n - 1];
//     }
//     // Only change code above this line
// }

// console.log(sum([2, 3, 4], 1));

// Profile Lookup

// var contacts = [{
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];

// function lookUpProfile(name, prop) {
//     // Only change code below this line
//     for (var i = 0; i < contacts.length; i++) {
//         if (contacts[i].firstName === name) {
//             if (contacts[i].hasOwnProperty(prop)) {
//                 return contacts[i][prop] || "No such property";
//             } else {
//                 return "No such property";
//             }
//         }
//     }
//     return "No such contact";
// }

// console.log(lookUpProfile("Akira", "likes"));

// Generate Random Fractions with JavaScript

// function randomFraction() {
//     return Math.random();

//     // Only change code above this line
// }

// console.log(randomFraction());


// Generate Random Whole Numbers with JavaScript

// var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

// function randomWholeNum() {
//     return Math.floor(Math.random() * 10);
// }

// console.log(randomWholeNum());


// Generate Random Whole Numbers within a Range

// function randomRange(myMin, myMax) {
//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// }

// console.log(randomRange(5, 15));


// Use the parseInt Function

// function convertToInteger(str) {
//     return parseInt(str);
// }

// console.log(convertToInteger("56"));


// Use the parseInt Function with a Radix

// function convertToInteger(str) {
//     return parseInt(str, 2);
// }

// console.log(convertToInteger("10011"));


// Use the Conditional (Ternary) Operator

// condition ? statement-if-true : statement-if-false;
// function checkEqual(a, b) {
//     return a === b ? "Equal" : "Not Equal";
// }

// console.log(checkEqual(1, 2));


// Use Multiple Conditional (Ternary) Operators

// function checkSign(num) {
//     return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
// }

// console.log(checkSign(10));


// Use Recursion to Create a Countdown

// function countdown(n) {
//     if (n < 1) {
//         return [];
//     } else {
//         const countArray = countdown(n - 1);
//         countArray.unshift(n);
//         return countArray;
//     }

// }

// console.log(countdown(5));


// Use Recursion to Create a Range of Numbers

// function rangeOfNumbers(startNum, endNum) {
//     if (endNum - startNum === 0) {
//         return [startNum];
//     } else {
//         const numbers = rangeOfNumbers(startNum, endNum - 1);
//         numbers.push(endNum);
//         return numbers;
//     }

// }

// console.log(rangeOfNumbers(1, 5));


// Prevent Object Mutation

// function freezeObj() {
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };
//     // Only change code below this line
//     Object.freeze(MATH_CONSTANTS);
//     // Only change code above this line
//     try {
//         MATH_CONSTANTS.PI = 99;
//     } catch (ex) {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
// }

// const PI = freezeObj();

// console.log(PI);


// Use Arrow Functions to Write Concise Anonymous Functions

// const magic = () => {
//     return new Date();
// }

// OR

// const magic = () => new Date();

// console.log(magic());


// Write Arrow Functions with Parameters

// const myConcat = (arr1, arr2) => arr1.concat(arr2);

// console.log(myConcat([1, 2], [3, 4, 5]));


// Write a Higher Order Arrow Function

// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// const squareList = (arr) => {
//     const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
//     return squaredIntegers;
// };

// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);


// const increment = (function () {
//     return function increment(number, value = 1) {
//         return number + value;
//     };
// }

// )();

// console.log(increment(5, 2));
// console.log(increment(5));


// Use the Rest Parameter with Function Parameters

// const sum = (function () {
//     return function sum(...args) {
//         return args.reduce((a, b) => a + b, 0);
//     };

// })();

// console.log(sum(1, 2, 3));


// Use the Spread Operator to Evaluate Arrays In-Place

// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// (function () {

//     // arr2 = arr1
//     arr2 = [...arr1];
//     arr1[0] = 'potato';

// })();

// console.log(arr2);


// Use Destructuring Assignment to Extract Values from Objects

// var voxel = { x: 3.6, y: 7.4, z: 6.54 };

// const { x: a, y: b, z: c } = voxel; // Desctructuring a= 3.6, b= 7.4, c= 6.54


// const AVERAGE_TEMPERATURE = {
//    today: 77.5,
//    tomorrow: 79
// };

// function getTempOfTmrw(avgTemperatures) {
//     "use strict";
//     // Only change code below this line
//     const { today: tempOfTomorrow } = avgTemperatures; // Change this line
//     // Only change code above this line
//     return tempOfTomorrow;
// }

// console.log(getTempOfTmrw(AVERAGE_TEMPERATURE));


// Use Destructuring Assignment with Nested Objects

// const LOCAL_FORECAST = {
//     today: { min: 72, max: 83 },
//     tomorrow: { min: 73.3, max: 84.6 }
// };

// function getMaxOfTmrw(forecast) {
//     "use strict";
//     // Only change code below this line
//     const { tomorrow: { max: maxOfTomorrow } } = forecast; // Change this line
//     // Only change code above this line
//     return maxOfTomorrow;
// }

// console.log(getMaxOfTmrw(LOCAL_FORECAST));


// Use Destructuring Assignment to Assign Variables from Arrays

// let a = 8, b = 6;
// (() => {
//     "use strict";
//     // Only change code below this line
//     [a, b] = [b, a];
//     // Only change code above this line
// })();
// console.log(a); // should be 6
// console.log(b); // should be 8


// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function removeFirstTwo(list) {
//     "use strict";
//     // Only change code below this line
//     const [a, b, ...arr] = list; // Change this line
//     // Only change code above this line
//     return arr;
// }

// const arr = removeFirstTwo(source);
// console.log(arr); // should be [3,4,5,6,7,8,9,10];
// console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];


// Use Destructuring Assignment to Pass an Object as a Function's Parameters

// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
// };

// const half = (function () {
//     "use strict"; // do not change this line

//     // Only change code below this line
//     return function half({ max, min }) {
//         // Use function argument destructuring
//         return (max + min) / 2.0;
//     };

//     // Only change code above this line

// })();
// console.log(stats); // should be object
// console.log(half(stats)); // should be 28.015


// Create Strings using Template Literals

// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["id-blacklist", "no-dup-keys"]
// };

// function makeList(arr) {
//     "use strict";

//     // Only change code below this line
//     const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
//     // Only change code above this line

//     return resultDisplayArray;
// }

// /**

//  * makeList(result.failure) should return:

//  * [ `<li class="text-warning">no-var</li>`,
//  *   `<li class="text-warning">var-on-top</li>`,
//  *   `<li class="text-warning">linebreak</li>` ]

//  * */



// Write Concise Object Literal Declarations Using Simple Fields

// const createPerson = (name, age, gender) => ({name, age, gender})


// console.log("Rod", 30, "Male")




// Write Concise Declarative Function 

// const bicycle = {
//     gear: 2,
    
//     // setGear: function(newGear){
//     //     "use strict"
//     //     this.gear = newGear
//     // }

//     setGear(newGear){
//         "use strict"
//         this.gear = newGear
//     }
// }


// bicycle.setGear(3)
// console.log(bicycle.gear)


// Use class Syntax to Define a Constructor Function


// function makeClass() {
//     "use strict";
//     /* Alter code below this line */
//     class Vegetable {
//         constructor(name){
//             this.name = name
//         }
//     }
//     /* Alter code above this line */
//     return Vegetable;
// }

// const Vegetable = makeClass();
// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // => should be 'carrot'



// Use getters and setters to Control Access to an Object

// function makeClass() {
//     "use strict";
//     /* Alter code below this line */
//     class Thermostat {
//         constructor(temp){
//             this._temp = 5/9 * (temp - 32)
//         }
            // Getter
//         get temperature(){
//             return this._temp
//         }
            // Setter
//         set temperature(updatedTemp){
//             this._temp = updatedTemp
//         }
//     }
//     /* Alter code above this line */
//     return Thermostat;
// }

// const Thermostat = makeClass();
// const thermos = new Thermostat(76); // setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in C
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in C



// Understand the Differences Between import and require

// import { capitalizeString } from "string_functions"
// "use strict";
// capitalizeString("hello!");

// export const capitalizeString = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }


// Use export to Share a Code Block

// const capitalizeString = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// export { capitalizeString }

// export const foo = "bar";
// export const bar = "foo";


// Use * to Import Everything from a File

// import * as stringFunctions from "./string_functions.js"


// Create an Export Fallback with export default

// export default function subtract(x, y) 


// Import a Default Export

// import subtract from "./math_functions.js"

// "use strict";
// subtract(7,4);















