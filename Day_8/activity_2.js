
// task 3
let myArr = [1, 2, 3, 4, 5]

let [elm1, elm2, elm3, elm4, elm5] = myArr  // Destructuring of an array
console.log(`First element: ${elm1} ,  Second element: ${elm2}`);


// task 4
let book = {
    title: "Wings of Fire",
    author: "Dr. A.P.J. Abdul Kalam"
}

const { title, author, year = 2001 } = book  // Destructuring an object, with fallback value as 2001
console.log(`This book is ${title}, written by ${author} in ${year}`);