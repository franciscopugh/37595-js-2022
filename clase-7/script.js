class Empleado {
    constructor(id, nombre, apellido, edad, sueldo) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.sueldo = sueldo
    }
}

const empleado1 = new Empleado(1, "Pepe", "Perez", 22, 10000)
const empleado2 = new Empleado(2, "Maria", "Martinez", 23, 12000)
const empleado3 = new Empleado(3, "Pedro", "Parker", 25, 8000)
const empleado4 = new Empleado(4, "Lucia", "Linares", 20, 8000)
const empleado5 = new Empleado(5, "Ricardo", "Rodriguez", 25, 13000)

const empleados = [empleado1, empleado2, empleado3, empleado4, empleado5]
/*
empleados.forEach(emplArray => {
    emplArray.sueldo *= 1.30 //emplArray.sueldo = emplArray.sueldo * 1.30
})


console.log(empleados.find(emplArray => emplArray.sueldo < 8000))
console.log(empleados.filter(emplArray => emplArray.sueldo < 8000))

if(empleados.length === 0) {

}

console.log(empleados.map(emplArray => `${emplArray.nombre} - ${emplArray.apellido}`))

const sueldos = empleados.map(emplArray => emplArray.sueldo)
console.log(sueldos)
console.log(sueldos.reduce((prev,act) => prev + act, 0))
const carac = ['h', 'o',1, 'a',' ', 'c', 4,'d','e','r','s']
console.log(carac.reduce((p,a) => p + a, ''))*/

console.log(empleados.sort((empl1, empl2) => empl2.sueldo - empl1.sueldo))

const edades = empleados.map(emplArray => emplArray.edad)

console.log(edades.sort((edad1, edad2) => edad1-edad2))
