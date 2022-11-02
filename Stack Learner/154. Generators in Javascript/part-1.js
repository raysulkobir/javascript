let obj = {
  start: 1,
  end: 5,
  // [Symbol.iterator]: function () {
  //   let currentValue = this.start;
  //   self = this;
  //   return {
  //     next() {
  //       return {
  //         done: currentValue > self.end,
  //         value: currentValue++,
  //       };
  //     },
  //   };
  // },

  [Symbol.iterator]: function * (){
    let currentValue = this.start

    while(currentValue < this.end){
      yield currentValue++
    }
  }
};

for (let v of obj) {
  console.log(v);
}

//  const [first, ...rest] = new Range(1, 10);
//  console.log(rest);
