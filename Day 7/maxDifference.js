arrAcak = [7, 3, 12, 8, 9]

function findMaxDiff(arrAcak){
    var diffs = [];
    for(var i = 1; i < arrAcak.length; i++){
        for(var j = 0; j < i; j++){
            if(arrAcak[i] > arrAcak[j]){
                diffs.push(arrAcak[i]-arrAcak[j]);
            }
        }
    }
    return Math.max.apply( Math, diffs );
}

console.log(findMaxDiff(arrAcak))


// cara 2
function maxDiff(arr = []){
    arr.sort(function(a,b){
        return a-b
    })
    return arr[arr.length - 1] - arr[0]
}

console.log(maxDiff([5, 3, 19, 7, 12]))