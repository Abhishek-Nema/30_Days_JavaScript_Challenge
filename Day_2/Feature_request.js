
// request 1
a = 10;
b = 2;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);


// request 2
n1 = 11;
n2 = 3;

if (n1 + n2 >= 11 && n1 % n2 === 0) {
    console.log("all conditions met");
}

else if (n1 + n2 >= 11 || n1 % n2 === 0) {
    console.log("any one condtion met");
}
else {
    console.log("no conditions met");
}


// request 3
num = Number(prompt("enter the number"));

res = num === 0 ? "Zero" : num > 0 ? "Positive" : "Negative";

console.log(res);
