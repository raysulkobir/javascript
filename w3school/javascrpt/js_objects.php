<script>
    var color = {
        R: "red",
        G: "green",
        Y: "yello"
    }
    console.log(color.R);
</script>
<hr><br>

<script>
    var person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
    data = person.fullName();
    console.log(data);
</script>