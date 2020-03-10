arr = [5, 7, 8, 13]

function median (arr){
    if (arr.length % 2 == 0){
        med = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
    } else{
        med = arr[(arr.length - 1) / 2]
    }
    return med
}

console.log(median(arr))