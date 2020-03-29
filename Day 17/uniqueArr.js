const uniqueArray = (arr1, arr2) => {
    let arr = arr1.concat(arr2)
    let arrResult = []
    for(let i=0; i<arr.length; i++){
        if(arrResult.includes(arr[i])){

        } else{
            arrResult.push(arr[i])
        }
    }
    return arrResult
}

console.log(uniqueArray([1,2,3,4], [1,3,8,9]))