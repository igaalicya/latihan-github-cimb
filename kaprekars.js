const kaprekars = (angka) => { 
    let counter = 1
    let hasil = ''
    while(angka !== 6174){
        angka = angka.toString().split('')
            
        let angkaMin = angka.sort().join('')
        let angkaMax = angka.sort().reverse().join('')
        angka = angkaMax - angkaMin
        hasil += `iterasi ke ${counter} \n ${angkaMax} - ${angkaMin} = ${angka}\n`
        counter++
    }
    
    return hasil
}

console.log(kaprekars(9831))