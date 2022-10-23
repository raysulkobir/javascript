var x = 10;

function add(){
    var x = 20;
    console.log(x);
    function y(){
        console.log(x)
    }
    y(); 
}

add();