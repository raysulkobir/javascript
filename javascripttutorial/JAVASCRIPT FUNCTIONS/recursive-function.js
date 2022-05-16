// function countDown(fromNumber) {
//     console.log(fromNumber);
// }

// countDown(3);


function countDown(fromNumber) {
    console.log(fromNumber);
    countDown(fromNumber-1);
}

countDown(3);