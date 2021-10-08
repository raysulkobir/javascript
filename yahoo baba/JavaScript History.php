<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="myBack()">Backe</button>
    <button onclick="myForword()">Forword</button>
</body>
</html>

<script>
    function myBack(){
        history.back();
    }

    function myForword(){
        history.forward();
    }
</script>