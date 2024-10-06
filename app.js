// let check = true;
// //true ise console da Promise basarili
// //false ise console da Promise basarisiz

// const promise1 = new Promise((resolve, reject) => {
//   if (check){
//     resolve("Promise basarili");
//   }else {
//     reject("Promise basarisiz...");
//   }
// });
  

// console.log(promise1)
// let check = false;
// function createPromise() {
//   return new Promise ((resolve, reject) => {
//     if (check) {
//       resolve("Promiste herhangi bir sikinti yok...");
//     }else {
//       reject("Sikinti buyuk...");
//     }
//   })
// }

// createPromise()
// .then((response) => { //resolve ile donerse then yakalr
//   console.log(response);
// })
// .catch((error) => {//reject ile donerse catch yakalr
//   console.log(error);
  
// })
// .finally(() => {//finally her zaman yakalr
//   console.log("her zaman");
// })
// //asenkron tapilari senkrona cevirir
// // callback lerin alternatifi
// // es6 ile yazildi

// ? PROMISE + XMLHTTPREQUEST