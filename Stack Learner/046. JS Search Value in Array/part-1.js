var arr = [1, 2, 3, 4, 5, 6, 7, 8];

var search_data = 30;
var isFound = false;

for(var i = 0; i<arr.length; i++){
    if(arr[i] == search_data){
        console.log('Data search Found');
        isFound = true;
    }
}

if(!isFound){
    console.log('Data search not Found');
}