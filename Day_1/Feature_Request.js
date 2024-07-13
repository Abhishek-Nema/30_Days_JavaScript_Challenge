
// request 1
let a = 15;
let b = 'z';
let c = "chai piyenge?";
let d = 12.5;
let e = true;
let f = null;
let g = undefined;
let h = {
    city : "Bangalore",
    country : "INDIA"
}
let i = ['a', 25, "namaste sir", {}, [], false]

console.log(`a : ${a} , type : ${typeof(a)}`);
console.log(`b : ${b} , type : ${typeof(b)}`);
console.log(`c : ${c} , type : ${typeof(c)}`);
console.log(`d : ${d} , type : ${typeof(d)}`);
console.log(`e : ${e} , type : ${typeof(e)}`);
console.log(`f : ${f} , type : ${typeof(f)}`);
console.log(`g : ${g} , type : ${typeof(g)}`);
console.log(`h : ${h} , type : ${typeof(h)}`);
console.log(`i : ${i} , type : ${typeof(i)}`);

// request 2

let num1 = 25;
console.log(`Initial value of let : ${num1}`);
num1 = 30;
console.log(`Final value of let : ${num1}`);

const num2 = 100;
console.log(`Initial value of const : ${num2}`);
// num2 = 200;

try{
    num2 = 105;
}
catch(err){
    console.log(`Error aaya => ${err} `);
}