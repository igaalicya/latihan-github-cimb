// 1. Function utk hapus huruf vocal
// 2. Function utk sort array string (A-Z dan Z-A)
// 3. Function utk sort array integer (0-9 dan 9-0)
// 4. Function display angka terbesar dalam array. (Gak boleh pake Math.max())
// 5. Function ngefilter string (hanya bisa integer). (Output array isinya hanya bisa number)
// 6. Function untuk hapus huruf awal dan akhir saja 

// 1
let kata = 'abc lima dasar'
hapus = kata.replace(/[aeiou]/gi, '');
console.log(hapus)


// 2
let arrString = ['nama', 'saya', 'Iga', 'Alicya']
console.log(arrString.sort())
console.log(arrString.reverse())


// 3
let arrInteger = [1, 7, 5, 4, 30]
// console.log(arrInteger.sort())
// console.log(arrInteger.reverse())
console.log(arrInteger.sort(function(a,b){
    return a-b
}))

// 4
let angka1 = 80
let angka2 = 30
let angka3 = 12

if(angka1>angka2 && angka1>angka3){
    console.log('Nilai maksimalnya adalah ' + angka1)
} else if(angka2>angka3 && angka2>angka1){
    console.log('Nilai maksimalnya adalah ' + angka2)
} else if(angka3>angka1 && angka3>angka2){
    console.log('Nilai maksimalnya adalah ' + angka3)
}


// 5
let array = [1, 'a', 4, 'b', 2, 7]
array = array.filter(item => typeof item !== "string")
console.log(array)


// 6
let arrStrings = "Programmer"
let result = arrStrings.substring(1, arrStrings.length-1)
console.log(result)
