let str = "Mirror"
let newStr = str;
for(let i = str.length-1;i>=0;i--){
    let ch = str.charAt(i)
    newStr = newStr.concat(ch)
    
}
console.log(newStr);

