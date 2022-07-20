/*function saludar() {
    console.log("Hola, buenas tardes!")
}

saludar()
saludar()
saludar()
saludar()

function sumar(num1 = 0, num2 = 0) {
    return num1 + num2
}

let numero1, numero2

do {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
} while(isNaN(numero1) || isNaN(numero2))

console.log(numero1)
let resultado = sumar(5,10)
console.log(resultado)

const IVA = 1.21

function calcularIVA(precio) {
    IVA = 1.30
    return precio * IVA
}

console.log(IVA)
console.log(calcularIVA(100))
console.log(IVA)


function sumar(num1, num2) {
    return num1 + num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    return num1 / num2
}

function restar(num1, num2) {
    return num1 - num2
}

const sumar = function(num1, num2) {return num1 + num2}

const multiplicar = function(num1, num2) {return num1 * num2}

const dividir = function(num1, num2) {return num1 / num2}

const restar = function(num1, num2) {return num1 - num2}
*/

const sumar = (num1, num2) => num1 + num2

const multiplicar = (num1, num2) => num1 * num2

const dividir = (num1, num2) => num1 / num2

const restar = (num1, num2) => num1 - num2

let respuesta

do {
    let operacion,numero1, numero2

    do {
        numero1 = parseFloat(prompt("Ingrese un numero"))
        numero2 = parseFloat(prompt("Ingrese otro numero"))
        operacion = prompt("Ingrese una operacion (+,-,/,*)")
    
        if(isNaN(numero1) || isNaN(numero2)) {
            console.log("Numero incorrecto")
        }
    
        if(numero2 === 0 && operacion == "/") {
            console.log("No se puede dividir entre cero")
        }
    }while((isNaN(numero1) || isNaN(numero2)) || (numero2 === 0 && operacion == "/"))
    
    switch(operacion) {
        case "+":
            console.log(sumar(numero1,numero2))
            break
        case "-":
            console.log(restar(numero1,numero2))
            break
        case "*":
            console.log(multiplicar(numero1,numero2))
            break
        case "/":
            console.log(dividir(numero1,numero2))
            break
        default:
            console.log("Operacion no valida")
    }
    do {
        respuesta = prompt("¿Desea ingresar otra operacion?").toLowerCase()
    }while(respuesta != "si" && respuesta != "no")
   
}while(respuesta != "no")
