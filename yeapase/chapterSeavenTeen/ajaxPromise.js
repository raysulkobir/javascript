
// // const xhr = new XMLHttpRequest()

// // xhr.open('get','https://jsonplaceholder.typicode.com/posts')


// // xhr.onreadystatechange = function(e){
// //     if(xhr.readyState == 4){
// //         if(xhr.status == 200){
// //             console.log(xhr.response)
// //         }
// //     }else{
// //         console.log(xhr.status)
// //     }
// // } 
// // xhr.send()

// function getRequest(url,callback){
//     const xhr = new XMLHttpRequest()
//     xhr.open('get',url)
//     xhr.onreadystatechange = function(e){
//         if(xhr.readyState == 4){
//             if(xhr.status == 200){
//                 let response = JSON.parse(xhr.response)
//                 callback(null,response)
//             }else{
//                 callback(xhr.status,null)
//             }
//         }
//     }
//     xhr.send()
// }

// getRequest('https://jsonplaceholder.typicode.com/users',(error,response) =>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(response)
//     }
// })
// getRequest('https://jsonplaceholder.typicode.com/posts',(error,response) =>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(response)
//     }
// })


// let p1 = new Promise((resolve,reject) =>{
//     setTimeout(resolve,2000,'One')
// })
// console.log(p1)
// p1.then(v =>{
//     console.log(v)
// }).catch(v => {
//     console.log(v)
// })

//promise as like real life promise
//say your dad give a promise for you, if you passed the exam then you will get a iPhone

//so lets create a promise with the logic


// function getPhone(isPassed){  
//     return new Promise((resolved,reject) => {
//         setTimeout(() =>{
//             if(isPassed){
//                 resolved('I have got iPhone')
//             }else{
//                 reject(new Error('You have failed'))
//             }
//         },2000)
//     })
// }

// getPhone(false)
//     .then(v => {
//         console.log(v)
//     })
//     .catch(e =>{
//         console.log(e.message)
//     })


// const BASE = 'https://jsonplaceholder.typicode.com'
// fetch(`${BASE}/user/1`)
//    .then(res => {
//        console.log(res)
//    })


// function getRequest(url){
//     return new Promise((resolved,reject) =>{
        
//     })
// }

// getRequest('https://jsonplaceholder.typicode.com/users/1')
//  .then(res =>{
//      console.log(res)
//  })
//  .catch(err =>{
//      console.log(err)
//  })

// function getRequest(url){
//     return new Promise((resolve,reject) =>{
//      const xhr = new XMLHttpRequest()
//     xhr.open('get',url)
//     xhr.onreadystatechange = function(e){
//         if(xhr.readyState == 4){
//             if(xhr.status == 200){
//                 let response = JSON.parse(xhr.response)
//                 resolve(response)
//             }else{
//                 reject(new Error('Error Occurred'))
//             }
//         }
//     }
//     xhr.send()
//     })
// }
// const BASE = 'https://jsonplaceholder.typicode.com'

// getRequest(`${BASE}/posts`)
//     .then(res =>{
//         console.log(res )
//     })
//     .catch(err =>{
//         console.log(err)
//     })



// let delay = s => new Promise(resolve => setTimeout(resolve,s*1000))

// delay(2).then(() => console.log('i am 2 seconds delay'))
// delay(3).then(() => console.log('i am 3 seconds delay'))
// delay(4).then(() => console.log('i am 4 seconds delay')) 

// let p1 = Promise.resolve('i om promise one')
// let p2 = Promise.resolve('i om promise two')
// let p3 = Promise.resolve('i om three')

// p1.then(v => console.log(v))
// p2.then(v => console.log(v))

// let pArr = [p1,p2,p3]
// Promise.all(pArr)
//     .then(v => {
//         console.log(v)
//     })

// let p1 = new Promise(resolve =>{
//     setTimeout(resolve,2000,'I om One')
// })
// let p2 = new Promise(resolve =>{
//     setTimeout(resolve,1000,'I om Two')
// })
// let p3 = new Promise(resolve =>{
//     setTimeout(resolve,3000,'I om Three')
// })

// let pRace = [p1,p2,p3]

// Promise.race(pRace)
//     .then(v =>{
//         console.log(v)
//     })

//Async Function await

// async function test(){
//     // console.log('I om reponda from async function')
// }

// console.log(test())


// let p1 = new Promise(resolve =>{
//     setTimeout(resolve, 2000,'i om yeapes')
// })

// async function test(){

//     let v = await p1
//     console.log(v)
// }
// test()


// let p2 = new Promise(resolve => {
//     setTimeout(resolve,2000)
// })

// async function fetchApi(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/users')
//     let res = await data.json()
//     let mapped = res.map(v => v.name)
//     console.log(mapped)
// }
// fetchApi()


// let promises = [Promise.resolve('I om Yeapas'),Promise.resolve('I om Repon'),Promise.resolve('I om Nayeem')]

// async function promisAll(){

//     let data = await Promise.all(promises)
//     console.log(data)
// }
// promisAll()

// async function* asyncGenerator(){
//     let i = 0
//     while(true){
//         if(i > 5) return
//         yield await Promise.resolve(i++)
//     }
// }

// ;(async function(){
//     for await (let v of asyncGenerator()){
//         console.log(v)
//     }
// })()