let check = true;

const promise1 = new Promise((resolve, reject) => {
  if (check){
    resolve("Promise basarili");
  }else {
    reject("Promise basarisiz...");
  }
});
  

console.log(promise1)