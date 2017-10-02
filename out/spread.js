'use strict';

//cara penggunaan spread operator pada ES6
/*
  spread operator adalah operator yang memecah  elemen di dalam koleksi (misal: array dll)
  ataupun itu di dalam string menjadi elemen literal ataupun paramater individu dalam function
 */

var huruf = ['b', 'a', 'c'];

//jika pakai operator spread (...huruf) maka dia akan memecah elemen di suatu array tersebut
var huruf2spread = ['z', 'x'].concat(huruf);

//jika tanpa operator spread (...huruf) maka dia hanya menggabungnya saja
var huruf2tanpaSpread = ['z', 'x', huruf];

var print = function print(text, lengthOfArray) {
  console.log(text + ' ' + lengthOfArray);
};

print('panjang huruf2spread dengan spread : ', huruf2spread.length);
print('panjang huruf2tanpaSpread tanpa spread  :', huruf2tanpaSpread.length);

//console.log('panjang huruf2spread tanpa spread : ' + huruf2spread.length)
//console.log()


var validate4 = function validate4(x, y) {
  return (x + y) * (arguments.length <= 2 ? 0 : arguments.length - 2) === 15;
};
var validate5 = function validate5() {
  return arguments.length;
};

var valid = validate4.apply(undefined, [2, 3].concat(huruf));

var tes = [].concat(huruf);

console.log('array tes panjangnya (di assign dengan (...huruf)): ' + tes.length);

console.log('validasi1 untuk 15 : ' + valid);
console.log('validate 5 : ' + validate5.apply(undefined, huruf));