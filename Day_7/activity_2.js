// task 3
let book = {
    title: "Wings of Fire",
    "author": "Dr. A.P.J. Abdul Kalam",
    year: 2000
}

book.getDetails = function () {
    return (`${this.title} by ${this['author']}`)
}

console.log(book.getDetails());

// task 4

// book.updateYear = function (anotherYear) {
//     this.year = anotherYear
//     console.log(`So, the book ${this.title} was published in year ${this.year}`);
// }

// book.updateYear(2024)

// or another way is

let book2 = {
    title: "Wings of Fire",
    "author": "Dr. A.P.J. Abdul Kalam",
    year: 1900,
    updateYear : function(yr){
        this.year = yr
    console.log(`So, the book ${this.title} was published in year ${this.year}`);
    }
}


book2.updateYear(2026)
