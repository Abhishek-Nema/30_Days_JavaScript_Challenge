<<<<<<< HEAD

// task 7

let year = 2028;

if (true) {
    if (year % 100 === 0 && year % 400 !== 0) {
        console.log(`Not a leap year : ${year} is divisible by 100, but not by 400`);
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        console.log(`Leap year : ${year} is divisible by 100, as well as by 400`);
    }
    else if (year % 4 === 0) {
        console.log(`Leap year : ${year} is divisible by 4`);
    }
    else {
        console.log(`Not a leap year : ${year} is not divisible by 4 itself`);
    }
=======

// task 7

let year = 2028;

if (true) {
    if (year % 100 === 0 && year % 400 !== 0) {
        console.log(`Not a leap year : ${year} is divisible by 100, but not by 400`);
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        console.log(`Leap year : ${year} is divisible by 100, as well as by 400`);
    }
    else if (year % 4 === 0) {
        console.log(`Leap year : ${year} is divisible by 4`);
    }
    else {
        console.log(`Not a leap year : ${year} is not divisible by 4 itself`);
    }
>>>>>>> 533e84f8e4a8b763e6e27a565665ac4303cba36d
}