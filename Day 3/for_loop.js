// exercise 1

let len = 20

for (let i = 1; i <= len; i++){
    if (i % 3 == 0 && i % 5 == 0) {            // i mod 3 = 0
        console.log("FizzBuzz")
        break                                  //untuk memberhentikan loop
    } else if (i % 3 == 0){
        console.log("Fizz")
    } else if (i % 5 == 0){
        console.log("Buzz")
    } else{
        console.log(i)
    }
}