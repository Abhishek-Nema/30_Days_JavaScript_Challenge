
// request 1

let n = 4;

if (n > 0) {
    console.log("Positive");
}
else if (n < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}

// request 2

var age = 18;

if (age < 18) {
    console.log("As per your age you are not eligible to vote");
}
else {
    console.log("You are eligible to vote");
}

// request 3

var num = 1;

switch (num) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("this number is out of range");
}

// request 4

let marks = 5;

switch (marks) {
    case 1:
        console.log("Grade : F");
        break;
    case 2:
        console.log("Grade : D");
        break;
    case 3:
        console.log("Grade : C");
        break;
    case 4:
        console.log("Grade : B");
        break;
    case 5:
        console.log("Grade : A");
        break;
    default:
        console.log("marks out of range");
}

// request 5

let year = 2024;

if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 === 0) {
        console.log("Leap year");
    }
    else if (year % 100 === 0 && year % 400 !== 0) {
        console.log("Not a leap year");
    }
    else {
        console.log("Leap year");
    }
}
else {
    console.log("Not a leap year");
}
