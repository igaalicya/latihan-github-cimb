let a = {
    tahun: "1234",
    nama: "asdddd",
    kata: "kontak"
}

let b = {tahun : "1234", nama: "asdddd", bulan: "Juni"}

let c = {
    nama: "addd",
    kontak: {
        email: "you@email.com",
        hp: "0999999"
    }
}

let d = {
    ...c[a.kata]                        // c mengambil string a.kata = kontak
}

let e = {
    ...c['kontak']                      // d dan e nilainya sama
}

let f = {
    ...c['nama']                        // hasilnya adddd bukan object atau array, gabisa di spread
}

class Item{
    constructor(nama, harga){
        this.nama = nama;
        this.harga = harga;
    }
}
let g = new Item ('Jeruk', 12000)

let h = {
    ...a
}

console.log(g)