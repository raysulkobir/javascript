var list = [1,2,5,7,8] 
for(var i = 0; i < (list.length / 2); i++){
    var temp = list[i]
    console.log(temp)
    list[i] = list[list.length - 1 - i]
    console.log(list[i])
    list[list.length - 1 - i] = temp
}
console.log(list);