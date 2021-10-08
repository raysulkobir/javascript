<div id="demo"></div>

<script>
    // var data = new Date();

    // var msec = Date.parse("March 21, 2012");
    // var d = new Date(msec);

    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById("demo").innerHTML = months[d.getMonth()];
    // alert(months);
</script> 

