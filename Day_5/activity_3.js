
// task 5

let sum = (num1, num2) => { return (num1 + num2); }

let ans = sum(5, 8);
console.log(`Result : ${ans}`);


// task 6
var myStr = "abcdefghi";
var choice = 'c';


const checkStr = (str, choice) => {
    for (var elm of str) {
        if (elm === choice) {
            return true;
        }
    }
    return false;
}

let res = checkStr(myStr, choice);
console.log(`Value : ${res}`);


