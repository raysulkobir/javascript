<script src="jquery.min.js"></script>

<div id="test">
    
    
</div>
<p>p5</p>

<script>
    $(document).ready(function(){
        $("button").click(function(){
            alert(0);
            $("#div1").fadeIn(3000);
        })

        $("#fadeOut").click(function(){
            $("#div2").fadeOut(100);
        })
    });
</script>



<button>fadeIn</button>
<div id="fadeOut">fadeOut</div>

<div id="div1" style="width:80px;height:80px;display:none;background-color:red;">dd</div><br>
<div id="div2" style="width:80px;height:80px;background-color:red;"></div>