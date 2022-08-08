/*const edad = 17

if(edad >= 18) {
    console.log("Puede pasar")
} else {
    console.log("No puede pasar")
}

(edad >= 18) ? console.log("Puede pasar") : console.log("No puede pasar")


const numero = 2

let esPar = (numero % 2 == 0) ? "Par" : "Impar"

console.log(esPar)


const desayuno = "cafe"

(desayuno == "cafe") ? "Desayuno cafe con leche" : (desayuno == "te") ?  "Desayuno te con leche" : (desayuno == "chocolatada") ? "Desayuno chocolatada" : "Desayuno mate"


const personas = JSON.parse(localStorage.getItem("personas")) ?? []

const trabajador1 = {
    username : "Fran",
    password: "1234",
    email: "f@f.com",
    sueldo: undefined
}
const trabajador2 = null

const trabajador3 = {
    username : "Pepe",
    password: "1234",
    email: "p@p.com",
    sueldo: 5000
}

const trabajadores = [trabajador1, trabajador2, trabajador3]

console.log(trabajador2?.sueldo)

let acumulador = 0

trabajadores.forEach(trabajador => {
    acumulador += trabajador?.sueldo ?? 0
})

console.log(acumulador)


class Trabajador {
    constructor(nombreApellido, email, sueldo) {
        this.x = nombreApellido
        this.y = email
        this.z = sueldo
    }

    ap() {
        console.log("Se asigno a RRHH")
    }
}

const trabajador1 = new Trabajador("Maria", "m@m.com", 4000)

const {x: nombreApellido, y: email, ap: asignarPuesto} = trabajador1

console.log(nombreApellido, email)

asignarPuesto()

console.log(trabajador1)

function puestos({ap: asignarPuesto}) {
    asignarPuesto()
}

function mostrarEmpleados({x: nombreApellido, y: email}) {
    console.log(nombreApellido, email)
}

puestos(trabajador1)
mostrarEmpleados(trabajador1)*/

const persona1 ={
    nombre: "Julian",
    apellido: "Julien", 
    edad: 22,
    mascotas: [
        {nombre: "Firulais", animal: "Perro"},
        {nombre: "Pelusa", animal: "Gato"}
    ]
}

const persona2 = structuredClone(persona1)

persona2.nombre = "Emily"
persona2.mascotas[0] = null

console.log(persona2)
console.log(persona1)