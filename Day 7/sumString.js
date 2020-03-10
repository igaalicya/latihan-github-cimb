arr = 'abcdefghijklmnopqrstuvwxyz'.split('')

function sumString(input){
    let result = 0
    let splitString = input.split('')
    for(i=0; i<arr.length; i++){
        result += arr.indexOf(splitString[i]) + 1
    }
    return result
}

console.log(sumString('abc'))
// console.log(sumString(arrTest))


// cara lain
const alphaValue = (str) => {
    // str = str.split('')
    let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let hasil = 0

    for (let i=0; i<str.length; i++){
        hasil += (alpArray.indexOf(str.charAt(i)) + 1) 
    }
    return hasil
}

console.log(alphaValue('abc'))