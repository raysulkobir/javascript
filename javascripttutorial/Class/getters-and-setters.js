// class Person {
//   constructor(name) {
//     this.setName(name);
//   }
    
//   getName() {
//     return this.name;
//   }
    
//   setName(newName) {
//     newName = newName.trim();
//     if (newName === "") {
//       throw "The name cannot be empty";
//     }
//     this.name = newName;
//   }
// }

// let person = new Person("Md.Raysul kobir");
// console.log(person); // Jane Doe

// person.setName("Jane Smith");
// console.log(person.getName()); // Jane Smith


// Using getter in an object literal

let meeting = {
  attendees: [],
  add(attendee) {
    console.log(`${attendee} joined the meeting.`);
    this.attendees.push(attendee);
    return this;
  },
  get latest() {
    let count = this.attendees.length;
    return count == 0 ? undefined : this.attendees[count - 1];
  },
};

meeting.add("John").add("Jane").add("Peter");
console.log(`The latest attendee is ${meeting.latest}.`);
