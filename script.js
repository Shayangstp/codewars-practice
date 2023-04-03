// // even or Odd :

// function even_or_odd(number) {
//   return number % 2 ? "Odd" : "Even";
// }

// // -----------------------------------------------------------------------------

// // who is like this :
// function likes(names) {
//   if (names.length === 0) return "no one likes this";
//   if (names.length === 1) return names[0] + " likes this";
//   if (names.length === 2) return names[0] + " and " + names[1] + " like this";
//   if (names.length === 3)
//     return names[0] + ", " + names[1] + " and " + names[2] + " like this";
//   return (
//     names[0] +
//     ", " +
//     names[1] +
//     " and " +
//     (names.length - 2) +
//     " others like this"
//   );
// }

// // -----------------------------------------------------------------------------
// // isogram :
// function isIsogram(str) {
//   let i, j;
//   str = str.toLowerCase();
//   for (i = 0; i < str.length; i++) {
//     for (j = i + 1; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// // console.log(isIsogram("abc"));

// // function isIsogram(str) {
// //   return !str.match(/([a-z]).*\1/i);
// // }

// // in set just the no equal element saved
// // function isIsogram(str) {
// //   return new Set(str.toUpperCase()).size == str.length;
// // }

// // ---------------------------------------------------------

// // array.diff = arrayDiff([1, 2], [1]) == [2];
// function arrayDiff(a, b) {
//   const result = a.filter((n) => !b.includes(n));
//   return result;
// }

// // console.log(arrayDiff([1, 2], [2]));
// // another way
// // function array_diff(a, b) {
// //   b = new Set(b);
// //   return a.filter((v) => !b.has(v));
// // }

// // ----------------------------------------------------------

// // Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// function descendingOrder(n) {
//   const toString = n.toString();
//   const nums = toString.split("");

//   const sortNums = nums.sort((a, b) => {
//     return b - a;
//   });

//   return sortNums.join("");
// }

// // console.log(descendingOrder(124364375755413));

// // next solution
// function descendingOrder(n) {
//   return parseInt(String(n).split("").sort().reverse().join(""));
// }

// // ------------------------------------------------------------
// // You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// function findOutlier(int) {
//   const filterEven = int.filter((n) => n % 2 === 0);
//   const filterOdd = int.filter((n) => n % 2 !== 0);

//   if (filterEven.length === 1) {
//     return +filterEven.join("");
//   } else if (filterOdd.length === 1) {
//     return +filterOdd.join("");
//   }
// }

// // ---------------------------------------------------------------
// // In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// function nbYear(p0, percent, aug, p) {
//   for (var years = 0; p0 < p; years++) {
//     p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
//   }
//   return years;
// }
// // ------------------------------------------------------------------
// // Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// function longest(s1, s2) {
//   const str = s1 + s2;
//   const array = str.split("");
//   const sortArray = array.sort();
//   const removeDublication = new Set(sortArray);
//   const a = Array.from(removeDublication).join("");
//   return a;
// }

// // const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// // -------------------------------------------------------------------

// // Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitaliz

// function toCamelCase(input) {
//   let result = "";
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === "_" || input[i] === "-") {
//       i++;
//       result += input[i].toUpperCase();
//     } else {
//       result += input[i];
//     }
//   }
//   return result;
// }

// // const s = 'foo-bar_baz';
// // console.log(toCamelCase(s));

// // function toCamelCase(input) {
// //   return input
// //     .split(/[-_]/)
// //     .map((e) => e[0].toUpperCase() + e.substr(1).toLowerCase())
// //     .join("");
// // }

// // console.log(toCamelCase("shayan_gole"));

// // const a = "shayan-gol:baran";

// // const b = a.split(/[- _ : ]/);
// // console.log(b);

// // function toCamelCase(str){
// //   var regExp=/[-_]\w/ig;
// //   return str.replace(regExp,function(match){
// //         return match.charAt(1).toUpperCase();
// //    });
// // }

// // function toCamelCase(str){
// //   return str.replace(/(_|-)./g, m => m.substr(1, 1).toUpperCase());
// // }

// // ---------------------------------------------------------------------

// // Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// function XO(str) {
//   let array = str.toLowerCase().split("");

//   let count1 = 0;
//   let count2 = 0;
//   let val1 = "x";
//   let val2 = "o";

//   if (array === undefined) {
//     return true;
//   }
//   array.forEach((v) => {
//     v === val1 && count1++;
//   });

//   array.forEach((v) => {
//     v === val2 && count2++;
//   });

//   if (count1 !== count2) {
//     return false;
//   }
//   return true;
// }

// // function XO(str) {
// //   return (
// //     str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
// //   );
// // }

// // const XO = (str) => {
// //   str = str.toLowerCase().split("");
// //   return (
// //     str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
// //   );
// // };

// const a = "xxoxxox";
// const array = a.split("");

// const sh = array.filter((x) => x === "o");

// // --------------------------------------------------------------------------
// // Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// // (In this case, all triangles must have surface greater than 0 to be accepted).

// function isTriangle(a, b, c) {
//   if (a + b > c && a + c > b && c + b > a) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // --------------------------------------------------------------------

// // Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// function solution(str) {
//   const array = str.split("");

//   const underscore = ["_"];
//   if (array.length % 2 !== 0) {
//     const newstring = array.join("");
//     return (newArray =
//       newstring.concat(underscore).match(/[\s\S]{1,2}/g) || []);
//   } else {
//     const newArray = array.join("");
//     return newArray.match(/[\s\S]{1,2}/g) || [];
//   }
// }

// // better ways:

// // function solution(s) {
// //   return (s + "_").match(/.{2}/g) || [];
// // }

// // function solution(str){
// //   return str.split("").map((e,i) => i % 2 === 0 ? e + (str[i+1] || "_") : false).filter(e => e)
// // }

// //---------------------------------------------------------------------------------

// // Replace With Alphabet Position number

// function alphabetPosition(text) {
//   const str = text.replace(/ /g, "").replace(/[^a-zA-Z ]/g, "");
//   const array = str.split("");
//   const newArray = array.map((e) => e.toLowerCase().charCodeAt() - 96);

//   const uniCodes = newArray.join(" ");
//   return uniCodes;
// }

// // ---------------------------------------------------------------------------
// // Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// // Persistent Bugger.

// function persistence(num) {
//   var numArray = num.toString().split("");

//   let count = 0;

//   let total;

//   while (numArray.length > 1) {
//     total = numArray.reduce(function (sum, currentValue) {
//       return sum * currentValue;
//     });

//     count++;

//     numArray = total.toString().split("");
//   }

//   return count;
// }

// // --------------------------------------------------------------------

// // Sum of Digits / Digital Root

// // Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer

// function sumArray(num) {
//   let array = Array.from(String(num), Number);
//   let sum;

//   do {
//     sum = array.reduce(function (a, b) {
//       return a + b;
//     });

//     array = Array.from(String(sum), Number);
//   } while (array.length > 1);

//   return sum;
// }

// // ------------------------------------------------------------------------
// // First non-repeating character

// function firstNonRepeatingLetter(str) {
//   let array = str.split("");
//   let map = array.map((e) => e.toLowerCase());

//   let reduce = map.reduce(function (prev, cur) {
//     prev[cur] = (prev[cur] || 0) + 1;
//     return prev;
//   }, {});

//   let finalIndex = null;
//   for (const [key, value] of Object.entries(reduce)) {
//     if (value === 1) {
//       let indexOfunique = map.indexOf(key);
//       finalIndex =
//         finalIndex !== null && finalIndex < indexOfunique
//           ? finalIndex
//           : indexOfunique;
//     }
//   }

//   return finalIndex === null ? "" : array[finalIndex];
// }

// console.log(firstNonRepeatingLetter("aaBcc"));

// -------------------------------------------------------------------
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// function findShort(s) {
//   const array = s.split(" ");
//   var result = Math.min.apply(
//     Math,
//     array.map((str) => str.length)
//   );

//   return result;
// }

//----------------------------------------------------------------------

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// function pigIt(str) {
//   const punch = str
//     .match(/[^a-zA-Z]/g)
//     .join("")
//     .trim();

//   console.log(punch);
//   const textArray = str.split(" ");

//   let final = "";

//   textArray.forEach((e) => {
//     let punch = e.replace(/[^a-zA-Z]/g, "");
//     console.log(punch);
//     let result = "";
//     let ayEl = "ay";

//     if (punch !== "") {
//       let a = punch.split("");
//       // console.log(a);
//       const shiftedEl = a.shift();
//       const elToEnd = a.push(shiftedEl + ayEl).toString();
//       const string = a.join("");

//       result += string;

//       final += " " + result;
//     }
//   });
//   if (punch !== "") {
//     return final.trim() + " " + punch;
//   } else {
//     return final.trim();
//   }
// }

// function pigIt(str) {
//   return str
//     .split(" ")
//     .map((word) =>
//       word.match(/[a-z]/i) ? word.slice(1) + word.charAt(0) + "ay" : word
//     )
//     .join(" ");
// }

// const pigIt = (s) => s.replace(/(\w)(\w*)/g, "$2$1ay");

// ------------------------------------------------------------------------------
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}

//---------------------------------------------------------------------
// This time no story, no theory. The examples below show you how to write function accum:

// function accum(s) {
//   const split = s.toLowerCase().split("");

//   let array = [];

//   split.forEach((item, idx) => {
//     const repeat = item.repeat(idx).toString();

//     const firstIdx = item.charAt(0).toUpperCase();

//     const result = firstIdx + repeat;

//     array.push(result);
//   });

//   return array.join("-");
// }

//-

// function accum(s) {
//   return s
//     .split("")
//     .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
//     .join("-");
// }

// -----------------------------------------------------------------------In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// function highAndLow(numbers) {
//   const nums = numbers.split(" ").sort((a, b) => a - b);

//   const HighToLow = nums[nums.length - 1] + " " + nums[0];

//   return HighToLow.toString();
// }

// //-

// function highAndLow(numbers) {
//   numbers = numbers.split(" ").map(Number);
//   return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
// }

// ----------------------------------------------------------------------

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// function getMiddle(s) {
//   let position;
//   let length;

//   console.log(s.length / 2);

//   if (s.length % 2 == 1) {
//     position = s.length / 2;

//     length = 1;
//   } else {
//     position = s.length / 2 - 1;
//     length = 2;
//   }

//   return s.substring(position, position + length);
// }

// ------------------------------------------------------------------------
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// function maskify(cc) {
//   const array = cc.split("");
//   const n = 4;
//   let arr = [];

//   const last4 = array.splice(-n);
//   array.forEach((item) => {
//     item = "#";
//     arr.push(item);
//   });

//   return arr.join("") + last4.join("");
// }

// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
// }

// console.log(maskify("123546897745511816516"));

// -------------------------------------------------------------------
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel
// function disemvowel(str) {
//   const vowel = str.replace(/[aeiou]/gi, "");
//   return vowel;
// }

// -----------------------------------------------------------------------

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// function divisors(integer) {
//   var divs = [];

//   for (var i = 2; i < integer; i++) {
//     if (integer % i === 0) {
//       divs.push(i);
//     }
//   }

//   return divs.length ? divs : integer + " is prime";
// }

// console.log(divisors(555));
// --------------------------------------------------
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// function squareDigits(num) {
//   let myFunc = (item) => Number(item);

//   var intArr = Array.from(String(num), myFunc);

//   let number = "";

//   intArr.forEach((i) => {
//     const result = Math.pow(i, 2);

//     number += result;
//   });

//   return +number;
// }

// -----------------------------------------
// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

// function alphanumeric(string) {
//   let str = string.toLowerCase();
//   let regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

//   if (/\s/g.test(str) || str.match(regex) || str === "") {
//     return false;
//   } else {
//     return true;
//   }
// }

// -------------------------------------
// Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.

// function order(arr, val) {
//   const valToArr = arr.push(val);
//   const sortArr = arr.sort((a, b) => a - b);
//   const indexOfVal = arr.indexOf(val);

//   console.log(indexOfVal);
// }

// order([1, 2, 3, 4, 7], 5);

// ----------------------------------------
// Write a program that outputs the top n elements from a list.

function largest(n, array) {
  const max = array.sort((a, b) => b - a).slice(0, n);

  return max.sort((a, b) => a - b);
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
