let number = [];

for(let i=1; i<5; i++){
    number.push(i);
}

function test(){
    return "hello";
}
let resutl = number.find((a)=>{
     return a == 50;
})
function filter(number, ser){
    let result = number.find(function (arrayValue, arrayIndex, arr) {
        if(arrayIndex == 3){
            return arrayValue > 3;
        }
    })
    return result;
}

function test(num=null){
    return 10*5;
}

function test2(){
    number.find(function() {
        this.test();
    }, this)

}
console.log(test2())