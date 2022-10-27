function add(a, b, c) {
    return a+b+c;
}

console.log(add(1, 46, 9))


function currying(a){
    return (b) =>{
        return (c) => {
            console.log(a+b+c)
        }
    }
}

currying(10)(5)(52);