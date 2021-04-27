let a
let b
let resultTemplate = document.getElementById('resultado')


function recogerValores(){
    a = parseInt(document.getElementById('inputA').value)
    b = parseInt(document.getElementById('inputB').value)
}

function escribirResultado(resultado) {
    resultTemplate.value = resultado
}

const sumar = () => {
    recogerValores()
    escribirResultado(a+b)
}

const restar = () =>{
    recogerValores()
    escribirResultado(a-b)
}

const multiplicar = () =>{
    recogerValores()
    escribirResultado(a*b)
}

const dividir = () => {
    recogerValores()
    escribirResultado(a/b)
}

const potencia = () => {
    recogerValores()
    escribirResultado(a ** b)
}