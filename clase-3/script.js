/*console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(100)

for(let i=1;i<101;i++) { // i+=1  i=i+1
    console.log(i)
}
         
let acumulador = 0
let control = 0
for(let i = 1; i < 11; i++) {
    let nota = parseInt(prompt("Ingrese una nota"))

    if(isNaN(nota)) {
        console.log("Numero no valido")
        break
    }
    acumulador += nota

    if(i == 10) {
        control = 1
    }
}

if(control == 1) {
    console.log("El promedio de las notas es igual a: " + (acumulador / 10))
    console.log(`El promedio de las notas es igual a: ${acumulador / 10}`)     
}
let acumulador = 0
let contador = 0
for(let i = 1; i < 11; i++) {
    let nota = parseInt(prompt("Ingrese una nota"))

    if(isNaN(nota)) {
        console.log("Numero no valido")
        continue
    }
    
    acumulador += nota
    contador++
    console.log(acumulador)
    console.log(contador)

}

console.log("El promedio de las notas es igual a: " + (acumulador / contador))
console.log(`El promedio de las notas es igual a: ${acumulador / contador}`)     


let repetir = false

while(repetir) { //repetir == true
    let numero1 = parseFloat(prompt("Ingrese un numero"))
    let numero2 = parseFloat(prompt("Ingrese otro numero"))

    console.log(numero1 + numero2)
    let confirmacion = prompt("¿Desea ingresar mas numeros?").toLowerCase()

    if(confirmacion == "no" || confirmacion =="no quiero") {
        repetir = false
        //break
    }

}*/

let numero1, numero2, operador
do {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operador = prompt("Ingrese una operacion (+,-,*,/)")

    if(isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor ingrese un numero valido")
    }

    if(numero2 === 0 && operador == "/") {
        alert("Disculpe, no se puede hacer la division entre cero")
    }

}while((isNaN(numero1) || isNaN(numero2)) || (numero2 === 0 && operador == "/"))

switch(operador) {
    case "+":
        alert(`El resultado de la suma es: ${numero1 + numero2}`)
        break
    case "*":
        alert(`El resultado de la multiplicacion es: ${numero1 * numero2}`)
        break
    case "-":
        alert(`El resultado de la resta es: ${numero1 - numero2}`)
        break
    case "/":
        alert(`El resultado de la division es: ${numero1 / numero2}`)
        break
    default:
        alert("Operacion no valida")
}

/*
    numero1     ||      numero2
    V           V            V
    V           V            F
    F           V            V
    F           F            F
*/