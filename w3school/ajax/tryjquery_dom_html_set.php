<script src="jquery.min.js"></script>

<script>
 
        function testData() {
            var name = $('#name').val("helo");
        }

        function data(){
            var name = $('#name').val("helo two hksfdghdjkslfhjfkfhdfkfhkf uojed c ejdkejojdklfdskl;");
        }
</script>

<p>Name: <input type="text" id="name" value=""></p>

<button onclick="data()">Show Value</button>
<button onclick="testData()">Show Value 2</button>