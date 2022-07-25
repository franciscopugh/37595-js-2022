/*const cosas1 = [9, true, 5, "Hola", null, "Saludos", 3]
const cosas2 = []

for(let i = 0; i<cosas1.length;i++) {
    console.log(cosas1[i]) //cosas1[0] cosas1[1] ... cosas1[6]
}

console.log(cosas1)*/
/*
const animales = []

animales.push("Perrito")
animales.push("Gatito")
animales.push("Pecesito")
animales.push("Cabrita")
animales.push("Caballito")
animales.push("Patito")

//animales.splice(-10, 1)
console.log(animales.join(","))


let elementoEliminado1 = animales.shift()
let elementoEliminado2 = animales.shift()
let elementoEliminado3 = animales.shift()

console.log(elementoEliminado)

const alumnos1 = ["Marcos", "Aye", "Benja"]
const alumnos2 = ["Rodrigo", "Matias", "Vero"]
const alumnos3 = ["Juan", "Sandra", "Eduardo"]

const alumnos = alumnos2.concat(alumnos1.concat(alumnos3))


const alumnos = ["juan", "sandra", "eduardo", "rodrigo", "matias", "vero", "marcos", "aye", "benja"]
/*
let nombreEliminar = prompt("Ingrese un nombre a eliminar").toLowerCase()

let indice = alumnos.indexOf(nombreEliminar)

if(indice != -1) {
    alumnos.splice(indice,1)
} else {
    alert("Nombre no encontrado")
}

console.log(alumnos.reverse())*/

class Profe {
    constructor(nombre, apellido, edad, sueldo) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.sueldo = sueldo
    }
}

const profe1 = new Profe("Francisco", "Pugh", 17, 10000)
const profe2 = new Profe("Marco", "Perez", 21, 12000)
const profe3 = new Profe("Tomas", "Cabrera", 20, 11000)
const profe4 = new Profe("Juan", "Martin", 23, 12000)

const profes = [profe1, profe2, profe3, profe4]

console.table(profes)