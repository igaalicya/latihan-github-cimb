// // cara lama
// function alphaValue (param1, param2){
//     return param1 + param2
// }

// // menggunakan arrow function
// const alphaValue = (param1, param2) => param1 + param2      // kalo satu baris berarti return
// const alphaValue = (param1, param2) => param1 == param2     // return boolean
// const alphaValue = param1 => param1                         // kalo hanya 1 parameter, gak perlu dikasih kurung


// object distracturing
let a = {
    nama: 'aku',
    asal: 'dimana ya?',
    kontak: {
        rumah: 'di rumah',
        kota: 'BSD'
    }
}

// cara biasa akses nama
// console.log(a.nama)

// cara dengan object distracturing
// let {nama, asal} = a
// console.log(nama)

// let {nama, asal, kontak} =a
// let {rumah, kota} = kontak
// console.log(rumah)

let {nama, asal, kontak : {rumah, kota}} = a
console.log(rumah)

const tampilNama = ({nama, asal}) => {
    return nama
}
tampilNama(a)


const searchProduct = str => {
    return arrItems.filter((name) => name.toLowerCase().includes(str.toLowerCase()))
}