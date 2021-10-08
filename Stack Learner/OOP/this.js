var rect = {
    w: 40,
    h: 30,
    drow: function(){
        console.log(this.w);
    }
}

// rect.drow();

function test(){
    console.log(this.rect.w);
}

test()