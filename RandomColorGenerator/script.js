console.log('Hello World');
function generateRandomColor(){
    
    let a = Math.ceil(0+255*Math.random())
    let b = Math.ceil(0+255*Math.random())
    let c = Math.ceil(0+255*Math.random())
    return (`rgb(${a},${b},${c})`)
}
let boxes = document.querySelector(".container").children;
setInterval(() => {
    for(let i = 0;i<boxes.length;i++){
    boxes[i].style.backgroundColor = generateRandomColor();
}
}, 1000);
