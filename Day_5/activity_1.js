
// task 1

function check(num) {
    if (num === 0) {
        console.log(`${num} is zero`);
    }
    else if (num % 2 !== 0) {
        console.log(`${num} is odd`);
    }
    else {
        console.log(`${num} is even`);
    }

}

check(72);


// task 2

let arg = 4;

function sqr(para) {
    let res = para ** 2;
    return res;
}

let ans = sqr(arg);
console.log(`Sqaure of ${arg} : ${ans}`)