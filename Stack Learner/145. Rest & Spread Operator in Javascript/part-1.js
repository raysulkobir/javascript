function sum(...rest){
    return rest.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 5, 6, 7, 8, 9));


let a = [1, 2, 3, 4, 5];
console.log(a)
console.log(...a)


let obj = {
    a: 10,
    b: 20,
    c: 30
}

// console.log(...obj)