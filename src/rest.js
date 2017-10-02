let rest = "Hello rest parameter ES6"

document.getElementsByTagName('title')[0].innerHTML = rest

//belajar rest parameter
//di ES6 , rest adalah suatu  argumen (misal :  fungsi) dijadikan menjadi satu
//sehingga hasil yang dikeluarkan bisa jadi array

let arr  = []



let abjad = (a,b,...c) =>{
   console.log(a)
   console.log(b)
   console.log(c)
   arr = c
};

abjad("arief","kahfi",2,true,5.4)



//contoh fungsi arrow map dan Expression bodies langsung return value
//jadi objek
//...

let haloha = arr.map( (t,idx)=>({item:t,index:idx}) )


//... setelah jadi objek dijadikan dalam bentuk JSON
console.log(JSON.stringify(haloha))



