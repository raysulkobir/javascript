<script src="jquery.min.js"></script>

<style>
    h2{
        display: none;
    }
</style>
 
<h1>this is <b>a</b> heading</h1>

<h2>this is a heading</h2>

<button onclick="test()"> Click!</button>
<input type="checkbox" id="check" >
<script>
    // function test(){
       
    //     var h = $('h2').toggle();
    //     alert(h);
    // }

    // click

    $(document).repeat(function(){
        $("#check").on('click', function(){
            alert(0);
        });
    })
</script>