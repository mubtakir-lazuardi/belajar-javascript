// function init() {
//  // let nama = 'Farhan'

//  return function (nama) {
//   console.log(nama)
//  }

// }

// let panggilNama = init()
// panggilNama('Farhan')
// panggilNama('Yudhi')







// function ucapkanSalam(waktu) {
//  return function (nama) {
//   console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);

//  }
// }

// let selamatPagi = ucapkanSalam('Pagi')
// let selamatSiang = ucapkanSalam('Siang')
// let selamatMalam = ucapkanSalam('Malam')

// selamatPagi('Farhan')
// selamatMalam('Galih')






let add = (function() {
 let counter = 0
 return  function () {
  return ++counter
 }
})()

counter = 100


console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
