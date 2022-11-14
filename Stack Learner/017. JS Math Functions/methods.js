console.log(Math.abs(10-20));
console.log(10-20);

// Calculates angle of a right-angle triangle in radians
function calcAngle(adjacent, hypotenuse) {
  return Math.acos(adjacent / hypotenuse);
}
console.log(calcAngle(8, 10));
// expected output: 0.6435011087932843
console.log(calcAngle(5, 3));








console.log(Math.acosh(0.999999999999));
// expected output: NaN
console.log(Math.acosh(1));
// expected output: 0
console.log(Math.acosh(2));
// expected output: 1.3169578969248166
console.log(Math.acosh(2.5));
// expected output: 1.566799236972411



// Calculates angle of a right-angle triangle in radians
function calcAngle(opposite, hypotenuse) {
  return Math.asin(opposite / hypotenuse);
}
console.log(calcAngle(6, 10));
// expected output: 0.6435011087932844
console.log(calcAngle(5, 3));
// expected output: NaN
 




console.log(Math.asinh(1));
// expected output: 0.881373587019543
console.log(Math.asinh(0));
// expected output: 0
console.log(Math.asinh(-1));
// expected output: -0.881373587019543
console.log(Math.asinh(2));
// expected output: 1.4436354751788103




// Calculates angle of a right-angle triangle in radians
function calcAngle(opposite, adjacent) {
  return Math.atan(opposite / adjacent);
}
console.log(calcAngle(8, 10));
// expected output: 0.6747409422235527
console.log(calcAngle(5, 3));
// expected output: 1.0303768265243125




function calcAngleDegrees(x, y) {
  return Math.atan2(y, x) * 180 / Math.PI;
}
console.log(calcAngleDegrees(5, 5));
//expected output: 45
console.log(calcAngleDegrees(10, 10));
//expected output: 45
console.log(calcAngleDegrees(0, 10));
//expected output: 90


console.log(Math.atanh(-1));


console.log(Math.cbrt(-1));
// expected output: -1

console.log(Math.cbrt(1));
// expected output: 1
console.log(Math.cbrt(Infinity));
// expected output: Infinity
console.log(Math.cbrt(64));
// expected output: 4




console.log(Math.ceil(.95));
// expected output: 1
console.log(Math.ceil(4));
// expected output: 4
console.log(Math.ceil(7.004));
// expected output: 8
console.log(Math.ceil(-7.004));
// expected output: -7




// 00000000000000000000000000000001
console.log(Math.clz32(1));
// expected output: 31
// 00000000000000000000000000000100
console.log(Math.clz32(4));
// expected output: 29
// 00000000000000000000001111101000
console.log(Math.clz32(1000));
// expected output: 22




function getCircleX(radians, radius) {
  return Math.cos(radians) * radius;
}

console.log(getCircleX(1, 10));
// expected output: 5.403023058681398
console.log(getCircleX(2, 10));
// expected output: -4.161468365471424
console.log(getCircleX(Math.PI, 10));
// expected output: -10



console.log(Math.cosh(0));
// expected output: 1



console.log(Math.cosh(1));
// expected output: 1.543080634815244 (approximately)
console.log(Math.cosh(-1));
// expected output: 1.543080634815244 (approximately)
console.log(Math.cosh(2));
// expected output: 3.7621956910836314



console.log(Math.exp(0));
// expected output: 1
console.log(Math.exp(1));
// expected output: 2.718281828459 (approximately)
console.log(Math.exp(-1));
// expected output: 0.36787944117144233
console.log(Math.exp(2));
// expected output: 7.38905609893065




console.log(Math.expm1(0));
// expected output: 0
console.log(Math.expm1(1));
// expected output: 1.718281828459045
console.log(Math.expm1(-1));
// expected output: -0.6321205588285577
console.log(Math.expm1(2));
// expected output: 6.38905609893065



console.log(Math.floor(5.95));
// expected output: 5
console.log(Math.floor(5.05));
// expected output: 5
console.log(Math.floor(5));
// expected output: 5
console.log(Math.floor(-5.05));
// expected output: -6



console.log(Math.fround(5.5));
// expected output: 5.5
console.log(Math.fround(5.05));
// expected output: 5.050000190734863
console.log(Math.fround(5));
// expected output: 5
console.log(Math.fround(-5.05));
// expected output: -5.050000190734863



console.log(Math.hypot(3, 4));
// expected output: 5
console.log(Math.hypot(5, 12));
// expected output: 13
console.log(Math.hypot(3, 4, 5));
// expected output: 7.0710678118654755
console.log(Math.hypot(-5));





console.log(Math.imul(3, 5));
// expected output: 12
console.log(Math.imul(-5, 12));
// expected output: -60
console.log(Math.imul(0xffffffff, 5));
// expected output: -5
console.log(Math.imul(0xfffffffe, 5));
// expected output: -10



function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
// 2 x 2 x 2 = 8
console.log(getBaseLog(2, 8));
// expected output: 3
// 5 x 5 x 5 x 5 = 625
console.log(getBaseLog(5, 625));




console.log(Math.log10(100000));
// expected output: 5
console.log(Math.log10(2));
// expected output: 0.3010299956639812
console.log(Math.log10(1));
// expected output: 0
console.log(Math.log10(0));
// expected output: -Infinity



console.log(Math.log1p(1));
// expected output: 0.6931471805599453
console.log(Math.log1p(0));
// expected output: 0
console.log(Math.log1p(-1));
// expected output: -Infinity
console.log(Math.log1p(-2));
// expected output: NaN



console.log(Math.log2(3));
// expected output: 1.584962500721156
console.log(Math.log2(2));
// expected output: 1
console.log(Math.log2(1));
// expected output: 0
console.log(Math.log2(0));
// expected output: -Infinity




console.log(Math.max(1, 3, 2));
// expected output: 3
console.log(Math.max(-1, -3, -2));
// expected output: -1
const array1 = [1, 3, 2];
console.log(Math.max(...array1));
// expected output: 3



console.log(Math.min(2, 3, 1));
// expected output: 1
console.log(Math.min(-2, -3, -1));
// expected output: -3
const array2 = [2, 3, 1];
console.log(Math.min(...array2));
// expected output: 1



console.log(Math.pow(7, 3));
// expected output: 343
console.log(Math.pow(4, 0.5));
// expected output: 2
console.log(Math.pow(7, -2));
// expected output: 0.02040816326530612
//                  (1/49)
console.log(Math.pow(-7, 0.5));
// expected output: NaN




function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// expected output: 0, 1 or 2
console.log(getRandomInt(1));
// expected output: 0
console.log(Math.random());
// expected output: a number from 0 to <1



console.log(Math.round(0.9));
// expected output: 1
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// expected output: 6 6 5
console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// expected output: -5 -5 -6




console.log(Math.sign(3));
// expected output: 1
console.log(Math.sign(-3));
// expected output: -1
console.log(Math.sign(0));
// expected output: 0
console.log(Math.sign('-3'));
// expected output: -1




function getCircleY(radians, radius) {
  return Math.sin(radians) * radius;
}
console.log(getCircleY(1, 10));
// expected output: 8.414709848078965
console.log(getCircleY(2, 10));
// expected output: 9.092974268256818
console.log(getCircleY(Math.PI, 10));
// expected output: 1.2246467991473533e-15



console.log(Math.sinh(0));
// expected output: 0
console.log(Math.sinh(1));
// expected output: 1.1752011936438014
console.log(Math.sinh(-1));
// expected output: -1.1752011936438014
console.log(Math.sinh(2));
// expected output: 3.626860407847019



function calcHypotenuse(a, b) {
  return (Math.sqrt((a * a) + (b * b)));
}

console.log(calcHypotenuse(3, 4));
// expected output: 5
console.log(calcHypotenuse(5, 12));
// expected output: 13
console.log(calcHypotenuse(0, 0));
// expected output: 0





function getTanFromDegrees(degrees) {
  return Math.tan(degrees * Math.PI / 180);
}

console.log(getTanFromDegrees(0));
// expected output: 0
console.log(getTanFromDegrees(45));
// expected output: 0.9999999999999999
console.log(getTanFromDegrees(90));
// expected output: 16331239353195370



console.log(Math.tanh(-1));
// expected output: -0.7615941559557649
console.log(Math.tanh(0));
// expected output: 0
console.log(Math.tanh(Infinity));
// expected output: 1
console.log(Math.tanh(1));
// expected output: 0.7615941559557649




console.log(Math.trunc(13.37));
// expected output: 13
console.log(Math.trunc(42.84));
// expected output: 42
console.log(Math.trunc(0.123));
// expected output: 0
console.log(Math.trunc(-0.123));
// expected output: -0