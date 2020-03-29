let param1 = 'hello'
let param2 = 'world'

const fnBaru = (param2, param1) => {    // Declaration
  return param2 + ' ' + param1          // Program
}

// console.log(fnBaru(param1, param2))  // Execution (execute atau call)

//console.log(param2 + ' ' + param1)

let a = 'abc'                           // global variable
const fnKedua = () => {
  a = 'cba'
}

fnKedua()

// console.log(a)

let arr = [1,2,3,4,5]

arr.forEach((val, idx, arr) => {
  // iterasi 2
  // val = 2
  // idx = 1
  // arr = [1,2,3,4,5]
  // console.log(val, idx, arr)
})

const forEachRep = (arr, cb) => {
    for(let i=0; i<arr.length; i++){
        cb(arr[i], i, arr)
    }
}

forEachRep(arr, (param1, param2, param3) => {
    console.log(param1, param2, param3)
})

for(let item of arr){
    console.log(item)
}

// for (let item of arr) {
//   console.log(item)
// }

// for (let i = 0; i < arr.length; i++) {
//   arr[i]
// }

let saya = {
    nama: 'Iga',
    pekerjaan: 'Tidur',
    status: 'Sehat'
  }
  
  for (let key in saya) {
    key = 'pekerjaan'
    console.log(key, saya['pekerjaan'])
  }
  
  // let nama = 'status'
  
  // console.log(saya[nama])
  
  // saya['nama']
  // console.log(saya.nama)

  setTimeout(() => {
      console.log('hello')
  }, 3000)

  