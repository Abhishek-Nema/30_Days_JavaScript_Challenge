
// task 7
let myBook = {
    title : "Inner Engineering",
    author: "sadhguru",
    publishedYear: 2016,
    daetils: function(){
        return (`Book's title is ${this.title} and it's published year was ${this.publishedYear}`)
    }
}

console.log(myBook.daetils());