//something abstract from the user also user define who is done user

function add(a,b,cb){
    var c= a+b
    var d = a-b

    var x = cb(c,d)
    return x
}
var sub = add(3,2,function(c,d){
    return c+d
})
console.log(sub)
