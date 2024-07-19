
// task 7

let prod = (num1, num2 = 30) => num1 * num2;

let ans = prod(5, 2);
console.log(`Result: ${ans}`);


// task 8

function greet(name, age = 25) {
    return (`Hi ${name}, you are ${age} years old, right? Have a great day ahead!`)
}

let res = greet('Zakir');
console.log(res);
