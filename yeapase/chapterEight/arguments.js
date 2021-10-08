
// function add(a,b,c){
//     console.log(arguments)
//     for(i = 0; i < arguments.length; i++){
//         console.log(arguments[i])
//     }
// }

// add(1,2,3)
// add(1,2,3)
// add(1,2,3)


function addAll(){
    sum = 0
    for(i = 0; i < arguments.length; i++){
        sum +=arguments[i]
    }
    console.log(sum)
}

addAll(12,22,22,22)