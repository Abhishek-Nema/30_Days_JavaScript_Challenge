
// task 8

for ( var n = 1; n<=10; n++){
    if (n===5){
        console.log("Skipping 5");
        continue;
    }
    else{
        console.log(`n: ${n}`);
    }
}


// task 9

for ( var a = 1; a<=10; a++){
    if (a===7){
        console.log("7 occured hence program terminated");
        break;
    }
    else{
        console.log(a);
    }
}
