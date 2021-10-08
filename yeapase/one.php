<script>
function sayhi(){
    msg = "hello world";
    return function(){
        console.log(msg);
    }
}
var msg = sayhi();
msg()
</script>