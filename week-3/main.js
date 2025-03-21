console.log("tasks 57 => 63")
function sayHello(theName, theGender) {
    if (theGender == "Male") {
        console.log(`Hello Mr ${theName}`)
    }
    else if (theGender == "Female") {
        console.log(`Hello Miss ${theName}`)
    }
    else {
        console.log(`Hello ${theName}`)
    }
}

  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"
console.log("////////////////////////////////")
function calculate(firstNum, secondNum, operation) {
    if (secondNum == undefined) {
        console.log("second number not found")
    }
    else{
        if (operation == "add" || operation == undefined) {
            console.log(firstNum + secondNum)
        }
        else if (operation == "subtract") {
            console.log(firstNum - secondNum)
        }
        else if (operation == "multiply") {
            console.log(firstNum * secondNum)
        }
    }
}

  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600
console.log("////////////////////////////////")
function ageInTime(theAge) {
    if (theAge < 100 && theAge > 10) {
        console.log(`${theAge * 12} Months`)
        console.log(`${theAge * 12 * 4} weeks`)
        console.log(`${theAge * 365} Days`)
        console.log(`${theAge * 365 * 24} hours`)
        console.log(`${theAge * 365 * 24 * 60} minuts`)
        console.log(`${theAge * 365 * 24 * 60 * 60} secound`)
    }
    else{
        console.log("Age Out Of Range")
    }
}

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months
console.log("////////////////////////////////")
function checkStatus( a, b, c) {
    let name , age , booll
    [a , b , c].forEach((X) => {
        if (typeof X === "string") {
            name = X
        }
        else if (typeof X === "number") {
            age = X
        }
        else if (typeof X === "boolean") {
            booll = X
        }
    })
    if (booll === true) {
        console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`)
    }
    else{
        console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`)
    }
}

  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
console.log("////////////////////////////////")

function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for (let index = startYear; index <= endYear; index++) {
        document.write(`<option> ${index} </option>`)
    }
    document.write(`</select>`)
}
createSelectBox(2000, 2021);
console.log("////////////////////////////////")

function multiply(...nums) {
    let result = 1, X
    [...nums].forEach((item) => {
        if (typeof item === "number") {
            X = Math.floor(item)
            result *= X
        }
    })
    console.log(result)
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
console.log("////////////////////////////////")
console.log("////////////////////////////////")
console.log("tasks 64 => 70")
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        
        x = zName.indexOf(" ")
        z = zName.charAt(x+1).toUpperCase()
        return (`${zName.slice(0, x+1) + z}.`)
      // Osama Mohamed => Osama M.
      // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
        a = zAge.match(/\d+/);
        return (`Your Age Is ${a}`)
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        c= zCountry.slice(0,2).toUpperCase();
        return (`You Live In ${c}`)
      // Egypt => You Live In EG
      // Syria => You Live In SY
    }
    function fullDetails() {
        var message = `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`
        return message
    } 
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY
console.log("////////////////////////////////")

let itsMe = () =>`Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function


let urlCreate = (protocol , web , tld) => `${protocol}://www.${web}.${tld}`

  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
console.log("////////////////////////////////")

let checker = (zName) =>  (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
console.log("////////////////////////////////")

function specialMix(...data) {
    let sum=0;
    [...data].forEach((item) => {
        z =item.toString().match(/\d+/)
        if (z) {
            sum += parseInt(z)
        }
    })
    if (sum == 0) {
        return ("All Is Strings")
    }
    else{
        return sum
    }
}

  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
console.log("////////////////////////////////")
console.log("////////////////////////////////")
console.log("tasks 71 => 78")

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let newmix = mix.map(function (ele) {
    return isNaN(ele) ? ele :"" ;
}).reduce(function(acc , current){
    return `${acc}${current}`
})
console.log(newmix)
// Elzero
console.log("////////////////////////////////")

let myString = "EElllzzzzzzzeroo";
let newstring = myString.split("").filter(function(ele , index){
    return myString.indexOf(ele) == index 
}).reduce(function(acc,current){
    return `${acc}${current}`
},"")
console.log(newstring)
// Elzero
console.log("////////////////////////////////")
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newarray = myArray.flat().reduce(function(acc , current){
    return `${acc}${current}`
})
console.log(newarray)
// Elzero
console.log("////////////////////////////////")
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let newnum = numsAndStrings.filter(function(ele){
    return isNaN(ele) ? "" :ele ;
}).map(function(ele){
    return -ele
})

console.log(newnum)
// [-1, -10, 10, 20, -5, -3]
console.log("////////////////////////////////")

let nums = [2, 12, 11, 5, 10, 1, 99];
let newnums = nums.reduce(function(acc , current){
    return current % 2==0? acc *current : acc+current ;
}, 1)
console.log(newnums)
// 500
console.log("////////////////////////////////")
