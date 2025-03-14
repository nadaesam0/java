console.log("tasks 31->32")
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(typeof -50 == typeof +"-40"); // true
console.log(typeof 10 == typeof -"-40"); // true
console.log(+"10" === 10); // true
console.log( 20 != false); // true
console.log("--------------------------------")
let num1 = 10;
let num2 = 20;
console.log(num1<num2); // true
console.log(num2>num1); // true
console.log(num1+num2 != num2-num1); // true
console.log(typeof num1 == typeof num2); // true
console.log(num1+num2>num1 && num2-num1>=num1); // true
console.log(num1!==num2 || num2/num1<num1); // true
console.log("--------------------------------")
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a + b > a + c); // true
console.log(!(a > b) && !(a == b) && !(a < c) && !(a === c)); // true
console.log("--------------------------------")
console.log("--------------------------------")
console.log("tasks 33->37")
// Test Case 1
let num_1 = 9; // "009"
if (num_1 < 10) {
    console.log("00"+num_1)
}
// Test Case 2
let num_2 = 20; // "020"
if (num_2 > 10 && num_2 < 100) {
    console.log("0"+num_2)
}
// Test Case 3
let num_3 = 110; // "110"
if (num_3>100) {
    console.log(num_3)
}
console.log("--------------------------------")
let num4 = 9;
let str = "9";
let str2 = "20";

// Output
if (num4==str) {
    console.log(`${num4} Is The Same Value As ${str}`)
}
if (num4 == str && typeof num4 != typeof str) {
    console.log(`${num4} Is The Same Value As ${str} But Not The Same Type`)
}
if (num4 !== str2) {
    console.log(`${num4} Is Not The Same Value Or The Same Type As ${str2}`)
}
if ( typeof str == typeof str2 ) {
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`)
}
console.log("--------------------------------")
let num5 = 10;
let num6 = 30;
let num7 = "30";

// Needed Output
if (num7 > num5 && num7 !==num5) {
    console.log(`30 Is Larger Than 10 And Type string Not The Same Type As number`)
}
if (num7 > num5 && num7 == num6 && typeof num7 != typeof num6) {
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
}
if (num7!== num5 && typeof num7 != typeof num6) {
    console.log(`${num7} Value And Type Is Not The Same As ${num5} And Type Is Not The Same As ${num6}`)
}
console.log("--------------------------------")
console.log("--------------------------------")
console.log("tasks 38->39")
let day1 = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
console.log(day1.trim().charAt(0).toUpperCase() + day1.trim().substring(1).toLowerCase())
let day2 = "Friday";
let day3 = "Saturday";
let day4 = "Sunday";
// Output => "No Appointments Available"

let day5 = "Monday";
let day6 = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

let day7 = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

let day8 = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

let day = "World";
// Output => "Its Not A Valid Day"
switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available")
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM")
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM")
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM")
        break;
    default:
        console.log("Its Not A Valid Day")
        break;
}
console.log("--------------------------------")
console.log("--------------------------------")
console.log("tasks 40->47")
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
myFriends.length=num
// Method 1
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
myFriends.length=4
myFriends.pop()
// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
console.log("--------------------------------")

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.shift()
friends.pop()
console.log(friends); // ["Eman", "Osama"]
console.log("--------------------------------")

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr =   arrOne.concat(arrTwo)
finalArr = finalArr.sort().reverse()

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
console.log("--------------------------------")

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(`${words[website.length][0].slice(website.length).toUpperCase()}`); // ZERO
console.log("--------------------------------")

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
if (haystack.includes(needle)) {
    console.log("Found")
}
if (haystack[1]==needle) {
    console.log("Found")
}
if (haystack.slice(-2,-1)==needle) {
    console.log("Found")
}

// Write 3 Solutions
console.log("--------------------------------")

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = (arr2[2]+arr1.pop()+arr2.slice(-1)).toLowerCase()

console.log(allArrs); // fxy
console.log("--------------------------------")
console.log("--------------------------------")
console.log("tasks 48->53")
let start = 10;
let end = 100;
let exclude = 40;
for (let index = start; index <=end; index+=start) {
    if (index==exclude) {
        continue;
    }
    console.log(index)
}
console.log("--------------------------------")

let start1 = 10;
let end1 = 0;
let stop = 3;
for (let index1 = start1; index1 >=end1; index1--) {
    if (index1<start1) {
        console.log("0"+index1)
    }
    else{
        console.log(index1)
    }
    if (index1==stop) {
        break;
    }
}
console.log("--------------------------------")

let start2 = 1;
let end2 = 6;
let breaker = 2;
for (let index = start2; index <=end2; index++) {
    console.log(index)
    console.log("-- "+breaker)
    console.log("-- " + (end2-breaker))
}
console.log("--------------------------------")
let index = 10;
let jump = 2;
for (let index3 = index; index3 >= jump; index3-=jump) {
    console.log(index3)
    if (index3== (jump*jump)) {
        break;
    }
}
console.log("--------------------------------")

let friendss = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
count=0

for (let index4 = 0; index4 < friendss.length; index4++) {
    if (friendss[index4].charAt(0).toLowerCase()!=letter) {
        console.log(`"${count} => ${friendss[index4]}"`)
    }
    count++
}
console.log("--------------------------------")

let startt = 0;
let swappedName = "elZerO";
result=""

for (let index = startt; index < swappedName.length; index++) {
    let char =swappedName[index]
    if ( char == char.toLowerCase() ) {
        result+= char.toUpperCase()
    }
    else{
        result+= char.toLowerCase()
    }
}
console.log(`${result}`)
console.log("--------------------------------")

let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
mix.splice(0,1)
for (let index = 0; index < mix.length; index++) {
    if (typeof mix[index] == typeof start7) {
        console.log(mix[index])
    }
    
}