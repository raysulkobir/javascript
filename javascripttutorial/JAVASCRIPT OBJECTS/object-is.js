let amount = +0,
    volume = -0;


console.log(amount === volume);
console.log(Object.is(amount, volume));
    
let a = 0;
let b = -0;



console.log(Object.is(a, b));

if (a == b) {
    console.log(true)
} else {
    console.log(false)
}