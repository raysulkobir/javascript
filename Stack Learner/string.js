
// var data = 'hello \'world\'';
// var data = 'hello \nworld';

// console.log(data);

// var a = 'HellO';
// var b = 'Hello';

// var c = '005';
// var d = 0

// console.log(c == d);


var data = 'hell world';

var len = 0;
// while(true){
//     var check = data.charAt(len);
//     if(check == ''){
//         break;
//     }else{
//         len++;
//     }

// }

while(true){
    var checkLen = data.charAt(len);
    if (checkLen == ''){
        break;
    }else{
        len++;
    }
}

console.log(data.length)