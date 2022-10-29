let person = {
    name: 'Md.Rayusl kobir',
    age: 20,

    personalInfo: function(){
        return this.name;
    }
 
}

let data = person.personalInfo();
console.log(data);