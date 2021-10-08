<script>
    var txt = "";
    var numbers = [45, 4, 9, 16, 25];
    numbers.forEach(myFunction);
 

    function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}
 alert(myFunction());
</script>