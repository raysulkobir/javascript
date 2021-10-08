<form>
    <input  type="number" type="number1" id="number1">
    <input onkeyup="sum()" type="number" type="number2" id="number2">
</form>

<div id="show"></div>
<script>
    function sum(){
        var number1 = document.getElementById("number1").value;
        var number2 = document.getElementById("number2").value;
        var s = number1 / number2;
        if(!number2 == '' || !number2==''){
        document.getElementById("show").innerHTML = Math.round(s);

        }else{
            document.getElementById("show").innerHTML = "";
        }
         
        
    }
</script>