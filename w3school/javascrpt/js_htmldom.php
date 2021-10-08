<p id="show"></p>

<!-- <p id="intro">20</p>
<p id="intro">2050</p>
<p id="intro">203</p>
<p id="demo"></p>

<script>
    var data = document.getElementById("intro");
    document.getElementById("demo").innerHTML = data.innerHTML;
</script> -->


<!-- <p>Hello World!</p>

<p>The DOM is very useful.</p>
<p>This example demonstrates the <b>getElementsByTagName</b> method</p>
<hr>
<p id="demo"></p>

<script>
var x = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = x[3].innerHTML; -->
<!-- </script> -->

<!-- <p class="intro">The DOM is very useful.</p>
<p class="intro">This example demonstrates the <b>getElementsByClassName</b> method.</p>

<script>
    var x = document.getElementsByClassName("intro");
    document.getElementById("show").innerHTML = x[1].innerHTML;
</script> -->


<form id="frm1" action="">
  First name: <input type="text" name="fname" value="Donald"><br>
  Last name: <input type="text" name="lname" value="Duck"><br><br>
</form> 

<p>Click "Try it" to display the value of each element in the form.</p>

<!-- <button onclick="myFunction()">Try it</button> -->

<p id="demo"></p>

<script>
    // var data = document.forms["frm1"];
    // console.log(data[1]);

function myFunction() {
    var x = document.forms["frm1"];
    // console.log(x);
    var text = "";
    var i;
    for (i = 0; i < x.length-1 ;i++) {
        console.log(x.elements[i].value);
    }
    document.getElementById("demo").innerHTML = text;
}
</script>