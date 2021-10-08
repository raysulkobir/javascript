<script src="jquery.min.js"></script>

<script>
    // $(document).ready(function() {
    //     $("button").click(function() {
    //         var name = $('#name').val();
    //         alert(name);
    //     })
    // });

    function testData(){
        var name = $('#name').val();
            alert(name);
    }
</script>

<p>Name: <input type="text" id="name" value="Mickey Mouse"></p>a

<button>Show Value</button>
<button onclick="testData()">Show Value 2</button>

