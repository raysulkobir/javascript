<script src="jquery.min.js"></script>

<div id="test">
    <p>p2</p>
    <p>p3</p>
    <p>p4</p>
    
</div>
<p>p5</p>

<script>
    $(document).ready(function(){
        $("#test p").click(function(){
            $(this).hide();
        });

        
    });
</script>