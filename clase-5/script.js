/*let nombrePersona1 = "Francisco"
let apellidoPersona1 = "Pugh"
let edadPersona1 = 17
let alturaPersona1 = 2.00

let persona1 = {
    nombre: "Francisco",
    apellido: "Pugh",
    edad: 17,
    altura: 2.00
}

let persona2 = {
    nombre: "Pepe",
    apellido: "Perez",
    edad: 20,
    altura: 1.80
}

persona1 = null

//persona1.nombre = "Juan"

//console.log(persona1, persona2)
console.table(persona1)

function Persona(nombreParam = "", apellidoParam = "", edadParam = 1, alturaParam = 1){
    this.nombre = nombreParam;
    this.apellido = apellidoParam;
    this.edad = edadParam;
    this.altura = alturaParam;
    this.saludar = () => console.log(`${this.nombre} te esta saludando`)
}

const persona1 = new Persona("Francisco", "Pugh", 17, 2.0)
const persona2 = new Persona("Maria", "Marialez", 22, 1.80)
const persona3 = new Persona()
persona1.saludar()
persona2.saludar()

console.log(persona1)
//console.log(persona2)
//console.log(persona3)

class Producto {
    constructor(nombre, marca, precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

    //1.x, siendo x el porcentaje de aumento (Ej: 1.10, aumente un 10%)
    aumentarPrecio(porcAumento) {
        this.precio *= porcAumento // this.precio = this.precio * porcAumento (Ej: 100 * 1.10 = 110)
    }

    //0.x, siendo x el porcentaje de disminucion (Ej: 0.90, disminucion 10%)
    disminuirPrecio(porcDisminucion) {
        this.precio *= porcDisminucion
    }

    aumentarStock(nuevoStock) {
        this.stock += nuevoStock
    }

    disminuirStock(nuevoStock) {
        this.stock -= nuevoStock
    }

}

const producto1 = new Producto("Arroz", "Arrocin", 120, 30)
const producto2 = new Producto("Cafe", "Le cafe", 430, 20)
const producto3 = new Producto("Fideos", "Fidein", 130, 40)

console.log(producto1.precio)
producto1.aumentarPrecio(1.30)
producto2.aumentarPrecio(1.10)
producto3.aumentarPrecio(1.10)
console.log(producto1.precio)
producto1.disminuirPrecio(0.90)
console.log(producto1.precio)
console.log(producto1.stock)
producto1.aumentarStock(10)
console.log(producto1.stock)
producto1.disminuirStock(20)
console.log(producto1.stock)*/


class Animal {
    constructor(nombre, especie, color, peso, edad) {
        this.nombre = nombre
        this.especie = especie
        this.color = color
        this.peso = peso
        this.edad = edad
    }

    moverse(velocidad) {
        console.log(` El animal ${this.nombre} se mueve a ${velocidad} km/h`)
    }

    comer(comida) {
        console.log(`El animal ${this.nombre} esta comiendo ${comida}`)
    }
}

const animal1 = new Animal("Rogelio", "Gato", "Naranja", 4, 5)

animal1.moverse(20)
animal1.comer("Atun")