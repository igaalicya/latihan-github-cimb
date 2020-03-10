//exercise 2

let len = 50
let FizzBuzzCounter = 0

for (let i = 1; i <= len; i++){
    if (i % 3 == 0 && i % 5 == 0) {            
        console.log("FizzBuzz")
        FizzBuzzCounter += 1

        if(FizzBuzzCounter == 2){
            break
        }                                  
    } else if (i % 3 == 0){
        console.log("Fizz")
    } else if (i % 5 == 0){
        console.log("Buzz")
    } else{
        console.log(i)
    }
}