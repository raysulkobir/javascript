// class Test{
//     static display(){
//       return 'hello I am static method';
//     }
// }

// console.log(Test.display());

class Test{
    constructor(){
        console.dir(Test.display());
    }
    static display() {
        return 'hello I am static methoddd';
    }
}

var t = new Test();