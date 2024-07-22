
// task 5

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);


// task 6

let val = 6;
let n = val;

let res = 1;

do {
    if (val === 0) {
        res = 1;
    }
    else {
        res = res * n;
        n--;
    }
} while (n >= 1)

console.log(`Factorial of ${val} : ${res}`);