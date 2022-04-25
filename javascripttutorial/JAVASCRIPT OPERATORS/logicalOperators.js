//! 1) The Logical NOT operator (!)

let eligible  = false,
    required  = true;

    console.log(eligible);

let a;
console.log(!a);

let b = null;
console.log(!b);

let c = 0;
console.log(!c);

let d = NaN;
console.log(!d);

let e ={"id":1, "name":"John"};
console.log(!e);

let f = "";
console.log(!f);
if(!f){
    console.log("f is empty");
}else{
    console.log("f is not empty");
}


// Double-negation (!!)
let counter = "fd";
console.log(!!counter);

let g = ""
console.log(!!g);

// The Logical AND operator (&&)
