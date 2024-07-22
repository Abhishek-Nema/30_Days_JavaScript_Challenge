
// task 8
let myBook = {
    title : "Inner Engineering",
    author: "sadhguru",
    publishedYear: 2016
    // daetils: function(){
    //     return (`Book's title is ${this.title} and it's published year was ${this.publishedYear}`)
    // }
}

for (let elm in myBook){
    console.log(`${elm} : ${myBook[elm]}`)
}


// task 9
console.log(Object.keys(myBook))
console.log(Object.values(myBook))
