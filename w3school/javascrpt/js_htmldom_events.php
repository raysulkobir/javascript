<!-- <script>
    function test(){
        return "hello";
    }
</script>

<h1 onclick="this.innerHTML= test()">This is a heading</h1> -->


<!-- <div onmouseover="test1(this)" onmouseout="test2(this)">This is a home page</div>


<script>
    function test1(obj){
        obj.innerHTML = "hello";
    }

    function test2(vvv){
        vvv.innerHTML = "hello number";
    }

</script> -->

<!-- <p id="colors" onmousedown="mouseDown(this)" onmouseup="mousUP(this)">this is a heading</p>
<script>
    function mouseDown(obj){
        // document.getElementById('colors').style.color='red';
        //  document.getElementsByTagName(p).style.color='red';
        obj.style.background = 'red';
        obj.innerHTML = "jjd";

    }

    function mousUP(obj){
        obj.style.background = 'lime';
        obj.innerHTML = "jjd";
        alert("are you change color");
    }

</script> -->
<!-- 
<button id="check">Check</button>
<script>
    document.getElementById("check").addEventListener('click', display);

    function display(){
        alert(0);
    }
</script> -->
<!-- 
<button id="check">Click</button>
<script>
    document.getElementById("check").addEventListener('click',function(){
        alert(0);
    });
</script> -->


<button onclick="addName()">add</button>

<script>
    function addName(){
       document.getElementById("show").innerText += '<input type="file" name="image">';
    }
</script>

<div id="show"></div>