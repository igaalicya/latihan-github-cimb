function start () {
    return function () {
      return [1,2,[
        {
          nama: 'Doraemon',
          pekerjaan: 'Manjain orang'
        },
        {
          nama: 'Seto',
          kontak: {
            rumah: 'BSD',
            telfon: ['081234', '432108']
          }
        }
      ],4,5]
    }
  }

  console.log(start()()[2][1].kontak.telfon[0])

//   function hasil(hasil){
//       let result = start(hasil)
//       console.log(result[2][1].kontak.telfon[0])
//   }


// jika function ada namanya
// function start () {
//     return function e () {
//       return [1,2,[
//         {
//           nama: 'Doraemon',
//           pekerjaan: 'Manjain orang'
//         },
//         {
//           nama: 'Seto',
//           kontak: {
//             rumah: 'BSD',
//             telfon: ['081234', '432108']
//           }
//         }
//       ],4,5]
//     }
//     return e
//   }

//   console.log(start()()[2][1].kontak.telfon[0])