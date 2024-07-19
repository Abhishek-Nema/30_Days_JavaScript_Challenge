
// task 3

function isGreater(num1, num2){
    if(num1 >num2 ){
        console.log("num 1 is greater");
    }
    else if (num1<num2){
        console.log("num 2 is greater");
    }
    else{
        console.log("both are equal");
    }
}

isGreater(27, 4);


// task 4

function concat(str1, str2){
    return (str1 + str2);
}

let res = concat("Zakir ", "Khan");
console.log(res);