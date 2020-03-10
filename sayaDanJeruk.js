function dominantWord(sentence) {
    let arrSentence = sentence.split(' ')

    let arrWord = []
    let arrMax = []
    let max

    for ( var i = 0; i < arrSentence.length; i++ ) {
        if (arrWord.includes(arrSentence[i])) {
            
        } else {
            arrWord.push(arrSentence[i])
            arrMax.push(0)
        }
        
        for(let j = 0; j<arrWord.length; j++){
        if ( arrSentence[i] == arrWord[j] ) {
            
            let index = arrWord.indexOf(arrSentence[i])
            arrMax[index] += 1
        }
        max = arrMax.indexOf(Math.max(...arrMax))
    }
    }
    return arrWord[max]
}

console.log(dominantWord("saya suka jeruk karena saya dan jeruk suka jeruk saya"))