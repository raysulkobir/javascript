<script>
    var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZtest";
    var sln = txt.length;

    console.log(sln);

    var str = "Please locate where 'locate' occurs!";
    var pos = str.search("locate");
</script>

    <hr><br>
<script>
    var str = "Apple, Banana";
    var res = str.slice(1, 13);
    console.log(res);
</script>
<hr>
<button onclick="myFunction()">Try it</button>

<p><strong>Note:</strong> The trim() method is not supported in Internet Explorer 8 and earlier versions.</p>

<script>
function myFunction() {
  var str = "     Hello World!     ";
  alert(str.trim());
}
</script>