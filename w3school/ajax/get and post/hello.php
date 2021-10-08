<script src="jquery.min.js"></script>



<script>
    function sumbit() {
        var name = $("#name").val();
        var email = $("#email").val();

        // $.post("test.php", function(name, status) {
        //     // alert("Data: " + data + "\nStatus: " + status);
        // });

   
    $.ajax({url: "text.php", success: function(result){
        $("#div1").html(result);
    }});
    }
</script>

<form method="post">
    <table>
        <tr>
            <td>Name:</td>
            <td><input type="text" id="name"></td>
        </tr>
        <tr>
            <td>Email:</td>
            <td><input type="text" id="email"></td>
        </tr>
        <tr>
            <td></td>
            <td><button onclick="sumbit()">add</button></td>
        </tr>
    </table>
</form>