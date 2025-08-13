let arr = [4,7,8,2,6,6]
function doubleArr(){
    let a = []
    for(let i = 0; i<arr.length;i++){
    if(arr[i] != arr[i+1]) a.push(2*arr[i]);
    else{
        a.push(arr[i]*2);
        a.push(arr[i+1]);
        i++;
    }
}
console.log(a)
}
doubleArr(arr)