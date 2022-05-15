let result = (10, 10 + 20);
console.log(result);

let sum = (10, 5, 50 + 10);
console.log(sum);

// let x = 10;
// let y = (x++, x + 20);
// console.log(x, y);


// let x = 10;
// x++;
// let y = x + 1;
// console.log(x, y);


let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let s = '';
for (let i = 0, j = 1; i < board.length; i++, j++) {
  s += board[i] + ' ';
  if (j % 3 == 0) {
    console.log(s);
    s = '';
  }
}