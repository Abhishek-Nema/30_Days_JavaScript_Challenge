<<<<<<< HEAD

// request 1
let arr1 = [1, 2, 3, 4, 5]
arr1.pop()
console.log(arr1)

arr1.push(6, 7)
console.log(arr1)

arr1.unshift("One", "Three")
console.log(arr1)

arr1.shift()
console.log(arr1)

// request 2
let arr2 = [10, 20, 30, 40, 50]
let arr2MapFilter = arr2.map( (item)=> item*2).filter( (item)=> item>55)
console.log((arr2MapFilter));

let arr2Reduce = arr2.reduce( (acc, item)=> (acc+item), 0) 
console.log(arr2Reduce);

// request 3
let arr4 = [100, 200, 300, 400, 500]
for(i=0; i<arr4.length; i++){
    console.log(arr4[i]);
}
let arr5 = [1000, 2000, 3000, 4000, 5000]
arr5.forEach(function(item){
    console.log(item);
})

// request 4
=======

// request 1
let arr1 = [1, 2, 3, 4, 5]
arr1.pop()
console.log(arr1)

arr1.push(6, 7)
console.log(arr1)

arr1.unshift("One", "Three")
console.log(arr1)

arr1.shift()
console.log(arr1)

// request 2
let arr2 = [10, 20, 30, 40, 50]
let arr2MapFilter = arr2.map( (item)=> item*2).filter( (item)=> item>55)
console.log((arr2MapFilter));

let arr2Reduce = arr2.reduce( (acc, item)=> (acc+item), 0) 
console.log(arr2Reduce);

// request 3
let arr4 = [100, 200, 300, 400, 500]
for(i=0; i<arr4.length; i++){
    console.log(arr4[i]);
}
let arr5 = [1000, 2000, 3000, 4000, 5000]
arr5.forEach(function(item){
    console.log(item);
})

// request 4
>>>>>>> 533e84f8e4a8b763e6e27a565665ac4303cba36d
