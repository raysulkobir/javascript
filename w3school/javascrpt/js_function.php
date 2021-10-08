<script>
    // function myFunction(a,b){
    //    alert(a);
    // }

    // function myFunction(){
    //     return this;
    // }


    // var person = {
    //     name: "kamal",
    //     email: "kamal@gmail.com",




    //     fullName: function(){
    //         return this.name;
    //     },

    //     emails: function(){
    //         return this.email;
    //     }
    // }

    // console.log(person.emails());



    // var person = {
    //     firstName:"Md",
    //     lastNae:"jamal",

    //     fullName: function(){
    //         return this.firstName+ " "+this.lastName;
    //     }
    // }


    // var myObject = {
    //     firstName:"Mdddd",
    //     lastNae:"jamal",
    // }
    // // console.log(person.fullName());
    // console.log(person.fullName.call(myObject));
    // console.log(person.fullName());


    // var person = {
    //     firstName: "John",
    //     lastName: "Doe",
    //     test: "a",
    //     fullName: function() {
    //         return this.firstName + " " + this.lastName + " " + this.test;
    //     }
    // }
    // var myObject = {
    //     firstName: "Mary",
    //     lastName: "Doe",
    //     test:"I am a test", 
    // }
    // console.log(person.fullName.apply(myObject)); // Will return "Mary Doe"


    // var data = Math.max(1, 2, 3, 4, 20);
    // var data = Math.min(1, 2, 3, 4, 20);


    // function main(a, b, c){
    //     // return Math.min(a, b, c);
    //     return Math.max(a, b, c);
    // }

    // console.log(main(10, 20, 30));

    // console.table(data);


    // function test(a, b) {
    //     var sum = a + b;
    //     document.getElementById('show').innerHTML = sum;
    // }

    var a = 0;

    function test() {
        document.getElementById("show").innerHTML = a += 1
    }
</script>



<button onclick="test()">Click</button>
<div id="show">0</div>