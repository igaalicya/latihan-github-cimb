arr =[-7, 5, -3, 6]

const sumArray = (arr) => {
    let positive = 0
    let negative = 0
    arr.forEach(element => {
        if(element >= 0){
            positive += element
        } else{
            negative += element
        }
    });
    return [positive, negative]
}

console.log(sumArray(arr))