function test1(){
    console.log("Hello World");
}
test1();


function test2(a){
    console.log(`Hello World ${a}`);
}
test2(", Nguyen Van A");


function test3(a,b){
    console.log(`Hello World ${a} ${b}`);
}
test3(", Nguyen Van A", ", Nguyen Van B");

function test4(a, b){
     return a + b;
}
let result = test4(10, 20);
console.log(result);

function test5(a, b){
    if(! a){
        console.log("a is null", a);
    }else{
        console.log("a is not null", a);
    }
}

test5(50, 10);


let add = () => {
    let sum = 0;
    for(i = 1; i<=2; i++){
        sum += i;
    }
    return sum;
}

let gTotal = 0;

let add2 = () => {
    let cart = [{"price": 10, "quantity": 2}, {"price": 20, "quantity": 3}];
    console.log(cart[0].price * cart[0].quantity);
    let sum = 0;
    for(let i = 0; i < cart.length; i++){
        sum += cart[i].price * cart[0].quantity;
        gTotal += cart[i].price * cart[0].quantity;
    }
    return sum;
}

console.log(add2());
console.log(gTotal);
