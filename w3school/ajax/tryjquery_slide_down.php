 <script src="jquery.min.js"></script>

 <script>
     $(document).ready(function() {
         $("#check").click(function() {
            $("#show").slideToggle();
         })
     });
 </script>
 <h1>this is a heading</h1>
 <div id="check">
     <input type="radio" name="check">
 </div>
<?php
    if(isset($_POST['submit'])){
        echo $name = $_POST['name'];
        echo $name = $_POST['email'];
    }
?>
 <div id="show">
     <form method="post" action="">
        <table>
            <tr>
                <td>Name:</td>
                <td><input type="text" name="name"></td>
            </tr>
            <tr>
                <td>Email:</td>
                <td><input type="text" name="email"></td>
            </tr>
            <tr>
                <td>
                    <input type="submit" name="submit" value="Submit">
                </td>
            </tr>
        </table>
     </form>
 </div>

 <style>
    #show{
        display: none;
    }
 </style>