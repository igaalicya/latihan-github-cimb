const alphaValue = (str) => {
    // str = str.split('')
    let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let hasil = ''

    for (let i=0; i<str.length; i++){
        hasil += (alpArray.indexOf(str.charAt(i)) + 1).toString()
    }
    return hasil
}

console.log(alphaValue('abc'))