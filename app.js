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

function readStudents(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    try {
      xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      })
      
    } catch (error) {
      reject(error)
    }

    xhr.open("GET", url);
    xhr.send();
  })
}

// readStudents("students.json")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

function getUsers(url){
  return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange",() => {
      try {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));}
      } catch (error) {
        reject(error)
        
      }
    })

    xhr.open("GET",url);
    xhr.send();
  })
}

function getCommentsByUserId(url){
  return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange",() => {
      try {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));}
      } catch (error) {
        reject(error)
        
      }
    })

    xhr.open("GET",url);
    xhr.send();
  })

}
// getUsers("https://jsonplaceholder.typicode.com/users/3")
// .then((data) => {
//   //data.forEach((user) => {console.log(user.name)})
    
  
//   //console.log("Daha sonra farkli asenkron kodlarini calisitirabiliriz")//by kod yukaridaki "function getUsers" icin yazildi
//   console.log(data);
//   return getCommentsByUserId(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
// })
// .then((res) => {console.log(res)})

// .catch((err) => {
//   console.log(err);
// })

const p1 = Promise.resolve("birinci promise calisti");
const p2 = Promise.resolve("ikinci promise calisti");
const p3 = new Promise((resolve, reject) => {
  resolve("ucuncu promise calisti");
})
const p4= Promise.reject("Hata yapma reyis");

Promise.all([p1, p2, p3,p4])
  .then((res) => {
    //console.log(res)
  for(let value of res){
    console.log(value)
  }
  })
  .catch((err) => {
    console.log(err);
  })