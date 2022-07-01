let person = {
  name: 'John',
    age: 30,
}

for(const key in person){
    console.log(key);
    if(person.hasOwnProperty(key)){
        console.log(person[key]);
    }else{
        console.log('not own property');
    }
}

console.log(Object.values(person));