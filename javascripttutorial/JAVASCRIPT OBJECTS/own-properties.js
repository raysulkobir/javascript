
const person = {
  firstName: "John",
  lastName: "Doe",
};


const employee = Object.create(person, {
  job: {
    value: "JS Developer",
    enumerable: true,
    },
    test: {
        value: "php, laravel",
        enumerable: false,
    }
});

console.log(person)

console.log(employee);

console.log(employee.hasOwnProperty("jobd"));
