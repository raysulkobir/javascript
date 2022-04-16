let person1 = {
    firstName: "Md.Raysul",
    secedeName: "kobir",
    age: "22",
    getFullName(){
        // return this.firstName + " " + this.secedeName;
        return "hello";
    }
}

console.log(person1.getFullName());

const createPerson = (Fname, lName) =>{
    return {
        firstName: Fname,
        lastName: lName,
        age: "22",
        getFullName(){
            return this.firstName + " " + this.lastName;
        }
    }
}

let obj = createPerson("Shahid", "Khan");

console.log(obj.getFullName());
console.log(obj);


const createPerson1 = (FName, lName) =>{
    return {
        firstName: FName,
        lastName: lName,
        age: "22",
    }
}

let ojb2 = createPerson1("Shahid", "Khan");
console.log(ojb2.firstName);

// The Object.create() method

// var personActions = {
//   getFullName() {
//     return this.firstName + ' ' + this.lastName;
//   },
// };

// function createPerson(firstName, lastName) {
//   let person = Object.create(personActions);
//   person.firstName = firstName;
//   person.lastName = lastName;
//   return person;
// }

let obj3 = createPerson('John', 'Doe');
console.log(obj3.personActions);
