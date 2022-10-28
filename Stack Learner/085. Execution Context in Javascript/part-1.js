// https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/#:~:text=The%20Execution%20Context%20contains%20the,and%20the%20code%20gets%20executed.



// https://www.javatpoint.com/javascript-execution-context

let x = 'Hello World!';  
function a() {  
    console.log('It is the first function');  
    function b() {  
        console.log('It is the second function');  
    }  
    b();  
}  
a();  

console.log('It is GEC');  