// let a=`Veer \n Pal \n Singh`
// console.log(a);

// let b= "A newline character is written like \"\\n\"."

// console.log(b);

// console.log(Math.pow(2,10));
// let n=0;
// while(n<=12){
//     if(n%2==0){
//         console.log(n);
     
//     }
//     n++;
// }

// 2nd chapter----
//1// for (let i=1;i<=10;i++){
//     let row = "";
//     for(let j=1;j<=i;j++){
   
//         row += " # ";
//     }
//     console.log(row);   
// }

//2
// for(let i=1;i<=100;i++){
//     if(i%3==0){
//         console.log("fizz");
//         continue;
//     }
//     if(i%5==0 && i%3!=0){
//         console.log("buzz");
//         continue;
//     }
//     console.log(i);
    
// }

// 3

// for(let i=1;i<=8;i++){
//     let str="";

//     for(let j=1;j<=8;j++){

//         if(i%2!=0){
//             if(  (str.length==0 || str[str.length-1]=="#")){
//                 str+="_";
//             }
//             else{
//                 str+="#";
//             }
//         }
        
//         if(i%2==0){
//             if( (str.length==0 || str[str.length-1]=="_")){
//                 str+="#";
//             }
//             else{
//                 str+="_";
//             }
//         }
        
//     }
//     console.log(str);
    
// }

// ------------------------------------------------
// function square(x) {
//     return x * x;
//     }

// console.log(square(12));

// function minus(a, b) {
//     if (b === undefined) return-a;
//     return a- b;
//     }
//     console.log(minus(10));


const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
    export function dayName(number) {
    return names[number];
    }
    251
   export function dayNumber(name) {
    return names.indexOf(name);
    }
