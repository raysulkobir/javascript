// class Item
// {
//     static count = 52;

//     static  getCount() {
//         return Item.count;
//     }
// }

// console.log(Item.getCount())


class Item 
{
    static count = 0;

    constructor(name, quantity)
    {
        this.name = name;
        this.quantity = quantity;
        this.constructor.count;
    }

    static setCount()
    {
        return Item.count;
    }

}

let pen = new Item("Pen", 5);
let notebook = new Item("notebook", 10);



