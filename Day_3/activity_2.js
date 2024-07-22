
// task 3
a = -5;
b = 22;
c = 31;

console.log(`Value of a : ${a}`);
console.log(`Value of b : ${b}`);
console.log(`Value of c : ${c}`);

if (a > b) {
    if (a > c) {
        console.log("a is greater");
    }
    else {
        console.log("c is greater");
    }
}
else {
    if (b > c) {
        console.log("b is greater");
    }
    else {
        console.log("c is greater");
    }
}