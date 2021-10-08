<script>
    function validateForm() {
    // var x = document.forms["myForm"]["fname"].value;
    // var y = document.forms['myForm']['email'].value;
    var z = document.getElementById("fname").values;
    alert(z);
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }else if (y == "") {
        alert("Email must be filled out");
        return false;
    }
}
</script>

<html>

<head>
    <title>Page titel</title>
</head>

<body>
    <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
        Name: <input type="text" name="fname">
        <br>
        Email: <input type="text" name="email">
        <input type="submit" value="Submit">
    </form>
</body>

</html>