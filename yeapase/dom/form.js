let form = document.getElementById('form')
let isvalid = false
// console.log(form)
form.addEventListener('submit', function(e){
    e.preventDefault();
    // form.forEach(li => console.log(li)) 
    //console.log(this.elements[0])
    // console.log(this['email'])
    let formObj = {};
    [...form].forEach(el => {
        isvalid = validator(el)
        if(isvalid){
            formObj[el.name] = el.value 
           
        }else{
            el.classList.add('is-invalid')
        }
        
    })
    if(isvalid){
        console.log(formObj)
        this.reset()
    }
})


function validator(el){
    if(!el.value){
        return false
    }
    return true
}