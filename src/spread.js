
//cara penggunaan spread operator pada ES6
/*
  spread operator adalah operator yang memecah  elemen di dalam koleksi (misal: array dll)
  ataupun itu di dalam string menjadi elemen literal ataupun paramater individu dalam function
 */

let huruf = ['b','a','c']


//jika pakai operator spread (...huruf) maka dia akan memecah elemen di suatu array tersebut
let huruf2spread = ['z','x',...huruf]

//jika tanpa operator spread (...huruf) maka dia hanya menggabungnya saja
let huruf2tanpaSpread = ['z','x',huruf]


let print = (text,lengthOfArray) => {console.log(text + ' ' + lengthOfArray)}

print('panjang huruf2spread dengan spread : ',huruf2spread.length)
print('panjang huruf2tanpaSpread tanpa spread  :',huruf2tanpaSpread.length)

//console.log('panjang huruf2spread tanpa spread : ' + huruf2spread.length)
//console.log()


let validate4 = (x,y,...item) =>( ((x + y) * item.length) === 15 )
let validate5 = (...item) => (  (item.length) )

let valid = validate4(2,3,...huruf)


let tes = [...huruf]

console.log('array tes panjangnya (di assign dengan (...huruf)): ' + tes.length)

console.log('validasi1 untuk 15 : '  + valid)
console.log('validate 5 : ' + validate5(...huruf))