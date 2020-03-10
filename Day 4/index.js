let arr = ['Jeruk', 'Mangga', 'Apel', 'Leci']

// console.log(arr)
// console.log(arr.length)
// console.log(arr.length + 1)
// console.log(['Jeruk', 'Mangga', 'Apel', 'Leci'].length + 1)       //sama dengan atasnya

// let text = 'abcdefghijk    \n'

// console.log(text.slice(2, 5))         // memotong sebagian string, dari start dan end number 
//                                       // diambil index ke 2 - 4, yang ke 5 gak ikut
//                                       // index dimulai dari 0, length dimulai dari 1

// console.log(text.trim())              // menghapus white space  
// console.log(text.length)             

// console.log(text.trim().length)       // hasil dari text.trim adalah sring maka dia bisa dikenakan method string lagi

// arr = arr.push('Cherry')              // arr.push type nya number 
// console.log(arr)
// console.log(arr[1])                    //cara mengakses array menggunakan index

// arr[2] = 'Alpukat'                      // mengganti isi array berdasarkan index
// console.log(arr)

// arr[5] = 'Mangga'                      // manambah isi array tanpa method push
// console.log(arr)                       // tambah dengan index array terakhir
//                                        // cara mengetahui index dengan method arr.length
    
// arr[arr.length] = 'hello'
// console.log(arr)


//ngitung jumlah anggota array
// let arrNumbers = [3, 7, 6, 9, 5]

// panjang = arrNumbers.length
// jumlah = 0

// for (i=0; i< panjang; i++){
//     jumlah += arrNumbers[i]
// }
// console.log(jumlah)

//ngitung jumlah anggota array v.2

// arrNumbers.forEach(function (val){
//     jumlah += val
// })
// console.log(jumlah)

// for(let i of arrNumbers){
//     jumlah += i
// }
// console.log(jumlah)

// console.log(arrNumbers.reduce{(a,b) => a+b)}

// let string = 'abcdefghij'
// console.log(string.split(''))         // memecah sebuah string menjadi array berdasarkan huruf

// let string2 = 'aku anak baik'
// console.log(string2.split(' '))      // memecah berdasarkan kata dengan split spasi

let arrBaru = ['Text', 'String', 'Tulisan', 'Doraemon']

for (let i = 0; i <arrBaru.length; i++){
    if (arrBaru[i] == 'Tulisan'){
        console.log('Tulisan berada di index', i)
        break
    }
}

arrBaru.splice(arrBaru.length - 1, 1)   // menghapus elemen terakhir dari array