
// task 7
let num = [1, 2, 3, 4, 5, 6]
let doubleRes = num.map( (item)=> item*2 )
console.log(doubleRes);

// task 8
let evenNum = num.filter( (item)=> item%2===0 )
console.log(evenNum)

// task 9
let sumRes = num.reduce( (acc, item)=> (acc+item), 0)
console.log(sumRes);

// task 10
for (i=0; i<num.length; i++){
    console.log(num[i]);
}

// task 11
num.forEach(function(item){
    console.log(item);
})