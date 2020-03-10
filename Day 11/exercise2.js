// array dan cb
// ketika array dimasukin akan ngereturn sebuah array baru val +1

// callback function -> replika map

// const validator = (arr, cb) => {
//     let arrResult = []
//     for(let i = 0; i<arr.length; i++){
//          if(cb(arr[i])){
//              arrResult[i] = 1
//          } else{
//              arrResult[i] = 0
//          }
//     }

//     return arrResult
// }

// console.log(validator([1,2,3,4], (val) => {
//     if (val % 2 !== 0){
//         return 1
//     } else{
//         return 0
//     }
// }))

const sumArr = (arr, cb) => {
    let arrResult = []
    for(let i = 0; i<arr.length; i++){
         arrResult[i] = cb(arr[i])
    }

    return arrResult
}

console.log(sumArr([1,2,3,4], (val) => {
    return val * 2
}))


