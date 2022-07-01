let box = {
    height: 10,
    width: 20
};

let style = {
    color: 'Red',
    borderStyle: 'solid'
}

let result = Object.assign({}, box, style);
console.log(result);