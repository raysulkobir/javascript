
<html>

<head>
    <title id="demo">DOM Tutorial</title>
</head>

<body>
    <p id="demo">demo1</p>
    <p id="demo">demo2</p>
    <p id="demo">demo3</p>
    <h1>DOM Lesson one</h1>
    <p>Hello world!</p>
</body>

</html>

<button onclick="myFunction()">Try it</button>
<script>
    // var myTitle = document.getElementById("demo").innerHTML;
    // var myTitle = document.getElementById("demo").firstChild.nodeValue;
    // var myTitle = document.getElementById("demo").childNodes[0].nodeValue;
    // console.log(myTitle);

    var data = document.getElementsByTagName("p");
    for (i = 0; i < data.length; i++) {
        data[i].style.color = "red";
    }
</script>

<div id="show"></div>