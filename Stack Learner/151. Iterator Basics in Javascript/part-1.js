let arr = [1, 2, 3, 4, 5, 6, 7];


function myIterator(collection){
  let i = 1;
  return{
    next() {
      return {
        done: i > collection.length,
        value: collection[i++]
      }
    }
  }
}

let obj = myIterator(arr);
console.table(obj.next());
console.table(obj.next());
console.table(obj.next());
console.table(obj.next());