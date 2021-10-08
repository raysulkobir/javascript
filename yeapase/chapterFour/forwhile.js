for(; ;){
    var rand = Math.floor(Math.random() * 10 + 1)
    if(rand == 9){
        console.log("Winner Winner Chicken Winner")
        break
    }else{
        console.log("You Have Got" + rand)
    }
}