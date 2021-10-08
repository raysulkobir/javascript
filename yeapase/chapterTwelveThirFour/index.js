// // var rect = {
// //     width: 100,
// //     height: 30,
// //     draw: function(){
// //         console.log('I am draw function')
// //         console.log('My Width is :'+ this.width)
// //         console.log('My Height is :'+ this.height)
// //     }
// // }

// // rect.draw()

// //this keyword its refer to current object properties or method


// // function sayhi(){
// //     console.log(this)//when this keyword use without object its refer to window object
// // }

// // new sayhi() //when use new keyword that is print sayhi as object

// //when using this keyword within an object it will be working on execusion phase,that's why value change on current execusional context
// // var newrect = { 
// //     width: 10,
// //     height: 10,
// //     draw: rect.draw
// // }
// // newrect.draw()


// //Factory Pattern
// // var createRect = function(width,height){
// //     return {
// //         width: width,
// //         height: height,
// //         draw: function(){
// //             console.log('I am draw function')
// //             console.log('My Width is :'+ this.width)
// //             console.log('My Height is :'+ this.height)
// //         }
// //     }
// // }

// // var rect1 = createRect(10,10)
// // rect1.draw()
// // var rect2 = createRect(20,20)
// // rect2.draw()

// //Constructor Factory Pattern

// // var Rectangle = function(width,height){
//     // this.width = width
//     // this.height = height

//     // this.draw = function(){
//     //     console.log('my width is : '+this.width)
//     //     console.log('my width is : '+this.height)
// // //     } 

// // // }
// // // //this is called constructor pattern 
// // // var rect3 = new Rectangle(10,12)
// // // rect3.draw()


// // var str = new String('string')
// // console.log(str)

 
// //Create Constructor 

// // var Rect = new Function('width','height',`this.width = width
// // this.height = height

// // this.draw = function(){
// //     console.log('my width is : '+this.width)
// //     console.log('my width is : '+this.height)`)

// // var rect4 = new Rect(10,20)
// // rect4.draw()
// var Rect = new Function('width','height',
// `this.width = width
//  this.height = height 
//  this.draw = function(){
//      console.log('i am from draw function from function constructor')
//      console.log('my width is :'+this.width)
//      console.log('my height is :'+this.height)
//  } 
// `  
// )
// var rect5 = new Rect(10,20)
// rect5.draw() 
// //So we can call that this is constructor function we can use it  
// console.log(rect5)


// function myFunc(c,d){
//      console.log(this)
//      console.log(c+d)
//      console.log(this.a + this.a)
// }

//call,apply,bind

// myFunc.call({a:10,b:10},4,4)
// myFunc.apply({a:2,b:2},[3,3])
// var func = myFunc.bind({a:8,b:8},10,10)
// func()


//call by value vs call by refference
//pass by value vs pass by refference
// var n = 10

//call by value or call by value
// function change(n){
//     n = n + 100
//     console.log(n)
// }
// change(n)
// console.log(n)

// var obj = {
//     a: 20,
//     b: 30
// }

// //pass by refference or call by refference
// function changeFunc(obj){
//    obj.a = 100,
//    obj.b = 200
//    console.log(obj)
// }
// changeFunc(obj)

// **** Abstruction or hiding object properties

// var Rect = function(width,height){
//     this.width = width
//     this.height = height

//     var position = {
//         x: 100,
//         y: -100
//     }
//     this.draw = function(){
//         console.log('position x = :'+position.x)
//         console.log('position y = :'+position.y)
//         console.log('my width is ='+this.width)
//         console.log('position x = :'+this.height)
//     }

//    Object.defineProperty(this,'position',{
//        get: function(){
//            return position
//        },
//        set: function(value){
//            position = value
//        }
//    })
// }
// var rect7 = new Rect(10,20)
// // rect7.draw()
// // console.log(rect7.position)
// rect7.position = {
//     a: 2,
//     b: 2
// }
// console.log(rect7.position)



//Prototype 

// function Person(name){
//     this.name = name
// }
// var p1 = new Person('Md. Yeapas')
// console.log(p1)


//lets introduce to prototype descriptor 
//create a object

// var person = {
//     name: 'Md. Yeapas',
//     age: 12
// } 
// console.log(student)
// var desc = Object.getOwnPropertyDescriptor(student,'name')

// console.log(desc)
// for(var i in person){
//     console.log(i)
// }

// console.log(Object.keys(person))

// Object.defineProperty(person,'name',{
//     enumerable: false,
//     configurable: false,
//     writable: false
// })

// var desc = Object.getOwnPropertyDescriptor(person,'name')
// console.log(desc)

//Constructor prototype



// function Person(name){
//     this.name = name
// }

// var p1 = new Person('yeapes')
// Person.prototype.func = function(){}
// console.log(Person.prototype)
// console.log(p1)

// var arr = []

// Array.prototype.newtype = 12
// console.log(arr)

//Instance Member and prototype member



// function Square(width){
//     this.width = width
// }
  
// Square.prototype = {
//     toString: function(){
//         return 'width is +'+this.width//instance member using in prototype member
//     }
// }

// var sqr = new Square(10)
// console.log(sqr.toString())

//Inheritance
// function extend(Parent,Child){
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child 
// }

// function Shape(color){
//    this.color = color
// }
// Shape.prototype.common = function(){
//     console.log('I am common method')
// }  

// function Square(width,color){
//     this.width = width
//     Shape.call(this,color)
// } 
// extend(Shape,Square)
// Square.prototype.draw = { 
//     function(){
//         console.log('i am square draw')
//     }
// }
// Square.prototype.common = function(){
//     console.log('I om calling from Square')
// }
// // var shape = new Shape()
// var sqr = new Square(12,'green')

//Mixins 
function mixin(target, ...sources){
    Object.assign(target, ...sources)
}

var canWalk = {
    walk: function(){
        console.log('Walk')
    }
}
var canEat = {
    eat: function(){
        console.log('Eating..')
    }
}

function Person(name){
    this.name = name
}
mixin(Person.prototype,canEat,canWalk)
var p1 = new Person('yeapes')
