<div id="show"></div>
    <button onclick="myFunction()">Slice</button>
<script>
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("show").innerHTML = fruits;

    function myFunction(arr){
        if(!empty(arr)){
            arr.splice(3, 0, "test1", "test2");
        document.getElementById("show").innerHTML = arr;
        }else{
            a("array in empty !");
        }
    }
</script>

<div id="demo"></div>

<script src="test.js"></script>
