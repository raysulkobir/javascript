// // let idElement = document.getElementById('yeapes')
// // // console.log(idElement)
// // let classElements = document.getElementsByClassName('list-group')
// // // console.log(classElements)
// // let tagElements = document.getElementsByTagName('li')
// // // console.log(tagElements)
// // let nameElements = document.getElementsByName('repon')
// // console.log(nameElements)
 

// //Query Selectors

// // let idElement = document.querySelector('#yeapes')
// // // console.log(idElement)
// // let classElements = document.querySelector('.list-group')
// // // console.log(classElements)
// // let tagElement = document.querySelector('li')
// // // console.log(tagElement)
// // let tagElements = document.querySelectorAll('li')
// // // console.log(tagElements)
// // let nameElements = document.querySelectorAll('[name^="repon"]')
// // console.log(nameElements)
 

// //Element Traverse 

// // let lists = document.getElementById('list')

// // let parent = lists.parentElement
// // // console.log(parent)
// // let children = lists.children
// // // console.log(children)
// // let previousElement = lists.previousElementSibling
// // // console.log(previousElement)
// // let nextsibling = lists.nextElementSibling
// // // console.log(nextsibling)

// // let firstchild = lists.firstElementChild
// // // console.log(firstchild)
// // let lastchild = lists.lastElementChild
// // // console.log(lastchild)


// //Loop With DOM

// let listItem = document.getElementsByTagName('li')

// // console.log(listItem)
// // let listItems = [...listItem]
// let listItems = Array.from(listItem) 

// listItems.forEach((element,index) => {
//     let text = element.innerHTML
//     element.innerHTML = `${index+1} ${text}`
// });


// //Create DOM Element 
// let element = document.createElement('button') 
// // element.innerHTML='I om repon button'
// // console.log(element)
// console.dir(element) 

// let li = document.createElement('li')
// li.className = 'list-group-item'
// li.innerHTML = 'Five'
// console.log(li)

// let ul = document.getElementById('list')

// ul.append(li)

// let li = createElement('li','list-group-item','Five')
// append('list',li)

// let div = createElement('div','content','lorem ipsum') 

// function append(parentId,child){
//     let parent = document.getElementById(parentId)
//     parent.append(child)
// }
// // Create a new paragraph element, and append it to the end of the document body
// var p = createElement("p",'','I om Paragraph');
// document.body.appendChild(p);

// function createElement(tagName,className,innerHTML){
//     let tag = document.createElement(tagName)
//     tag.className = className || ''
//     tag.innerHTML = innerHTML || ''
//     return tag
// }
// let list = document.getElementById('list')
// let firstchild = list.firstElementChild

// setTimeout(() =>{
//     firstchild.innerHTML = firstchild.innerHTML + '(Modified)'
//     firstchild.className = 'text-danger'
//     firstchild.style.background = 'black'
// },5000)
// let lastchild = list.lastElementChild
// console.log(list.classList)
// console.log(list.id)
// console.log(list.class)
// lastchild.setAttribute('class','alert alert-danger')
// firstchild.setAttribute('class','alert alert-success')

// let lastchild = list.lastElementChild.cloneNode(true)
// lastchild.innerHTML = 'Five'
// list.append(lastchild)


// setTimeout(() =>{
//     list.lastElementChild.remove()
// },3000)
// let div = createElement('div','content','lorem ipsum dol imsut oal adkf lorem lorem ipsum dol imsut oal adkf loremlorem ipsum dol imsut oal adkf loremlorem ipsum dol imsut oal adkf loremlorem ipsum dol imsut oal adkf lorem')

//top of the list
// list.insertAdjacentElement('beforebegin',div)

//into Ul but end of the list item
// list.insertAdjacentElement('beforeend',div)


//into UL but top of the list
// list.insertAdjacentElement('afterbegin',div)

// //after ul Element 
// list.insertAdjacentElement('afterend',div)

//Working With Style it's only working for inline style 
 



// console.log(list.style)
// list.style.color = 'rgb(234,0,255)'

let styleObj = {
    background: 'green',
    fontSize: '20px',
    color: '#ffff'
}
let list = document.getElementById('list');

[...list.children].forEach((li) =>{
    Object.assign(li.style,styleObj)
})



