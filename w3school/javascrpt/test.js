function t(data){
    return console.table(data);
}

function a(data){
    alert(data);
}

function j(arr, str){
    return document.getElementById("show").innerHTML = arr.join(str);
}

function rev(arr, s){
    arr.sort();
    arr.reverse();
    return document.getElementById(s).innerHTML = arr;
}

function shift(arr, s){
    arr.shift();
    return document.getElementById(s).innerHTML = arr;
}

function arrSlice(arr, s, a, b){
    return document.getElementById(s).innerHTML = arr.slice(a, b);
}