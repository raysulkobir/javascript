var arr = [1,9,3,6,5,55,67,8]
var obj = [
    {
        name: 'A',
        age: '20',
    },
    {
        name: 'B',
        age: '34',
    },
    {
        name: 'A',
        age: '13',
    },
    {
        name: 'A',
        age: '90',
    },
]
// console.log(arr.sort())

arr.sort(function(a,b){
    if(a > b){
        return -1
    }else if(a < b){
        return 1
    }else{
        return 0
    }
})
console.log(arr)


//Every Function returns true or false if condition true every time then it will be return true

var res1 = arr.every(function(value){
    return value % 2 == 0
})
var res2 = arr.every(function(value){
    return value > 0
})
console.log(res1)
console.log(res2)

//some function returns true or false if condition only one time is true

var res3 = arr.some(function(value){
    return value == 3
})
console.log(res3)