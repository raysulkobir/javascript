<script>
    //    var arr1 = ["red",  "green"];
    //        arr2 = ["yello", "lime"];
    //    console.log(arr2[0]);

    //   var people = [
    //        { name: "bob", roll: 283170 },
    //        { name: "john" }
    //    ];
    //    console.log(people[0]['roll']);

    //
    //    var people = [
    //        { name: "bob" },
    //        { name: "john" }
    //    ];
    //    
    //    for(var i = 0; i < people.length; i++){
    //        console.log(people[i]);
    //    }

    //    var strArray = ["S", "t", "a", "c", "k", "O", "v", "e", "r", "f", "l", "o", "w"];
    //    console.log(strArray);
    //    console.log(split(strArray));


    //    var array = [1, 2, 3, 4];
    //    array.splice(1, 2);
    //    console.log(array);

    //    array = [1, 2, 3, 4, 5];
    //    array.length = 3;
    //    console.log(array); // [1, 2]

    //    var arr = [1, 2, 3, 4];
    //    arr.length = 1;
    //    console.log(arr);

    var myArray = [2, 2, 3, 4, 99, 20];
    var maxValue = Math.max(...myArray);
//    console.log(Math.min(...myArray));
    
    for(var i = 0; i < myArray.length; i++){
        var currentValue = myArray[i];
        if(currentValue != 99){
             console.log(myArray[i]);
        }
       
    }
</script>