console.log("tasks 10 => 17")
var Number1 = 10;
var Number2 = 20;
//first line
console.log(Number1 + "" + Number2);
//second line
console.log(typeof (Number1 + "" + Number2));
//third line
console.log(`${Number1}${Number2}`)
//fourth line
console.log(typeof `${Number1}${Number2}`)
//fifth and six line
console.log(Number2 + "\n" + Number1);
//seven and eight line
console.log(`${Number2}
${Number1}`)
console.log("---------------------------")

console.log(elzero.innerHTML);
console.log(typeof elzero);
console.log("----------------------------")

console.log("\`I\'m In \n \\\\ \n Love \\\\ \"\"\" \'\'\' \n ++ with ++ \n \\\"\"\"\\\"\"\" \n \"\"JavaScript\"\"\`\`");
console.log("----------------------------")

let a = 21;
let b = 20;
console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`)
console.log("----------------------------")
console.log("----------------------------")

console.log("tasks 18 => 22")
// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400);
console.log("-----------------------------")

let num = 3;

// Solution One
console.log(num * (true + true)); // 6

// Solution Two
console.log(num + true + true + true); // 6

// Soultion Three
console.log(num * num / num * (true + true)); // 6

// Soultion Four
console.log(num * ++num / (true + true)); // 6

// Solution Five
console.log(--num + num); // 6

// Solution Six
console.log(num += num); // 6
console.log("----------------------------")

let num1 = "10";

// Solution One
console.log(+num1 + +num1); // 20

// Solution Two
console.log(num1 * (true + true)); // 20

// Solution Three
console.log((num1 / (true + true)) * (true + true) + +num1); // 20

// Solution Four
console.log(num1++ + --num1); // 20

// Solution five
console.log(--num1 + true + ++num1); // 20
console.log("----------------------------")

let points = 10;

console.log(++points + true + true); // 13

console.log(--points - (true + true)); // 8;
console.log("----------------------------")
console.log("----------------------------")

console.log("tasks 23 => 27")
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(10e4); // 100000
console.log(10 ** 5); // 100000
console.log(10 * 10 ** 4); // 100000
console.log(1_000_00); // 100000
console.log(100 * 1000); // 100000
console.log(25e3 + 75e3); // 100000
console.log(1_000_000 / 10); // 100000
console.log(10e5 / 1e1); // 100000
console.log(100_000.00); // 100000
console.log(2e2 * 5e2); // 100000
console.log("---------------------------")

console.log(Number.MAX_SAFE_INTEGER)
console.log("---------------------------")

console.log(`${Number.MAX_SAFE_INTEGER}`.length)
console.log("---------------------------")

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57
console.log("---------------------------")

let num2 = 10;

console.log(Number.isInteger(num2) + true); // 2
console.log("---------------------------")

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.floor(parseFloat(flt))); // 10
console.log("---------------------------")
console.log("---------------------------")

console.log("tasks 27 => 30")

let userName = "Elzero";
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.substr(-6, 1).toLowerCase().repeat(3)); // eee
console.log("---------------------------")

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.toLowerCase().startsWith(letterE)); // True
console.log(word.toUpperCase().endsWith(letterO)); // True