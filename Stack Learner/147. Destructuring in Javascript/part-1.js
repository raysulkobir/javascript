let person = {
  name: 'Md.Raysul kobir',
  email: 'raysul@gmail.com',
  address: {
    city: 'Dhaka',
    country: 'Bangladesh'
  }
}

let { name, email, address } = person;


console.log(name);
console.log(email);

console.log(address.city)


let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let [first, second] = arr;
console.log(second);