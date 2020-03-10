// sort((a,b) => a-b)    sorting untuk kecil ke besar
// sort((a,b) => b-a)    sorting untuk besar ke kecil 

let mobil = {
    tahun: 2020,
    merk: 'Toyota',
    harga: 100000
}

let arr1 = [1,2,3]
let arr2 = [4,5,6]

// gabungin 2 array dengan spread
console.log([...arr1, ...arr2])
// cara push
console.log([...arr1, 17])   // arr1 tetap berisi [1,2,3]
// variabel yang mengikuti nilai arr1
let arr3 = arr1
arr1.push('hai')
console.log(arr1)
console.log(arr3)            // arr3 mengikuti isi dari arr1

// cara copy paste yang benar
let arr4 = [...arr2]
arr2.push('hehe')
console.log(arr2)
console.log(arr4)

// primitive data type
let a = 1
let b = a
a += 1
console.log(a)    // nilai a=2
console.log(b)    // nilai b=1, tidak mengikuti nilai a yang baru
// reference data type -> array, object
// nilai akan mengikuti nilai array/object yang baru karena disimpan di RAM dalam bentuk index
// how to fix : use spread ...arr

let rumah = {
    type: 'aa',
    tahun: 2000,
    warna: 'pink'
}

let rumah2 = {...rumah, blok:'H20'}

console.log(rumah)
console.log(rumah2)

