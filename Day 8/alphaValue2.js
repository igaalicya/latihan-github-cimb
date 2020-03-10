// menghitung jumlah string tapi hanya posisi ganjil (index genap)

const alphaValue = (str) => {
    let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let hasil = 0

    for (let i=0; i<str.length; i++){
        if(alpArray.indexOf(str.charAt(i)) % 2 == 0){
            hasil += (alpArray.indexOf(str.charAt(i)) + 1)
        } else{
            hasil += 0
        }         
    }
    return hasil
}

console.log(alphaValue('abc'))

// cara kedua
const alphaValue = (str) => {
    let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let hasil = 0

    for (let i=0; i<str.length; i+=2){
        hasil += (alpArray.indexOf(str.charAt(i)) + 1)  
    }
    return hasil
}

console.log(alphaValue('abc'))

// cara ketiga
// const alphaValue = (str) => {
//     let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let hasil = 0

//     for (let i=0; i<str.length; i++){
//         if(i % 2 == 1){
//             continue                                        // mirip break tapi tidak berhenti
//         } else{
//             hasil += (alpArray.indexOf(str.charAt(i)) + 1)
//         }         
//     }
//     return hasil
// }

// console.log(alphaValue('abc'))
