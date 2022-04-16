let name = "Md.Raysul kobir"
console.log(name.length)   // length of string
console.log(name.toUpperCase())  // string to upper case
console.log(name.toLowerCase())  // string to lower case
console.log(name.charAt(0))  // character at index 0
console.log(name.charAt(name.length-1))  // character at last index
console.log(name.indexOf("k"))  // index of character
console.log(name.indexOf("k",3))  // index of character from index 3
console.log(name.substring(0,3))  // substring from index 0 to 3
console.log(name.substring(3,name.length))  // substring from index 3 to last index
console.log(name.slice(0,3))  // slice from index 0 to 3
console.log(name.slice(3,name.length))  // slice from index 3 to last index
console.log(name.replace("k","K"))  // replace character
console.log(name.includes("k"))  // check if string contains character
console.log(name.includes("k",3))  // check if string contains character from index 3
console.log(name.trim())  // trim white space
console.log(name.split(" "))  // split string into array
console.log(name.split(" ").length)  // length of array
console.log(name.split(" ")[0])  // first element of array
console.log(name.split(" ")[name.split(" ").length-1])  // last element of array
console.log(name.split(" ").join("-"))  // join array into string

let w = "hello"
let x = "world"
console.log(w.concat(x))  // concat two strings
console.log(w.concat(" ",x))  // concat two strings with space

let my = "Md.Raysul kobir";
let massage = `My Name is ${my}`;
console.log(massage)

let str = "I\ 'm a student!";
console.log(str)


let status = false;
let temp = status.toString();
console.log(temp)
console.log(Boolean(temp))

let result = 'a' < 'b';
console.log(result)

let name1 = "Rubel khan";
console.log("My name is " + name1) 


let className  = "btn btn-primary";
    className += "btn btn-danger";
    className += "btn btn-success";
    className += "btn btn-warning";

    console.log(className)



