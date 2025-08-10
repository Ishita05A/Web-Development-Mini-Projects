// Using for loop...
 let a = prompt("Enter Number")
 let fact = 1;
 for(let i = 1; i<=a;i++){
    fact*=i;
 }
 alert(`${fact}`)

 // Using reduce method
let x = 6;
 function factorial(number){
 let arr = Array.from(Array(number+1).keys())
 let y = arr.slice(1,).reduce((w,u)=>{
   return w*u;
 })
 return y
 }
let fac = factorial(x);
console.log(fac)
