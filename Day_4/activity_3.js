<<<<<<< HEAD

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

=======

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

>>>>>>> 533e84f8e4a8b763e6e27a565665ac4303cba36d
console.log(`Factorial of ${val} : ${res}`);