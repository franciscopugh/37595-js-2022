/*let desayuno = prompt("Ingrese su desayuno").toLowerCase() //Asignacion desayuno es igual a Cafe
//let complemento = "Leche"

const esCafe = (desayuno == "cafe")
const esTe = (desayuno == "te")
const esChoc = (desayuno == "chocolatada")

//CAFE Cafe CaFe cafe 
if(esCafe) { //Comparacion desayuno es igual a cafe?
    console.log("Desayuno cafe con leche")
    
    if(complemento == "Leche") {
        console.log("Desayuno cafe con leche")
    } else {
        console.log("Desayuno cafe solo")
    }

} else if(esTe) {
    console.log("Desayuno te con leche")
} else if(esChoc) {
    console.log("Desayuno chocolatada con leche")
} else {
    console.log("Desayuno mate mirando la pared")
}

/
let numero = parseInt(prompt("Ingrese un numero"))

//10 / 2 = 5 Resto= 0
//11 / 2 =5 Resto = 1

if(numero % 2 == 0) { //0 1
    console.log("El numero es par")
} else {
    console.log("El numero es impar")
}


if(numero % 2) { //0 1
    console.log("El numero es impar")
} else {
    console.log("El numero es par")
}


//0 1
if(0) {
    console.log("V")
} else {
    console.log("F")
}


let numero1 = 5
let numero2 = "5"


    == comparar valor y no tipo
    === comparar valor y tipo de dato
    != compara si el valor es distinto, no el tipo
    !== compara si el valor y el tipo son distintos
    

if(numero1 !== numero2) {
    console.log("V")
} else {
    console.log("F")
}

if("a" > "b") { //>= no es lo mismo que =>
    console.log("V")
} else {
    console.log("F")
}



let numero1 = 6
let numero2 = 12


if(numero1 === 5 || numero2 === 10) {
    console.log("V")
} else {
    console.log("F")
}


    numero1     ||      numero2
      V          V           V
      V          V           F
      F          V           V 
      F          F           F


if(numero1 === 5 && numero2 === 10) {
    console.log("V")
} else {
    console.log("F")
}

/*
    numero1     &&      numero2
      V          V           V
      V          F           F
      F          F           V 
      F          F           F




let numero = parseFloat(prompt("Ingrese un numero"))
//NaN Not a Number (por ejemplo, cuando ingreso texto)

if(!(isNaN(numero))) { //V si numero es NaN, falso si no lo es
    console.log(numero + 5)
} else {
    alert("Ingrese un numero valido")
}
*/

//Si 1-5 desaprobado, 6 o 7 aprobado Bien, 8 o 9 aprobado Nota Muy Bien y 10 aprobado nota de Excelente

let nota = parseInt(prompt("Ingrese una nota"))

if(nota >= 1 && nota <=5) { 
    console.log("El/la alumno/a esta desaprobado/a")
} else if(nota === 6 || nota  === 7) { //nota >= 6 && nota <=7
    console.log("El/la alumno/a esta aprobado/a con nota de Bien")
} else if(nota === 8 || nota  === 9) { 
    console.log("El/la alumno/a esta aprobado/a con nota de Muy Bien")
} else if(nota === 10) {
    console.log("El/la alumno/a esta aprobado/a con nota de Excelente")
} else {
    console.log("Nota no valida")
}

if(nota >= 1 && nota <= 10){
    if(nota <=5) {
        console.log("El/la alumno/a esta desaprobado/a")
    } else if( nota <= 7) { 
        console.log("El/la alumno/a esta aprobado/a con nota de Bien")
    } else if( nota <= 9) { 
        console.log("El/la alumno/a esta aprobado/a con nota de Muy Bien")
    } else {
        console.log("El/la alumno/a esta aprobado/a con nota de Excelente")
    }
} else {
    console.log("Nota no valida")
}


