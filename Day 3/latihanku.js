// let mobil = ['Alya','Xenia','Avanza'];

// console.log(mobil[0])

// console.log(mobil[1])

// console.log(mobil[2])

// console.log(mobil[3])


// let buah, bPjg, i;

// buah = ['Jeruk', 'Nanas', 'Apel'];

// bPjg = buah.length;

// for (i = 0; i < bPjg; i++) {
// 	console.log(buah[i]);
// }

// let mobil = ['Alya','Xenia','Avanza'];

// let w = mobil.length; 
// let x = mobil.sort(); 
// let y = mobil.reverse();
// let z = mobil.indexOf('Xenia');

// console.log(w)
// console.log(x)
// console.log(y)
// console.log(z)

// let buah = ['Jeruk','Nanas','Apel'];
// buah.pop(); 
// console.log(buah)
// buah.push('Kiwi');
// console.log(buah)

// let buah = ['Jeruk','Nanas','Apel'];
// buah.shift();
// console.log(buah)
// buah.unshift('Lemon');
// console.log(buah)

let buah = ['Jeruk','Nanas','Apel'];
buah.splice(2, 0, 'Lemon', 'Kiwi');
console.log(buah)
buah.splice(0, 1);
console.log(buah)

delete buah[0];
console.log(buah)
