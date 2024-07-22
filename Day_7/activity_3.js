
// task 5
let library = {
    name: "Pandey library",
    books: {
        book1: "Physics",
        book2: "Chemistry",
        book3: "Maths",
        book4: "GK"
    }
}
console.log(library);
console.log(library.books);
console.log(Object.keys(library.books));

// task 6
console.log(`The name of library is: ${library.name}, and titles of all books are: ${Object.values(library.books).join(", ")}`);