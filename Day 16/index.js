// let result = []

// const triangleArray = (panjang) => {
//     for (let i = 0; i < panjang; i++){  
        
//         for (let j = 0; j < 1; j++){
//             result[i] = i+1
//         }
//         console.log(result)
//     }
// }
// console.log(triangleArray(5))


// const fibo = (panjang) => {
//     let fib = [0,1]
//     for (let i = 1; i < panjang; i++){  
        
//         for (let j = 1; j < 1 + i ; j++){
//             result[i] = fib[j - 2] + fib[j - 1]
//         }
//         console.log(result)
//     }
// }

// console.log(fibo(5));

// function pascalsTriangle(n) {
//     var pascal = [];
//     var idx = 0;
    
//     for ( var i = 0; i < n; i++ ) {
//       idx = pascal.length - i;
//       for ( var j = 0; j < i+1; j++ ) {
//         if ( j === 0 || j === i ) {
//           pascal.push(1);
//         } else {
//           pascal.push( pascal[ idx+j ] + pascal[ idx+j-1 ] );
//         }
//       }
//     }
    
//     return pascal;
//   }

//   console.log(pascalsTriangle(5))

function oddRow(n) {
    let arr = [n * n - n + 1];
    for(let i = 1; i < n; i++){
        arr.push( arr[arr.length-1] + 2 );
        // console.log(arr[i])
    }
    return arr;
    }
    
    console.log(oddRow(2))