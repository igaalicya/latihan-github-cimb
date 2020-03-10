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
    new Product('Mangga', 1200),
    new Product('Apel', 1000),
    new Product('Kaos', 1200),
    new Product('Jumper', 1500),
    new Product('Botol', 1700) ]

 const filterPrice = (minPrice, maxPrice) => {
        return arrItems.filter(val => val.price >= minPrice && val.price <= maxPrice)
    }

console.log(filterPrice(1200, 1500))