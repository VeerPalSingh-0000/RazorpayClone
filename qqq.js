// -------Callback----------
// console.log("s...");
// console.log("1...2...3");
// setTimeout(()=>{
//     console.log("last");
// },2000)

// console.log("dsd");
// console.log("dcdf");
// console.log("cdd");

// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 done");
//         callback();
//     }, 1000);
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log("Step 2 done");
//         callback();
//     }, 1000);
// }

// step1(() => {
//     step2(() => {
//         console.log("All steps completed!");
//     });
// });

// async function fetchData() {
//     console.log("Fetching data...");
//     let data = await new Promise(resolve => setTimeout(() => resolve("Data received"), 2000));
//     console.log(data);
// }

// console.log("Before function call");
// fetchData();
// console.log("After function call");

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved!");
//     }, 2000);
// });

// console.log("Before promise");

// // Handling the promise
// myPromise.then(r=>console.log(r));
// console.log("After promise");

// function step1() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Step 1 done");
//             resolve();
//         }, 1000);
//     });
// }

// function step2() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Step 2 done");
//             resolve();
//         }, 1000);
//     });
// }

// step1()
//     .then(() => step2())
//     .then(() => console.log("All steps completed!"));

// function textFile(textFile) {
//     return new Promise(resolve => {
//         readTextFile(textFile, text => resolve(text));
//     });
// }

// // File read hone ke baad console pe print karega.
// textFile("plans.txt").then(console.log);

// async function fetchData() {
//     console.log("Fetching data...");
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let data = await response.json();
//     console.log("data is :",data);
// }

// fetchData();
