var a = 10;
// newPrint(a);
print(a);

var newPrint = print;

newPrint(45);

function print(a){
    console.log(a)
}

print(a);


// creationa phase

// a = undefined
// newPrint = undefined
// print = ref 


// Execution phase

    // a = 100;
    // newPrint = ref 
    // print = ref 
    