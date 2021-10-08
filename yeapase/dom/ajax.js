// let btn = document.getElementById('btn')
// let postsUl = document.getElementById('posts')
// // console.log(posts)
// const BASE = 'https://jsonplaceholder.typicode.com/posts'
// btn.addEventListener('click',function(){
//     fetch(BASE)
//      .then(response => response.json())
//      .then(posts => {
//          posts.forEach((post,ind) => {
//              let list = listCreator(post, ind + 1)
//              postsUl.appendChild(list)
//          })
//      })
// })


// function listCreator(post,no){
//     let list = document.createElement('li')
//     list.className = 'list-group-item'
//     list.innerHTML = `${no} ${post.title}`
//     return list
// }


let form = document.getElementById('post-form')
let postsList = document.getElementById('postsList')
const URL = 'https://jsonplaceholder.typicode.com/posts'

form.addEventListener('submit', function(e){
    e.preventDefault()
    let title = this.title || undefined
    let body = this.body || undefined 
    if(title && body){
        let postObj = {
            title,
            body
        }
       fetch(URL, {
           method: 'POST',
           headers: {
               content: 'Application/JSON'
           },
           body: JSON.stringify(postObj) 
    })
    .then(post => {
        // let list = createList(post)
        // postsList.appendChild(list)
        console.log(post)
    })
    .catch(e => e.message)
    }
})

function createList(post){
    let list = document.createElement('li')
    list.className = 'list-group-item'
    list.innerHTML = `${post.id} ${post.title} ${post.body}`
    return list
}