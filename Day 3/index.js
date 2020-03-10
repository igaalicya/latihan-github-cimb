// let input = 'hai Iga'            // variable string yang ada isinya selalu bernilai true

// while (input){                   // penggunaan sama dengan if else 
//     console.log('loop')          // akan terjadi infinite loop karena while selalu bernilai true
// }                                // cara memberhentikan infinite loop ctrl + c

// let counter = 1                  // deklarasi counter di luar loop
// while (counter < 5){
//     console.log('halo')
//     counter++
// }

// for (let i = 0; i < 5; i++){     // for loop lebih cepet dari while, i++ bisa diganti i+=1
//     console.log(i) 
// }

// Big O notation, data structure and algorithm > cek keefektifan kodingan, lebih cepat dan lebih sedikit memori

let result = 1
for (let i = 1; i <= 5; i++){

    for (let j = 1; j <=5; j++){
        result+=j
    }
    console.log(result)
}