//let check = false;

//const promise1 = new Promise((resolve, reject) => {
    //if (check){
      //  resolve("success");
    //}else{
    //    reject("failed");
   // }

//});
//console.log(promise1)
//asenkron yapilari senkrona cevirmek icin promise kullanilir.
//callback lerin alternatifi
//es6 ile geldi

/*let check = true;
function createPromise(){
    return new Promise((resolve, reject) => {
        if(check){
            resolve("Promise te herhangi bir sikinti yok")
        }else{
            reject("Sikinti cok buyuk")
        }
    })
}

createPromise()
.then((response) => {
    console.log(response)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("her zaman calisiyor")
})*/
    
// ? promise + xmlHttpRequest

function readStudents(url){
    return new Promise((resolve ,reject)=>{
        const xhr = new XMLHttpRequest();
        try{
            xhr.addEventListener("readystatechange",()=>{
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        }
        catch(error){
            reject(error);
        }

        xhr.open("GET",url);
        xhr.send();

    })
       

}

readStudents("students.json")
.then((response)=>{console.log(response)})
    .catch((error)=>{console.log(error)})
