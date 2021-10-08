<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>blind demo</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
  <style>
  #toggle {
    width: 100px;
    height: 100px;
    background: #ccc;
  }
  </style>
  <script src="js/jquery-1.12.4.js"></script>
  <script src="js/jquery-ui.js"></script>
</head>
<body>
 
<p>Click anywhere to toggle the box.</p>
<div id="toggle">dfdfsdf</div>
 
<script>
$( document ).click(function() {
  $( "#toggle" ).toggle( "blind" );
});
</script>
 
</body>
</html>