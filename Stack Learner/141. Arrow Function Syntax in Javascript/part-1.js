// function add(a, b){
//     console.log(a+b);
// }

// add(10, 2)



// let add = (a, b) =>{
//     console.log(a+b)
// }
// add(10, 20)

// let sum = (a, b) => a+b;
// console.log(sum(10, 50))


// function testMe(){
//     this.name = 'kamal';
//     console.log(this.name)
// }

// testMe();


// let testMe = () =>{
//     this.name = 'kamal';
//     console.log(this.name)
// }

// testMe();

// let obj = {
//     name: 'Md.Raysul',
//     print: function(){
//         setTimeout(()=>{
//              alert(this.name)
//         }, 100)
//     }
// }

// obj.print()


let obj = {
    name: 'Md.Raysul',
    print: function(){
         setTimeout(()=>{
            console.log(this.name);
         }, 100)
    }
}

obj.print()