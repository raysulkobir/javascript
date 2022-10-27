function number(n) {
    if(n == 0){
        return;
    }
    console.log(n)
    number(n - 1);
}

number(10)

 