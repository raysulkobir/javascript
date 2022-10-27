function main(msg) {
    function childe(name) {
        return `My name is ${name}. Hi ${msg}`
    }

    return childe;
}

var result = main("hello f")
console.log(result('Md.raysul'))