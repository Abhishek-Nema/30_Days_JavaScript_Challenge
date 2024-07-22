
// request 1
let sym = Symbol("symbol1")
let newBook = {
    title: "Journey of my life",
    author: "Soul",
    publishYear: 2024,
    [sym]: "this is a @ symbol",
    details: function () {
        console.log(`Title of a book is ${this.title} written by ${this.author}`);
    }
}

for (let key in newBook) {
    console.log(key);
}
console.log(newBook.details());
console.log(newBook[sym]);


// request 2
const library = {
    name: "Central library",
    established: 1994,
    books: [
        {
            title: "Wings of fire",
            page: 95
        }
        ,
        {
            title: "Discovery of India",
            page: 102
        },
        {
            title: "Inner Engineering",
            page: 54
        }
    ],
    details : function(){
        console.log(`This library name is ${this.name}, it was established in ${this.established}`)
        console.log("The details of the books in library are...");
        for(let item of this.books){
            console.log(`Book name : ${item.title}, Total pages : ${item.page}`);
        }
    }
}
library.details()


// request 3
let myCountry = {
    name: "India",
    states: 29,
    isIndependent: true,
    other_name: "Vishwaguru"
}

for(let items in myCountry){
    console.log(`${items} : ${myCountry[items]}`);
}

for (let keys of Object.keys(myCountry)){
    console.log(`Key: ${keys}`);
}

for (let values of Object.values(myCountry)){
    console.log(`Value: ${values}`);
}