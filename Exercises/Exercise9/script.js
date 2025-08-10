// Faulty Calculator
let num = Math.random()
console.log(num)
let a = prompt("Enter 1st number")
let b = prompt("Enter Operation")
let c = prompt("Enter 2nd number")

let obj = {
    '+' : '-',
    '*' : '+',
    '-' : '/',
    '/' : '**'
}


if (num < 0.1) {
    b = obj[b]
    alert(`${eval(`${a} ${b} ${c}`)}`)
}
else{
    alert(`${eval(`${a} ${b} ${c}`)}`)
}
