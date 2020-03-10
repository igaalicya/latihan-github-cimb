function hitungKata (kata){
    let hasilObj = {}
    let spiltKata = kata.spilt(' ')

    for(let word of spiltKata){
        word = word.toLowerCase()

        if(hasilObj[word]){
            hasilObj[word] += 1
        } else{
            hasilObj[word] = 1
        }
    }

    let maxKey
    let max = 0
    for(const key in hasilObj){
        if(hasilObj[key] > max){
            max = hasilObj[key]
            maxKey = key
        }
    }

    return maxKey + ' ' + hasilObj[maxKey]
}

console.log(hitungKata('saya saya kamu kamu'))