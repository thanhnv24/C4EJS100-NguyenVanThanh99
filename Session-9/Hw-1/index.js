//1.1
// let promise = new Promise(function(resolve, reject) {
//     resolve(setTimeout(() => {
//         console.log('Promise is da best 1')
//     }, 2000))
// });
//1.2
// async function pRomise(){
//     let promise = new Promise(function(resolve,reject){
//         setTimeout(()=> resolve('Promiise is da best 2'),2000)
//     })
//     let result = await promise;
//     alert(result);
// };
// pRomise();
//1.3
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('Promiise is da best 3'), 2000)
});
promise.then(
    result => console.log(result),
    error => console.log(error)
);