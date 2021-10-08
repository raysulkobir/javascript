let btn = document.getElementById('btn')
// console.log(btn)
let list = document.getElementById('list')
// console.log(list)
// btn.onclick = function(e){
//     // console.log(e)
//     let lastChild = list.lastElementChild.cloneNode(true)
//     lastChild.innerHTML = 'New List'
//     list.appendChild(lastChild)
// }

// btn.addEventListener('click',function(e){
//     let lastChild = list.lastElementChild.cloneNode(true)
//     lastChild.innerHTML = 'New List'
//     list.appendChild(lastChild)
// });
// btn.addEventListener('mousemove',function(e){
//     console.log(e)
// })
// console.dir(document)


//Event Delegation Problem 
// [...list.children].forEach((li) =>{
//     li.onclick = function(e){
//         // console.log(e.target)
//         e.target.remove()
//     }
// })
 

//Event Delegation Problem Solved
//we use contains() it'll be return true or false
//we set target on parent 

// list.addEventListener('click',function(e){
//     // console.log(this.contains(e.target))
//     if(this.contains(e.target)){
//         e.target.remove()
//     }
// })



//***||=====    DOM-Working With Input Box     =====||***/

// let name = document.getElementById('name')
// console.dir(name)

// name.addEventListener('keypress',function(e){
//     // console.log(e)
//      if(e.key == 'Enter'){
//          document.getElementById('showName').innerHTML = e.target.value
//      }
// })

// let select = document.getElementById('select')
// console.log(select)
// select.addEventListener('input', function(e){
//     // console.log(e.target.value)
//     alert(`Your target value is ${e.target.value}`)
// })

let skillChecked = document.getElementsByName('skills');
let skills = [];
 

let parent = document.getElementById('showSkills');
[...skillChecked].forEach((skill) => {
    // console.log(skill)
    skill.addEventListener('change',function(e){
        // console.log(e.target.checked)
        if(e.target.checked){
            skills.push(e.target.value)
            outputSkills(parent,skills)
            
        }else{
            let ind = skills.indexOf(e.target.value)
            skills.splice(ind,1)
            outputSkills(parent,skills)
        }
    })
})

function outputSkills(parent,skills){
    let result = '';
    // console.log(skills)
    skills.forEach((value,index) =>{
        result += `(${index+1}) ${value} `
    })
    parent.innerHTML = result
  } 



  let ul = document.getElementById('list')
//   console.log(ul)
ul.addEventListener('dblclick',function(e){ 
    // console.log(e.target.innerText)
    if(this.contains(e.target)){
        let innerText = e.target.innerText
        e.target.innerHTML = '' 
        let inputBox = createInput(innerText)
        e.target.appendChild(inputBox)
        inputBox.addEventListener('keypress',function(event){
            if(event.key == 'Enter'){
                let value = event.target.value
                e.target.innerHTML = value
            }
            
        })
    }

})
 
function createInput(value){
    let input = document.createElement('input')
    input.type = 'text'
    input.value = value
    input.className = 'form-control'
    return input
}