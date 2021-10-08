<script>
    // var fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.sort(); // First sort the elements of fruits
    // fruits.reverse(); // Then reverse the order of the elements
    // alert(fruits);


    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b) {
        return 0.5 - Math.random()
    });

    alert(sort());
</script>