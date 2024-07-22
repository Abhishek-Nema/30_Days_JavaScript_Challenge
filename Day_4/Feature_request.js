
// request 1

console.log("Printing numbers from 1 to 10: using for loop");

for (var i = 0; i < 10; i++) {
    console.log(i + 1);
}

console.log("Printing numbers from 1 to 10: using while loop");

let a = 1;
while (a <= 10) {
    console.log(a);
    a++;
}


// request 2

for (var n = 1; n <= 10; n++) {
    console.log(`5 * ${n} = ${5 * n}`)
}



// request 3

for (var l1 = 0; l1 < 5; l1++) {
    var row = "";

    for (var l2 = 4; l2 > l1; l2--) {
        row += " ";
    }

    for (var l3 = 0; l3 <= l1; l3++) {
        row += "* ";
    }

    console.log(row);
}


// request 4

let start = 1;
let end = 10;

let b = start;
let res = 0;

while (b <= end) {
    res = res + b;
    b++
}
console.log(`Sum from ${start} to ${end} : ${res}`);


// request 5

let fact = 1;
let value = 6;

do {
    if (value === 0) {
        fact = 1;
    }
    else {
        fact = fact * value;
        value--;
    }

} while (value > 0)

console.log("answer :", fact);

