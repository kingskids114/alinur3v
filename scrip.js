let a = "";
function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function umn(a, b) {
    return a * b;
}

function del(a, b) {
    return a / b;
}
let oper=''

console.log(document.querySelectorAll('button'))
document.querySelectorAll('button').forEach(el => {
    el.addEventListener('click', (e) => {
        if(el.innerHTML=='+'||el.innerHTML=='-'||el.innerHTML=='*'||el.innerHTML=='/'){
            oper=el.innerHTML
        }
        a = a + el.innerHTML
        document.getElementById("ekran").innerHTML = a
    })
})
document.getElementById('equal').addEventListener('click', () => {
    let result;
    numbers = a.replace('=', "").split(oper)
    if (oper == '+') {result= plus(+numbers[0], +numbers[1]) }
    else if (oper == '-') {result= minus(+numbers[0], +numbers[1]) }
    else if (oper == '*') {result= umn(+numbers[0], +numbers[1]) }
    else if (oper == "/") {
        if (numbers[1 != 0]) {
           result= del(+numbers[0], +numbers[1])
        } else {
            result = "на ноль делить нельзя"
        }
    }
    document.getElementById("ekran").innerHTML = result
})

document.getElementById('delete').addEventListener('click',()=>{
    a=''
    document.getElementById("ekran").innerHTML = a
})