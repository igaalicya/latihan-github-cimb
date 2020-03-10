// function gakReturn(){                           // tidak mengembalikan apa2
//     let a, b
//     a+b
// }
// console.log(gakReturn())                        // hasilnya undefined


// function adaReturn(){
//     return 'Hello'
// }
// console.log(adaReturn())


// function tambah(a, b){
//     return a + b
// }
// console.log(1 + 2 + tambah(1, 2))


// let c;
// function ubahC(){
//     c = 3
// }
// ubahC()
// console.log(1 + 2 + c)


// function tambah1() {
//     return 3
// }
// function tambah2(a) {
//     return a
// }
// console.log(tambah1() + tambah2(3))

// function testing(){
//     return{
//         tahun: 2000,
//         nama: "Nobita",
//         kontak:{
//             rumah: "Rumah",
//             telfon: ['0812345', '0898765']
//         }
//     }
// }
// console.log(testing().kontak.telfon[1])

// let a = 2
// let b = 3
// function tambah(){
//     return a+b
// }
// console.log(tambah())

// -- sama aja --           // parameter membuat function lebih dinamis
// function tambah(a, b){
//     return a+b
// }
// console.log(tambah(3, 7))

// object literal, objectnya langsung dibuat
// let orang = {
//     nama: 'Iga',
//     tahunLahir: '2000',
//     asal: 'Jepara'
// }

// let developer = {
//     nama: 'Iga',
//     tahunLahir: '2000',
//     asal: 'Jepara',
//     specialty: 'Front end',
//     pengalaman: '4 tahun'
// }

// let artis = {
//     nama: 'Iga',
//     tahunLahir: '2000',
//     asal: 'Jepara',
//     onGoingFilm: 'Avengers',
//     jumlahFilm: 3
// }

// function cetakanOrang(nama, tahunLahir, asal){
//     return{
//         nama,
//         tahunLahir,
//         asal
//     }
// }
// function cetakanOrang('Doraemon', '100 SM', 'Jepang')


//membuat class = orang - parent, developer dan artis - child
// class Person{                                  // class harus diawali dengan huruf kapital
//     constructor(paramNama, paramTahunLahir, paramAsal){
//         this.nama = paramNama
//         this.tahunLahir = paramTahunLahir
//         this.asal = paramAsal                       // kiri constructor
//     }
// }

// class Developer extends Person{
//     // constructor(a, b, c, specialty, pengalaman){
//     //     super(a, b, c)
//     constructor(nama, tahunLahir, asal, specialty, pengalaman){
//         super(nama, tahunLahir, asal)
//         this.specialty = specialty
//         this.pengalaman = pengalaman
//     }
// }

// let a = new Person('Suneo', '20 SM', 'Jepang')
// let b = new Person('Giant', '100', 'Jepang')
// console.log(a)


// let object = {
//     nama: 'Doraemon'
// }

// console.log(object.nama.length)

// console.log('Doraemon'.length)


class Product {
    constructor(name, price, stock, qty){
        this.name = name
        this.price = price
        this.stock = stock
        this.qty = 0
        // this.exp = '2024'          // boleh langsung ditembak value
    }
}

class Clothing extends Product{
    constructor(name, price, stock, qty, size){
        super(name, price, stock, qty)
        this.size = size
    }
}

let c = new Clothing('jumper', 12000, 10, 'S')
console.log(c)

