const repMap = (array, cb) => {
    let result = []
    for(let i=0; i<array.length; i++){
        result.push(cb(array[i], i, array))
    }
    return result
}

console.log(repMap([1,2,3,4,5], (val, idx, array) => {
    return val
}))

const repFilter = (array, cb) => {
    let result = []
    for(let i=0; i<array.length; i++){
        if(cb(array[i], i, array)){
            result.push(cb(array[i]))
        }
    }
    return result
}

console.log(repFilter([1,2,3,4,5], (val, idx, array) => {
    if(val < 5){
        return val
    } 
}))