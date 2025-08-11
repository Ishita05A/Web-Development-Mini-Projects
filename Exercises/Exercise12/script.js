console.log("Hello World")
let random = Math.random()
console.log(random)
let boxes = document.querySelector(".container").children
function getrandomColor(){
    let val1 = Math.ceil(0 + Math.random()*255);
    let val2 = Math.ceil(0 + Math.random()*255);
    let val3 = Math.ceil(0 + Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}

// a + r (b - a)   ==> a -> staring & b -> Ending limit

Array.from(boxes).forEach(e =>{
    console.log(boxes);
     
    e.style.backgroundColor=getrandomColor();
    e.style.color = getrandomColor();
})
