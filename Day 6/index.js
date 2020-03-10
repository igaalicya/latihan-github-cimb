// function namaFunction(param){                        
//     console.log(param)
// }

// namaFunction('a')
// // method : function yang dimasukkan kedalam object
// // function alert (menampilkan parameter/ argumen yang sudah di proses)

// function namaFunction2(a, b){                        
//     console.log(a - b)
// }
// let a = 3
// let b = 5

// namaFunction2(a, b)   // hasil -2


// function namaFunction3(a, b){                        
//     console.log(a - b)
// }

// let a = 3
// let b = 5

// namaFunction3(b, a)    // hasil 2


// menggunakan hasil function menjadi object -> dengan return

// function namaFunction4(a, b){
//     return a - b
// }

// console.log(namaFunction4(1,2) + 5)
// namaFunction4(3,2)
// console.log(namaFunction4(3,2))

function namaFunction5 (a = 5, b = 3){
    let c = a + b
    return c
}
console.log(namaFunction5(4))                 // hanya parameter A yang diisi, B ya kosong. pake parameter default
console.log(namaFunction5(undefined, 2))      // hanya parameter b yang diisi, A ya kosong. pake parameter default


// CALLBACK FUNCTION (Function yang menjadi parameter function lain)


//bubble sort
let arr = [1,9,3,5,2,21,13,75]
let temp

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[j] > arr[j + 1]){
            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j + 1] = temp
        }
    }
    console.log(arr)
}


