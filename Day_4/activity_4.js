
// task 7
console.log("Printing classic star patten")
for (var i = 0; i < 5; i++) {
    var row = "";
    for (var j = 0; j < i + 1; j++) {
        row += "* ";
    }
    console.log(row);
}


// practice - make a reverse star pattern 
console.log("Printing a reverse star pattern...")
for (var outerLoop = 0; outerLoop < 5; outerLoop++) {
    var starRow = "";
    for (var innerLoop = 5; innerLoop > outerLoop; innerLoop--) {
        starRow += "* ";
    }
    console.log(starRow);
}