var letters = 'abcdefghijklmnopqrstuvsxyz'.split('')

const caesarCipher = (word, num) => {
    let result = ''

     for (let i=0; i<word.length; i++){

        while(num>26){
            num -= 26
        }
        result += letters[(letters.indexOf(word.charAt(i)) + num)].toString()
     }
    return result
}
console.log(caesarCipher('abc', 28))


const plusMinus = (numArr) => {
//   let result    = 0 
//   for(i=0; i<numArr.length; i+=1){
//     if(i == 0){
//         result = numArr[i] 
//     } else if(i%2 == 0){
//         result -= numArr[i] 
//     }
//     else{
//         result += numArr[i]
//     }
//   }
//   return result

let result = numArr[0]
for(i=1; i<numArr.length; i++){
    if(i%2 == 0){
        result -= numArr[i]
    } else if(i%2 !== 0){
        result += numArr[i]
    }
}
return result
}
console.log(plusMinus([1,2,3,4]))


const isPalindrome = (str) => {
    // if(str.replace(' ','').toLowerCase() == str.replace(' ','').toLowerCase().split('').reverse().join('')){
    //     return true
    // } else{
    //     return false
    // }
    return str.replace(' ','').toLowerCase() == str.replace(' ','').toLowerCase().split('').reverse().join('')
}
console.log(isPalindrome('race Car'))
