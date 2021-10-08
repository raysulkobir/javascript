// var person = {
//     name: 'Md.Raysul kobir',
//     age: 20,
//     fulPerson: function() {
//         return this.name+' Age:' + this.age;
//     }
// }

// console.log(person.fulPerson());

// exam 2

//  var fullAddress = {
//     adds: function(){
//        return this.thaka;
//     }
//  }
 
// var address = {
//     thaka: 'Dewangonj',
//     district: 'Jamalpur'
// }

// console.log(fullAddress.adds.call(address));
// console.log(fullAddress.adds.apply(address));

// exam 3

// var person = {
//     name: 'kamal',

//     per: function() {
//         // console.log(this)
//         setTimeout(function(){
//             console.log(this.name);
//         }.bind(this), 2000)
        
//     }
// }
// console.log(person.per())

function name(call) {
    call();
}
debugger;
var person = {
    fullName: function() {
        return 'test'=
    }
}

var n = name(person.fullName);
var n = name(person.fullName.bind(person));
console.log(person.fullName());
var n = name(person.fullName.bind(person));
 
