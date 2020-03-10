// return array berdasarkan string masukan
// search('ap') -> apple, apel, bape
// filter produk price berdasarkan harga min dan harga maks filterPrice(2000, 6000)


class Product {
    constructor(name, price, stock){
        this.name = name
        this.price = price    
    }
}

let arrItems = [
    new Product('Mangga', 12000),
    new Product('Apel', 10000),
    new Product('Apple', 12000),
    new Product('Kaos', 10000),
    new Product('Advan', 120000) ]

    const searchProduct = str => {
        return arrItems.filter((value) => value.name.toLowerCase().includes(str.toLowerCase()))

        // bisa juga ditulis
        // hasil = arrItems.filter((value) => value.name.toLowerCase().includes(str.toLowerCase()))
        // return hasil

        // cara penulisan lain
        // const fnFuction = (value) => value.name.toLowerCase().includes(str.toLowerCase())
        // hasil = arrItems.filter(fnFuction)
        // return hasil

    }

console.log(searchProduct('ap'));



// value = call back function yang hasilnya object
// includes = boolean
// filter = Parameternya berupa function (call back function) -> return berupa array