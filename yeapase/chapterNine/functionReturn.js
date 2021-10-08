
// function college(cname) {
//     function university(uname) {
//         return "Your College Name is " + cname + "And University is " + uname

//     }
//     return university
// }

// var yeapes = college(" Lakshimpur Polytechnic Institute ")
// console.log(yeapes(" Bangladesh University "))


function base(n) {
  return  function (pow) {
        result = 1
        for(i = 0; i < n; i++){
            result *= pow
        }
    return result

    }
}


var bas3 = base(10)
console.log(bas3(2))