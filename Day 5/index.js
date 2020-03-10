// database orang2
// setiap orang = nama umur pekerjaan
// jumlah orang = 5
// tampilkan nama umur dan pekerjaan setiap orang

// let arrNama = ['Rina', 'Rani', 'Rini', 'Rian', 'Rita']
// let arrUmur = [20, 21, 22, 23, 24]
// let arrPekerjaan = ['Penyanyi', 'Penyiar', 'Banker', 'Dokter', 'IT Staff']
// let arrNumberPhone = [['089'], ['081'], ['082', '089'], ['088'], ['088','087'] ]
// let numberPhone = ''

// for(let i=0; i< arrNama.length; i++){
//     numberPhone = ''
//     for(let j=0;j<arrNumberPhone[i].length;j++){
//         numberPhone += `${arrNumberPhone[i][j]} `
//     }   
//     console.log(arrNama[i], arrUmur[i], arrPekerjaan[i], numberPhone)
// }

// let multiArr = [['081', ['1234', '4321']], ['084', '08111'], ['0822']]    

// console.log(multiArr[0][1])           //akses array index ke 1 dari array index ke 


// let arrDatabase = [['Rina', 'Rani', 'Rian'], [20, 21, 22], ['Analis', 'IT staff', 'Programmer']]
// let stringDatabase = ''

// for(let i=0; i< arrDatabase.length; i++){
//     stringDatabase = ''
//     for(let j=0;j<arrDatabase[i].length;j++){
//         stringDatabase += `${arrDatabase[j][i]} `
//     }   
//     console.log(stringDatabase)
// }

// let arrDatabase = [['Rina', 23, 'Analis'], ['Rian', 21, 'IT Staff'], ['Rani', 20, 'Programmer']]
// let stringDatabase = ''

// for(let i=0; i< arrDatabase.length; i++){                 // i digunakan untuk mengkses array satu persatu (dalam array terbesar)
//     stringDatabase = ''
//     for(let j=0;j<arrDatabase[i].length;j++){            // j digunakan untuk mengakses anggota array
//         stringDatabase += `${arrDatabase[i][j]} `
//     }   
//     console.log(stringDatabase)
// }

let arrDatabase = [['Rina', 23, 'Analis', ['089', '081']], ['Rian', 21, 'IT Staff', ['089']], ['Rani', 20, 'Programmer']]
let stringDatabase = ''

// for(let i=0; i< arrDatabase.length; i++){                 // i digunakan untuk mengkses array satu persatu (dalam array terbesar)
//     stringDatabase = ''
//     for(let j=0;j<arrDatabase[i].length;j++){            // j digunakan untuk mengakses anggota array
//         // stringDatabase += `${arrDatabase[i][j]} `
//         for(let k=0;k<arrDatabase[i][j].length;k++){
//             stringDatabase += `${arrDatabase[i][j][k]}`
//         }
//     }   
//     console.log(stringDatabase)
// }


// Object Literal
let mobil = {
    warna : 'Merah',
    tahun : '2019',
    merek : 'Honda'
}

// // cara akses dot notation
// console.log(mobil.merek)                 // mengambil data dalam object

// mobil.tipe = 'Sedan'                    // kalau key belum ada nambah
// mobil.warna = 'Biru'                    // kalau key sudah ada jadi ketimpa

// console.log(mobil)

// cara akses bracket notation
// console.log(mobil['merek'])

// let inputanUser = 'warna'
// console.log(mobil[inputanUser])

// mobil['tipeBan'] = 'off road'

// console.log(mobil)

let karyawan ={
    nama : 'Seto',
    umur : 37,
    pekerjaan : 'Programmer',
    contactDetails : {
        alamat : 'GDP 9',
        nomorTelpon : ['0811', '0822']
    }
}

console.log(karyawan.contactDetails.nomorTelpon[1])

//arrData[0].nama
