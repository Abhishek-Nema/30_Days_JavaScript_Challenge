
// task 5
let arr1 = [1, 2, 3, 4, 5]
let arr2 = ["Superman", "Batman", "Flash"]

let res = [...arr1, ...arr2]  //spread operator
console.log(res);

// investigation
let v1 = 25
let v2 = "hello, this is a string"
let v3 = true
let v4 = "Mohak"
let v5 = 21.6

let newArr = [...[v1, v2, v3, v4, v5]]
console.log(`New array : ${newArr} and it's type : ${typeof newArr}`);


// task 6
function greet(...str){
    for(let elm of str){
        console.log(`Hi ${elm}`);
    }
}

greet("Mohak", "Naman", "Surbhi")
