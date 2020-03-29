const digitalRoot = (num) => {
    while(num > 9){
        let splitNum = num.toString().split('')
        splitNum = splitNum.map(Number)

        // let result = 0
        // for(let i = 0; i<splitNum.length; i++){
        //     result += splitNum[i]
        // }
        // num = result

        num = splitNum.reduce((a,b) => a+b)
    }

    return num
}

console.log(digitalRoot(8978))



