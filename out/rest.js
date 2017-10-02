"use strict";

var rest = "Hello rest parameter ES6";

document.getElementsByTagName('title')[0].innerHTML = rest;

//belajar rest parameter
//di ES6 , rest adalah suatu  argumen (misal :  fungsi) dijadikan menjadi satu
//sehingga hasil yang dikeluarkan bisa jadi array

var arr = [];

var abjad = function abjad(a, b) {
   for (var _len = arguments.length, c = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      c[_key - 2] = arguments[_key];
   }

   console.log(a);
   console.log(b);
   console.log(c);
   arr = c;
};

abjad("arief", "kahfi", 2, true, 5.4);

//contoh fungsi arrow map dan Expression bodies langsung return value
//jadi objek
//...

var haloha = arr.map(function (t, idx) {
   return { item: t, index: idx };
});

//... setelah jadi objek dijadikan dalam bentuk JSON
console.log(JSON.stringify(haloha));